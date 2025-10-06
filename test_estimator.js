// Quick node-based smoke test: load script.js and invoke estimateFpsForSetup
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
// Extract the estimator function and BENCHMARK_DB by running the file in a VM and exposing them
const sandbox = { console, setTimeout, clearTimeout, window: {}, document: { getElementById: () => null, querySelectorAll: () => [] }, navigator: {}, localStorage: { getItem: () => null, setItem: () => {} } };
vm.createContext(sandbox);
try {
  vm.runInContext(code, sandbox);
  const fn = sandbox.estimateFpsForSetup;
  const BENCH = sandbox.BENCHMARK_DB;
  if (typeof fn !== 'function') {
    console.error('estimateFpsForSetup not found in sandbox');
    process.exit(2);
  }
  const checks = [];
  function runCheck(name, game, gpu, cpu, ram, quality, resFactor, minAccept, maxAccept) {
    const gr = sandbox.GAME_REQUIREMENTS.find(g => g.name === game) || null;
    const fps = fn(gr, gpu, cpu, ram, quality, resFactor);
    console.log(`${name}: ${game} on ${gpu} / ${cpu} / ${ram}GB @ ${quality} (resFactor=${resFactor}) => ${fps} FPS`);
    checks.push({ name, fps, minAccept, maxAccept });
    return fps;
  }

  // Silent Hill F — conservative: RX 590 + R5 3600 should not be > 70 FPS at 1080p ultra
  runCheck('SHF_RX590', 'Silent Hill F', 'rx 590', 'ryzen 5 3600', 16, 'ultra', 1, 5, 70);
  // Check an RTX 3060 in the same game — should be reasonable and below some high ceiling
  runCheck('SHF_3060', 'Silent Hill F', 'rtx 3060', 'i7-12700k', 16, 'high', 1, 20, 160);
  // Lightweight esports title with older GPU should still be high FPS
  runCheck('Valorant_1060', 'Valorant', 'gtx 1060 6gb', 'i5-10400', 8, 'high', 1, 100, 400);
  // Heavy game on high-end GPU: Cyberpunk on RTX 3080 should be < 300 at 1080p high
  runCheck('Cyber_3080', 'Cyberpunk 2077', 'rtx 3080', 'i9-12900k', 16, 'high', 1, 20, 300);

  // Evaluate checks and exit non-zero if any are suspicious (outside allowed ranges)
  let failures = 0;
  for (const c of checks) {
    if (typeof c.minAccept === 'number' && c.fps < c.minAccept) {
      console.error(`FAIL: ${c.name} -> ${c.fps} < minAccept ${c.minAccept}`);
      failures++;
    }
    if (typeof c.maxAccept === 'number' && c.fps > c.maxAccept) {
      console.error(`FAIL: ${c.name} -> ${c.fps} > maxAccept ${c.maxAccept}`);
      failures++;
    }
  }
  if (failures > 0) {
    console.error(`${failures} checks failed`);
    process.exit(4);
  }
  console.log('All checks passed.');
} catch (e) {
  console.error('Error running sandboxed script:', e);
  process.exit(3);
}
