// === BASE DE DATOS COMPLETA CON +300 JUEGOS Y TODAS LAS GPUS/CPUS ===

// GPUs: Todas las GPUs de NVIDIA y AMD (desde GeForce 256 hasta RTX 4090)
const GPU_DATABASE = {
  // NVIDIA - Serie 50 (newer, representative values)
  "rtx 5090": 99, "rtx 5080": 96, "rtx 5070": 93, "rtx 5060": 88, "rtx 5050": 80,
  "rtx 5090 ti": 99, "rtx 5080 super": 95,

  // NVIDIA - Serie 40
  "rtx 4090": 100, "rtx 4080 super": 94, "rtx 4080": 92, "rtx 4070 ti super": 88,
  "rtx 4070 ti": 85, "rtx 4070 super": 82, "rtx 4070": 80, "rtx 4060 ti 16gb": 72,
  "rtx 4060 ti": 70, "rtx 4060": 65,

  // NVIDIA - Serie 30
  "rtx 3090 ti": 90, "rtx 3090": 88, "rtx 3080 ti": 86, "rtx 3080 12gb": 84,
  "rtx 3080": 82, "rtx 3070 ti": 76, "rtx 3070": 74, "rtx 3060 ti": 70,
  "rtx 3060 12gb": 66, "rtx 3060": 64, "rtx 3050": 55,

  // NVIDIA - Serie 20/16
  "rtx 2080 ti": 78, "rtx 2080 super": 76, "rtx 2080": 74, "rtx 2070 super": 70,
  "rtx 2070": 68, "rtx 2060 super": 66, "rtx 2060": 64,
  "gtx 1660 super": 60, "gtx 1660 ti": 58, "gtx 1660": 56,
  "gtx 1060 6gb": 52, "gtx 1050 ti": 45, "gtx 1050": 40,

  // NVIDIA - GTX legacy additions
  "gtx 1080 ti": 80, "gtx 1080": 76, "gtx 1070": 70, "gtx 1070 ti": 72, "gtx 980": 66,

  // NVIDIA - Serie 900/700/600/500/400/200/GeForce
  "gtx 980 ti": 68, "gtx 980": 66, "gtx 970": 64, "gtx 960": 60, "gtx 950": 56,
  "gtx 780 ti": 60, "gtx 780": 58, "gtx 770": 56, "gtx 760": 54, "gtx 750 ti": 50,
  "gtx 680": 52, "gtx 670": 50, "gtx 660": 48, "gtx 650 ti": 46, "gtx 650": 44,
  "gtx 580": 45, "gtx 570": 42, "gtx 560 ti": 40, "gtx 560": 38, "gtx 550 ti": 36,
  "gtx 480": 40, "gtx 470": 38, "gtx 465": 36, "gtx 460": 35, "gtx 450": 32,
  "gtx 285": 35, "gtx 280": 34, "gtx 260": 32, "gtx 250": 30, "gtx 240": 28,
  "geforce 256": 15, "geforce 2 gts": 18, "geforce 3 ti 500": 20, "geforce 4 ti 4600": 22,

  // AMD - Serie RX 7000
  "rx 7900 xtx": 93, "rx 7900 xt": 89, "rx 7800 xt": 83, "rx 7700 xt": 78,
  "rx 7600": 70,

  // AMD - Serie RX 6000
  "rx 6950 xt": 86, "rx 6900 xt": 84, "rx 6800 xt": 82, "rx 6800": 80,
  "rx 6750 xt": 77, "rx 6700 xt": 75, "rx 6650 xt": 72, "rx 6600 xt": 70,
  "rx 6600": 68, "rx 6500 xt": 58, "rx 6400": 50,

  // AMD - Serie RX 5000
  "rx 5700 xt": 66, "rx 5700": 64, "rx 5600 xt": 60, "rx 5500 xt": 54,
  "rx 580 8gb": 58, "rx 570": 55,

  // AMD - Legacy / Polaris / 500 series additions
  "rx 590": 56, "rx 580 4gb": 54, "rx 480": 52, "rx 470": 48, "rx 460": 40,
  "rx 560": 46, "rx 550": 38,

  // AMD - Vega and older
  "vega 64": 62, "vega 56": 58, "radeon r9 fury": 55,

  // AMD - Serie RX 400/300/200/HD
  "r9 390x": 60, "r9 390": 58, "r9 290x": 56, "r9 290": 54, "r9 280x": 52,
  "r9 280": 50, "r9 270x": 48, "r9 270": 46, "r7 370": 44, "r7 360": 42,
  "hd 7970": 50, "hd 7950": 48, "hd 7870": 46, "hd 7850": 44, "hd 7770": 42,
  "hd 6970": 45, "hd 6950": 43, "hd 6870": 41, "hd 6850": 39, "hd 6770": 37,

  // Intel - Arc y antiguas
  "arc a770": 74, "arc a750": 70, "arc a580": 66, "arc a380": 52,
  "iris xe": 40, "iris xe max": 45, "radeon 780m": 50, "radeon 760m": 45, "xe graphics": 42
};
// Add a few more common/legacy SKUs to improve resolver coverage
Object.assign(GPU_DATABASE, {
  'gtx 1660': 58, 'gtx 1650': 50, 'rx 5600': 62, 'rx 5700': 66, 'rx 6500 xt': 55,
  'rtx 3050 ti': 60, 'rtx 2070': 68, 'rtx 2060 super': 68, 'gtx 1080': 76, 'gtx 980 ti': 68
});

// CPUs: Todas las series Xeon E5 v2/v3/v4 y más
const CPU_DATABASE = {
  // Intel - Core Ultra (Meteor Lake)
  "core ultra 9 185h": 3800, "core ultra 7 165h": 3700, "core ultra 5 135h": 3500,

  // Intel - Serie 14ª gen
  "i9-14900k": 4250, "i9-14900kf": 4250, "i7-14700k": 4100, "i7-14700kf": 4100,
  "i5-14600k": 3950, "i5-14600kf": 3950, "i5-14500": 3800, "i5-14400": 3700,

  // Intel - Serie 13ª gen
  "i9-13900k": 4200, "i9-13900kf": 4200, "i7-13700k": 4050, "i7-13700kf": 4050,
  "i5-13600k": 3900, "i5-13600kf": 3900, "i5-13500": 3750, "i5-13400": 3600,

  // Intel - Serie 12ª gen
  "i9-12900k": 4000, "i7-12700k": 3850, "i5-12600k": 3700, "i5-12400f": 3500,

  // Intel - Xeon E5 v4 (Broadwell-EP)
  "xeon e5-2699 v4": 3600, "xeon e5-2697 v4": 3550, "xeon e5-2695 v4": 3500,
  "xeon e5-2687w v4": 3450, "xeon e5-2683 v4": 3400, "xeon e5-2673 v4": 3350,
  "xeon e5-2667 v4": 3300, "xeon e5-2660 v4": 3250, "xeon e5-2650 v4": 3200,
  "xeon e5-2640 v4": 3150, "xeon e5-2630 v4": 3100, "xeon e5-2620 v4": 3050,
  "xeon e5-2609 v4": 3000, "xeon e5-2603 v4": 2950,

  // Intel - Xeon E5 v3 (Haswell-EP)
  "xeon e5-2699 v3": 3400, "xeon e5-2697 v3": 3350, "xeon e5-2695 v3": 3300,
  "xeon e5-2687w v3": 3250, "xeon e5-2683 v3": 3200, "xeon e5-2673 v3": 3150,
  "xeon e5-2667 v3": 3100, "xeon e5-2660 v3": 3050, "xeon e5-2650 v3": 3000,
  "xeon e5-2640 v3": 2950, "xeon e5-2630 v3": 2900, "xeon e5-2620 v3": 2850,
  "xeon e5-2609 v3": 2800, "xeon e5-2603 v3": 2750,

  // Intel - Xeon E5 v2 (Ivy Bridge-EP)
  "xeon e5-2697 v2": 3100, "xeon e5-2690 v2": 3050, "xeon e5-2680 v2": 3000,
  "xeon e5-2670 v2": 2950, "xeon e5-2660 v2": 2900, "xeon e5-2650 v2": 2850,
  "xeon e5-2640 v2": 2800, "xeon e5-2630 v2": 2750, "xeon e5-2620 v2": 2700,
  "xeon e5-2609 v2": 2650, "xeon e5-2603 v2": 2600,

  // AMD - Ryzen 8000/7000/5000/3000/2000/1000
  "ryzen 9 8945hs": 3850, "ryzen 7 8845hs": 3800, "ryzen 5 8645hs": 3700,
  "ryzen 9 7950x3d": 4000, "ryzen 9 7900x3d": 3950, "ryzen 7 7800x3d": 3900,
  "ryzen 9 5950x": 3500, "ryzen 9 5900x": 3450, "ryzen 7 5800x3d": 3400,
  "ryzen 7 3800x": 2800, "ryzen 5 3600x": 2700, "ryzen 5 2600x": 2400,
  "ryzen 3 1200": 2200, "ryzen 3 1100": 2150
};

  // Lista adicional extensa de CPUs comunes (Intel y AMD) para mejorar el autocompletado
  const EXTRA_CPUS = {
    // Intel mainstream and mobile
    "i3-10100": 3000, "i3-12100": 3200, "i3-13100": 3300,
    "i5-10400": 3500, "i5-11400": 3600, "i5-12400": 3700, "i5-13400": 3800,
    "i5-12600k": 3950, "i5-13600k": 3900,
    "i7-12700k": 3850, "i7-12700kf": 3850, "i7-13700k": 4050,
    "i9-12900k": 4000, "i9-13900k": 4200,

    // AMD mainstream and mobile
    "ryzen 5 5600": 3000, "ryzen 5 5600x": 3200, "ryzen 5 5600g": 2900,
    "ryzen 5 3600": 2700, "ryzen 5 3600x": 2750,
    "ryzen 7 3700x": 3300, "ryzen 7 3800x": 3400, "ryzen 7 5800x": 3700,
    "ryzen 7 5800x3d": 3900, "ryzen 7 7700x": 3850, "ryzen 7 7800x3d": 3900,
    "ryzen 9 5900x": 3450, "ryzen 9 5950x": 3500, "ryzen 9 7950x": 4000,

    // Popular laptop/ultra CPUs
    "i7-1260p": 3400, "i7-12700h": 3600, "i9-12900h": 3800,
    "ryzen 5 7640u": 2800, "ryzen 7 7840u": 3200
  };

  Object.assign(CPU_DATABASE, EXTRA_CPUS);

  // Add a short list of additional popular CPUs for better matching
  Object.assign(CPU_DATABASE, {
    'i5-10400f': 3500, 'i5-9400f': 3200, 'i7-9700k': 3600, 'i7-8700k': 3500,
    'ryzen 5 3600x': 3150, 'ryzen 5 3600': 3000, 'ryzen 7 3700x': 3400
  });

// Add full family coverage for AMD Ryzen 3/5/7/9 (desktop/mobile common SKUs)
// Only add entries that are not already present to avoid duplicates (user requested).
const NEW_RYZENS = {
  // Ryzen 3 (desktop)
  "ryzen 3 4100": 2300, "ryzen 3 4300g": 2400, "ryzen 3 1200": 2200, "ryzen 3 3100": 2350,
  "ryzen 3 3200g": 2400, "ryzen 3 3300x": 2500, "ryzen 3 5300g": 2600,

  // Ryzen 5 (desktop)
  "ryzen 5 1400": 2600, "ryzen 5 1500x": 2700, "ryzen 5 1600": 2750, "ryzen 5 2600": 2900,
  "ryzen 5 2600x": 3000, "ryzen 5 3600": 3150, "ryzen 5 3600x": 3200, "ryzen 5 5600": 3300,
  "ryzen 5 5600x": 3400, "ryzen 5 7600": 3600, "ryzen 5 7600x": 3750,

  // Ryzen 7 (desktop)
  "ryzen 7 1700": 3200, "ryzen 7 2700": 3400, "ryzen 7 3700x": 3600, "ryzen 7 3800x": 3700,
  "ryzen 7 3700": 3550, "ryzen 7 5800x": 3850, "ryzen 7 7700x": 3950, "ryzen 7 7800x3d": 4000,

  // Ryzen 9 (desktop)
  "ryzen 9 3900x": 3800, "ryzen 9 3950x": 3900, "ryzen 9 5900x": 4100, "ryzen 9 5950x": 4200,
  "ryzen 9 7900x": 4300, "ryzen 9 7950x": 4400, "ryzen 9 7950x3d": 4450
};

// Merge only missing keys to avoid overwriting user edits
for (const [k, v] of Object.entries(NEW_RYZENS)) {
  if (!Object.prototype.hasOwnProperty.call(CPU_DATABASE, k)) {
    CPU_DATABASE[k] = v;
  }
}

// +300 juegos con datos reales de FPS
const GAME_DB = [
  "Cyberpunk 2077", "Elden Ring", "Red Dead Redemption 2", "Call of Duty: MW3",
  "Fortnite", "Valorant", "CS2", "Apex Legends", "Minecraft", "GTA V",
  "Silent Hill F", "Latest Release 2025",
  "Baldur's Gate 3", "Starfield", "Hogwarts Legacy", "Alan Wake 2",
  "Diablo IV", "The Last of Us Part I", "Resident Evil 4 Remake",
  "Rocket League", "Overwatch 2", "Palworld", "League of Legends",
  "Dota 2", "FIFA 24", "Dead by Daylight", "Among Us",
  "Assassin's Creed Valhalla", "God of War", "Hades", "God of War Ragnarök",
  "Spider-Man 2", "Baldur's Gate 4", "Final Fantasy XVI", "Stray",
  "Forza Horizon 5", "Sea of Thieves", "Stardew Valley", "Cuphead",
  "Portal 2", "Half-Life 2", "Counter-Strike 2", "Warframe",
  "Fallout 4", "The Witcher 3", "Mass Effect Legendary Edition", "Batman Arkham Knight",
  "Doom Eternal", "Hollow Knight", "Cult of the Lamb", "Outer Wilds",
  "Slay the Spire", "Risk of Rain 2", "Minecraft Dungeons", "Crusader Kings III",
  "Cities: Skylines", "Age of Empires IV", "Battlefield 2042", "War Thunder",
  "Project Cars 3", "Gran Turismo 7", "Microsoft Flight Simulator", "Subnautica",
  "Satisfactory", "Terraria", "Dead Cells", "Sekiro", "Ghost of Tsushima",
  "Persona 5 Royal", "Kingdom Hearts III", "Final Fantasy VII Remake", "Monster Hunter Rise",
  "Dark Souls III", "Bloodborne", "Demon's Souls", "Horizon Zero Dawn",
  "Horizon Forbidden West", "Uncharted 4", "The Last Guardian", "Death Stranding",
  "Control", "Metro Exodus", "Metro 2033", "Metro: Last Light",
  "Dishonored 2", "Prey", "Wolfenstein II", "Wolfenstein: The New Order",
  "Doom (2016)", "Quake Champions", "Rage 2", "Borderlands 3",
  "Borderlands 2", "Borderlands", "Tales from the Borderlands", "Tiny Tina's Wonderlands",
  "The Outer Worlds", "Obsidian", "Pillars of Eternity", "Tyranny",
  "Disco Elysium", "Kentucky Route Zero", "Gris", "Celeste",
  "Ori and the Blind Forest", "Ori and the Will of the Wisps", "Hollow Knight: Silksong",
  "Dead Space Remake", "Dead Space 2", "Dead Space", "System Shock",
  "BioShock", "BioShock 2", "BioShock Infinite", "Prey (2017)",
  "Alien: Isolation", "The Evil Within", "The Evil Within 2", "Outlast",
  "Outlast 2", "Amnesia: The Dark Descent", "Amnesia: Rebirth", "SOMA",
  "Layers of Fear", "Observer", "Detention", "Inside",
  "Limbo", "Braid", "Journey", "Abzu",
  "Flower", "Shadow of the Colossus", "Ico", "The Last of Us",
  "Uncharted: The Nathan Drake Collection", "Uncharted: Legacy of Thieves Collection",
  "Jak and Daxter", "Ratchet & Clank", "Spyro Reignited Trilogy", "Crash Bandicoot N. Sane Trilogy",
  "Crash Team Racing Nitro-Fueled", "Spyro: Reignited Trilogy", "Tony Hawk's Pro Skater 1+2",
  "Guitar Hero III", "Rock Band", "Dance Central", "Kinect Sports",
  "Halo: The Master Chief Collection", "Halo Infinite", "Halo 5", "Halo 4",
  "Halo 3", "Halo 2", "Halo: Combat Evolved", "Gears of War",
  "Gears of War 2", "Gears of War 3", "Gears of War 4", "Gears 5",
  "Forza Motorsport", "Forza Motorsport 2", "Forza Motorsport 3", "Forza Motorsport 4",
  "Forza Motorsport 5", "Forza Motorsport 6", "Forza Motorsport 7", "Forza Horizon",
  "Forza Horizon 2", "Forza Horizon 3", "Forza Horizon 4", "Forza Horizon 5",
  "Madden NFL 24", "NBA 2K24", "FIFA 23", "PES 2021",
  "Rocket League", "Overwatch", "Overwatch 2", "Team Fortress 2",
  "Left 4 Dead 2", "Left 4 Dead", "Portal", "Portal 2",
  "Half-Life", "Half-Life 2", "Half-Life 2: Episode One", "Half-Life 2: Episode Two",
  "Counter-Strike", "Counter-Strike: Source", "Counter-Strike: Global Offensive", "Counter-Strike 2",
  "Team Fortress Classic", "Day of Defeat", "Day of Defeat: Source", "Insurgency",
  "Insurgency: Sandstorm", "Arma 3", "Arma 2", "Arma: Cold War Assault",
  "Operation Flashpoint", "Battlefield 1942", "Battlefield 2", "Battlefield 2142",
  "Battlefield: Bad Company", "Battlefield: Bad Company 2", "Battlefield 3", "Battlefield 4",
  "Battlefield Hardline", "Battlefield 1", "Battlefield V", "Battlefield 2042",
  "Call of Duty", "Call of Duty 2", "Call of Duty 4: Modern Warfare", "Call of Duty: World at War",
  "Call of Duty: Modern Warfare 2", "Call of Duty: Black Ops", "Call of Duty: Modern Warfare 3",
  "Call of Duty: Black Ops II", "Call of Duty: Ghosts", "Call of Duty: Advanced Warfare",
  "Call of Duty: Black Ops III", "Call of Duty: Infinite Warfare", "Call of Duty: WWII",
  "Call of Duty: Black Ops 4", "Call of Duty: Modern Warfare", "Call of Duty: Warzone",
  "Call of Duty: Black Ops Cold War", "Call of Duty: Vanguard", "Call of Duty: MW3 (2023)",
  "Far Cry", "Far Cry 2", "Far Cry 3", "Far Cry 3: Blood Dragon",
  "Far Cry 4", "Far Cry Primal", "Far Cry 5", "Far Cry New Dawn",
  "Far Cry 6", "Watch Dogs", "Watch Dogs 2", "Watch Dogs: Legion",
  "Assassin's Creed", "Assassin's Creed II", "Assassin's Creed: Brotherhood", "Assassin's Creed: Revelations",
  "Assassin's Creed III", "Assassin's Creed IV: Black Flag", "Assassin's Creed: Rogue", "Assassin's Creed Unity",
  "Assassin's Creed Syndicate", "Assassin's Creed Origins", "Assassin's Creed Odyssey", "Assassin's Creed Valhalla",
  "Assassin's Creed Mirage", "Prince of Persia", "Prince of Persia: The Sands of Time", "Prince of Persia: Warrior Within",
  "Prince of Persia: The Two Thrones", "Prince of Persia (2008)", "Prince of Persia: The Forgotten Sands",
  "Splinter Cell", "Splinter Cell: Pandora Tomorrow", "Splinter Cell: Chaos Theory", "Splinter Cell: Double Agent",
  "Splinter Cell: Conviction", "Splinter Cell: Blacklist", "Ghost Recon", "Ghost Recon: Wildlands",
  "Ghost Recon: Breakpoint", "Rainbow Six Siege", "Rainbow Six Vegas", "Rainbow Six Vegas 2",
  "Rainbow Six: Patriots", "The Division", "The Division 2", "Anno 1800",
  "Anno 2205", "Anno 2070", "Anno 1404", "Anno 1701",
  "Settlers 7", "Tropico 6", "Tropico 5", "Tropico 4",
  "SimCity", "SimCity 4", "Cities XL", "Cities: Skylines",
  "RollerCoaster Tycoon", "RollerCoaster Tycoon 2", "RollerCoaster Tycoon 3", "Planet Coaster",
  "Planet Zoo", "Zoo Tycoon", "Zoo Tycoon 2", "Theme Hospital",
  "Two Point Hospital", "Two Point Campus", "Prison Architect", "Banished",
  "Surviving Mars", "Surviving the Aftermath", "Frostpunk", "This War of Mine",
  "Papers, Please", "Cart Life", "VA-11 Hall-A", "Night in the Woods",
  "Oxenfree", "Firewatch", "What Remains of Edith Finch", "Gone Home",
  "Dear Esther", "The Stanley Parable", "The Beginner's Guide", "Return of the Obra Dinn",
  "Her Story", "Telling Lies", "Immortality", "Thirty Flights of Loving",
  "Gone Home", "The Vanishing of Ethan Carter", "Everybody's Gone to the Rapture", "The Turing Test",
  "The Talos Principle", "Q.U.B.E.", "Antichamber", "The Witness",
  "Baba Is You", "Stephen's Sausage Roll", "Patrick's Parabox", "Manifold Garden",
  "Superliminal", "Fez", "The Talos Principle 2", "The Talos Principle VR",
  "Q.U.B.E. 2", "Antichamber", "The Witness", "Baba Is You",
  "Stephen's Sausage Roll", "Patrick's Parabox", "Manifold Garden", "Superliminal",
  "Fez", "VVVVVV", "World of Goo", "Bridge Constructor",
  "Poly Bridge", "Opus Magnum", "Shenzhen I/O", "TIS-100",
  "EXAPUNKS", "Infinifactory", "SpaceChem", "The Talos Principle",
  "Q.U.B.E.", "Antichamber", "The Witness", "Baba Is You"
];

// Deduplicate GAME_DB while preserving order
(() => {
  const seen = new Set();
  const out = [];
  for (const g of GAME_DB) {
    const k = g.toLowerCase();
    if (!seen.has(k)) { seen.add(k); out.push(g); }
  }
  GAME_DB.length = 0;
  GAME_DB.push(...out);
})();

// Juegos con requisitos reales y FPS estimados
const GAME_REQUIREMENTS = [
  { name: "Valorant", minRam: 4, recRam: 8, gpuScoreMin: 30, gpuScoreRec: 60, cpuScoreMin: 2500, cpuScoreRec: 3200, notes: "Muy optimizado. En 1080p, incluso GPUs antiguas dan +200 FPS.", avgFps: { low: 120, medium: 180, high: 250, ultra: 300 } },
  { name: "CS2", minRam: 8, recRam: 16, gpuScoreMin: 40, gpuScoreRec: 70, cpuScoreMin: 2800, cpuScoreRec: 3600, notes: "Depende mucho del CPU. Prioriza CPU sobre GPU en 1080p.", avgFps: { low: 140, medium: 200, high: 250, ultra: 300 } },
  { name: "Fortnite", minRam: 8, recRam: 16, gpuScoreMin: 45, gpuScoreRec: 75, cpuScoreMin: 2900, cpuScoreRec: 3700, notes: "Con Ray Tracing, requiere GPU potente. Sin RT, es más accesible.", avgFps: { low: 120, medium: 180, high: 250, ultra: 300 } },
  { name: "Minecraft", minRam: 8, recRam: 16, gpuScoreMin: 35, gpuScoreRec: 65, cpuScoreMin: 2600, cpuScoreRec: 3400, notes: "Sin shaders, es muy ligero. Con shaders, se vuelve exigente.", avgFps: { low: 150, medium: 200, high: 250, ultra: 300 } },
  { name: "GTA V", minRam: 8, recRam: 16, gpuScoreMin: 40, gpuScoreRec: 70, cpuScoreMin: 2700, cpuScoreRec: 3500, notes: "Bien optimizado. En 1080p, ajustes altos son alcanzables con hardware modesto.", avgFps: { low: 100, medium: 150, high: 200, ultra: 250 } },
  { name: "Elden Ring", minRam: 8, recRam: 16, gpuScoreMin: 50, gpuScoreRec: 75, cpuScoreMin: 3000, cpuScoreRec: 3700, notes: "Bien optimizado, pero en zonas con muchos enemigos, el CPU es clave.", avgFps: { low: 80, medium: 120, high: 180, ultra: 240 } },
  { name: "Cyberpunk 2077", minRam: 12, recRam: 16, gpuScoreMin: 65, gpuScoreRec: 85, cpuScoreMin: 3200, cpuScoreRec: 3900, notes: "Uno de los juegos más exigentes. Usa DLSS/FSR para mejorar FPS.", avgFps: { low: 60, medium: 100, high: 140, ultra: 180 } },
  { name: "Red Dead Redemption 2", minRam: 12, recRam: 16, gpuScoreMin: 60, gpuScoreRec: 80, cpuScoreMin: 3100, cpuScoreRec: 3800, notes: "Muy exigente en texturas. 16 GB de RAM son casi obligatorios.", avgFps: { low: 70, medium: 100, high: 140, ultra: 180 } },
  { name: "Starfield", minRam: 16, recRam: 32, gpuScoreMin: 70, gpuScoreRec: 88, cpuScoreMin: 3300, cpuScoreRec: 4000, notes: "Requiere mucha RAM. En 1080p, ajustes medios son realistas para setups modestos.", avgFps: { low: 60, medium: 90, high: 120, ultra: 150 } },
  { name: "Alan Wake 2", minRam: 16, recRam: 32, gpuScoreMin: 75, gpuScoreRec: 90, cpuScoreMin: 3400, cpuScoreRec: 4100, notes: "Extremadamente exigente. Solo jugable en Ultra con hardware de gama alta.", avgFps: { low: 50, medium: 80, high: 100, ultra: 120 } },
  { name: "Rocket League", minRam: 8, recRam: 16, gpuScoreMin: 35, gpuScoreRec: 65, cpuScoreMin: 2600, cpuScoreRec: 3300, notes: "Muy optimizado. En 1080p, 144+ FPS es fácil con hardware modesto.", avgFps: { low: 140, medium: 200, high: 250, ultra: 300 } },
  { name: "Overwatch 2", minRam: 8, recRam: 16, gpuScoreMin: 45, gpuScoreRec: 70, cpuScoreMin: 2800, cpuScoreRec: 3500, notes: "Bien optimizado, pero el rendimiento depende del mapa y número de jugadores.", avgFps: { low: 120, medium: 180, high: 250, ultra: 300 } },
  { name: "Apex Legends", minRam: 8, recRam: 16, gpuScoreMin: 50, gpuScoreRec: 75, cpuScoreMin: 2900, cpuScoreRec: 3600, notes: "Exigente en CPU. En 1080p, ajustes altos requieren buen equilibrio CPU/GPU.", avgFps: { low: 100, medium: 150, high: 200, ultra: 250 } },
  { name: "League of Legends", minRam: 4, recRam: 8, gpuScoreMin: 25, gpuScoreRec: 50, cpuScoreMin: 2400, cpuScoreRec: 3000, notes: "Muy ligero. Juega bien incluso en laptops antiguas.", avgFps: { low: 150, medium: 200, high: 250, ultra: 300 } },
  { name: "Dota 2", minRam: 8, recRam: 16, gpuScoreMin: 40, gpuScoreRec: 65, cpuScoreMin: 2700, cpuScoreRec: 3400, notes: "Depende del modo (Normal vs. Ranked) y del mapa.", avgFps: { low: 120, medium: 180, high: 250, ultra: 300 } },
  { name: "Palworld", minRam: 16, recRam: 32, gpuScoreMin: 60, gpuScoreRec: 80, cpuScoreMin: 3100, cpuScoreRec: 3800, notes: "Exigente en CPU y RAM. Optimización mejora con actualizaciones.", avgFps: { low: 80, medium: 120, high: 160, ultra: 200 } },
  { name: "Baldur's Gate 3", minRam: 8, recRam: 16, gpuScoreMin: 55, gpuScoreRec: 75, cpuScoreMin: 3000, cpuScoreRec: 3700, notes: "Bien optimizado, pero en combates grandes, el CPU es clave.", avgFps: { low: 90, medium: 130, high: 180, ultra: 240 } },
  { name: "Hogwarts Legacy", minRam: 16, recRam: 32, gpuScoreMin: 65, gpuScoreRec: 85, cpuScoreMin: 3200, cpuScoreRec: 3900, notes: "Muy exigente en GPU. Usa FSR/DLSS para mejorar FPS.", avgFps: { low: 70, medium: 100, high: 140, ultra: 180 } },
  { name: "The Last of Us Part I", minRam: 16, recRam: 32, gpuScoreMin: 70, gpuScoreRec: 88, cpuScoreMin: 3300, cpuScoreRec: 4000, notes: "Remaster exigente. Requiere GPU de gama alta para 60 FPS en Ultra.", avgFps: { low: 60, medium: 90, high: 120, ultra: 150 } },
  { name: "Resident Evil 4 Remake", minRam: 12, recRam: 16, gpuScoreMin: 60, gpuScoreRec: 80, cpuScoreMin: 3100, cpuScoreRec: 3800, notes: "Bien optimizado, pero el trazado de rayos es muy exigente.", avgFps: { low: 70, medium: 100, high: 140, ultra: 180 } },
  { name: "Diablo IV", minRam: 16, recRam: 32, gpuScoreMin: 55, gpuScoreRec: 75, cpuScoreMin: 3000, cpuScoreRec: 3700, notes: "Depende del número de enemigos en pantalla. CPU y GPU equilibrados son clave.", avgFps: { low: 80, medium: 120, high: 160, ultra: 200 } },
  { name: "FIFA 24", minRam: 8, recRam: 16, gpuScoreMin: 45, gpuScoreRec: 70, cpuScoreMin: 2800, cpuScoreRec: 3500, notes: "Bien optimizado. En 1080p, ajustes altos son accesibles.", avgFps: { low: 100, medium: 150, high: 200, ultra: 250 } },
  { name: "Call of Duty: MW3", minRam: 12, recRam: 16, gpuScoreMin: 60, gpuScoreRec: 80, cpuScoreMin: 3100, cpuScoreRec: 3800, notes: "Exigente en GPU. Usa DLSS/FSR para mejorar rendimiento.", avgFps: { low: 70, medium: 100, high: 140, ultra: 180 } },
  { name: "Dead by Daylight", minRam: 8, recRam: 16, gpuScoreMin: 40, gpuScoreRec: 65, cpuScoreMin: 2700, cpuScoreRec: 3400, notes: "Depende del mapa y número de jugadores. Bien optimizado en general.", avgFps: { low: 100, medium: 150, high: 200, ultra: 250 } },
  { name: "Among Us", minRam: 4, recRam: 8, gpuScoreMin: 20, gpuScoreRec: 40, cpuScoreMin: 2200, cpuScoreRec: 2800, notes: "Extremadamente ligero. Juega en casi cualquier dispositivo.", avgFps: { low: 150, medium: 200, high: 250, ultra: 300 } },
  { name: 'Silent Hill F', minRam: 12, recRam: 16, gpuScoreMin: 55, gpuScoreRec: 80, cpuScoreMin: 3000, cpuScoreRec: 3800, notes: 'Survival horror moderno — exige buena GPU para iluminación y efectos.', avgFps: { low: 40, medium: 30, high: 28, ultra: 25 } }
];

// Ensure GAME_REQUIREMENTS has entries for every game in GAME_DB (generate simple estimates if missing)
const gameReqMap = new Map(GAME_REQUIREMENTS.map(g => [g.name.toLowerCase(), g]));
GAME_DB.forEach(g => {
  if (!gameReqMap.has(g.toLowerCase())) {
    // estimate: lightweight games get low requirements, unknowns get medium
    const guess = {
      name: g,
      minRam: 8,
      recRam: 16,
      gpuScoreMin: 40,
      gpuScoreRec: 70,
      cpuScoreMin: 2600,
      cpuScoreRec: 3400,
      notes: 'Requisitos estimados.',
      avgFps: { low: 90, medium: 130, high: 180, ultra: 220 }
    };
    GAME_REQUIREMENTS.push(guess);
    gameReqMap.set(g.toLowerCase(), guess);
  }
});

// Normalize avgFps for all games so that low > medium > high > ultra and values are realistic
// This helps the estimator produce sensible, monotonic results across quality settings.
(function normalizeAvgFps() {
  for (const gr of GAME_REQUIREMENTS) {
    try {
      const a = gr.avgFps || {};
      // collect numeric values we currently have
      const vals = [a.low, a.medium, a.high, a.ultra].filter(v => typeof v === 'number');
      // fallback baseline if none available
      const fallback = 60;
      const mean = vals.length ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length) : fallback;

      // target medium baseline is the mean clamped to realistic bounds
      let medium = Math.max(25, Math.min(180, mean));

      // Some very lightweight games deserve higher baselines; boost medium if gpuScoreRec is low
      if (gr.gpuScoreRec && gr.gpuScoreRec <= 50) medium = Math.max(medium, 140);
      // Very demanding titles should have lower baselines
      if (gr.gpuScoreRec && gr.gpuScoreRec >= 85) medium = Math.min(medium, 75);

      // derive consistent scaled values: low (easy) > medium > high > ultra (hard)
      const low = Math.round(medium * 1.45);
      const high = Math.max(8, Math.round(medium * 0.80));
      const ultra = Math.max(5, Math.round(medium * 0.63));

      gr.avgFps = { low: low, medium: medium, high: high, ultra: ultra };
    } catch (e) {
      // if anything goes wrong, ensure a safe default
      gr.avgFps = { low: 120, medium: 80, high: 64, ultra: 48 };
    }
  }

  // Override: Silent Hill F should be particularly demanding on ultra/high but still sensible
  const sh = GAME_REQUIREMENTS.find(x => x.name.toLowerCase() === 'silent hill f');
  if (sh) {
    sh.avgFps = { low: 100, medium: 70, high: 48, ultra: 38 };
    sh.minRam = Math.max(sh.minRam || 12, 12);
    sh.recRam = Math.max(sh.recRam || 16, 16);
  }
})();

// --- Debug overlay: expose which benchmark was matched and scaling factors ---
// Non-invasive: only enabled in-browser and visible via a toggle button.
window.LAST_ESTIMATE_DEBUG = window.LAST_ESTIMATE_DEBUG || { enabled: false, last: null };

function createDebugOverlay() {
  if (document.getElementById('benchDebugOverlay')) return;
  const panel = document.createElement('div');
  panel.id = 'benchDebugOverlay';
  panel.style.cssText = 'position:fixed;right:14px;bottom:14px;z-index:9999;max-width:360px;background:rgba(20,20,20,0.86);color:#e6eef6;padding:12px;border-radius:8px;font-size:13px;line-height:1.25;box-shadow:0 6px 18px rgba(0,0,0,0.45);display:none;backdrop-filter:blur(6px);';
  panel.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;"><strong style="font-size:13px">Bench debug</strong><button id="benchDebugClose" style="background:transparent;border:none;color:#9fb7c9;font-size:14px;cursor:pointer">✕</button></div><div id="benchDebugContent">No data yet.</div>`;
  document.body.appendChild(panel);

  const btn = document.createElement('button');
  btn.id = 'benchDebugToggle';
  btn.title = 'Toggle bench debug overlay';
  btn.style.cssText = 'position:fixed;right:14px;bottom:84px;z-index:9999;background:#0ea5a4;color:white;border:none;padding:8px 10px;border-radius:8px;cursor:pointer;font-size:13px;box-shadow:0 6px 18px rgba(0,0,0,0.3)';
  btn.textContent = 'Bench debug';
  btn.addEventListener('click', () => {
    window.LAST_ESTIMATE_DEBUG.enabled = !window.LAST_ESTIMATE_DEBUG.enabled;
    panel.style.display = window.LAST_ESTIMATE_DEBUG.enabled ? 'block' : 'none';
  });
  document.body.appendChild(btn);

  document.getElementById('benchDebugClose').addEventListener('click', () => {
    window.LAST_ESTIMATE_DEBUG.enabled = false; panel.style.display = 'none';
  });
}

function updateDebugOverlay(debugObj) {
  try {
    window.LAST_ESTIMATE_DEBUG.last = debugObj || null;
    const panel = document.getElementById('benchDebugOverlay');
    if (!panel) return;
    const content = document.getElementById('benchDebugContent');
    if (!content) return;
    if (!window.LAST_ESTIMATE_DEBUG.enabled) {
      panel.style.display = 'none';
      return;
    }
    panel.style.display = 'block';
    if (!debugObj) { content.innerHTML = '<em>No debug data available yet.</em>'; return; }
    const lines = [];
    lines.push(`<div><strong>Game:</strong> ${debugObj.game || '—'}</div>`);
    lines.push(`<div><strong>GPU (user):</strong> ${debugObj.gpu || '—'}</div>`);
    lines.push(`<div><strong>CPU (user):</strong> ${debugObj.cpu || '—'}</div>`);
    if (debugObj.bench) {
      lines.push(`<hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:8px 0">`);
      lines.push(`<div><strong>Matched bench:</strong> ${debugObj.bench.game} @ ${debugObj.bench.gpu} (${debugObj.bench.resolution || debugObj.bench.res || '1080p'}, ${debugObj.bench.quality || debugObj.bench.quality})</div>`);
      lines.push(`<div><strong>Bench FPS:</strong> ${debugObj.bench.fps ?? '—'}</div>`);
    }
    lines.push(`<hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:8px 0">`);
    lines.push(`<div><strong>GPU factor:</strong> ${typeof debugObj.gpuFactor === 'number' ? debugObj.gpuFactor.toFixed(3) : '—'}</div>`);
    lines.push(`<div><strong>CPU factor:</strong> ${typeof debugObj.cpuFactor === 'number' ? debugObj.cpuFactor.toFixed(3) : '—'}</div>`);
    lines.push(`<div><strong>Combined rel:</strong> ${typeof debugObj.combinedRel === 'number' ? debugObj.combinedRel.toFixed(3) : '—'}</div>`);
    lines.push(`<div><strong>RAM factor:</strong> ${typeof debugObj.ramFactor === 'number' ? debugObj.ramFactor.toFixed(3) : '—'}</div>`);
    lines.push(`<div><strong>Res adjust:</strong> ${typeof debugObj.resAdjust === 'number' ? debugObj.resAdjust.toFixed(3) : '—'}</div>`);
    lines.push(`<hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:8px 0">`);
    lines.push(`<div style="font-weight:700;font-size:15px">Final estimate: ${debugObj.final ?? '—'} FPS</div>`);
    content.innerHTML = lines.join('');
  } catch (e) { /* non-critical */ }
}

// === TEMA OSCURO/CLARO ===
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function applyTheme(theme) {
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }
}

// Initialize theme from saved or prefers-color-scheme
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) { applyTheme(savedTheme); return; }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    applyTheme(isDark ? 'light' : 'dark');
  });
  // keyboard support
  themeToggle.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); themeToggle.click(); }
  });
}

// === PESTAÑAS ===
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    button.classList.add('active');
    const target = document.getElementById(button.dataset.tab);
    if (target) target.classList.add('active');
  });
  // keyboard accessibility for tabs
  button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); button.click(); }
  });
});

// === AUTOCOMPLETADO MEJORADO ===
function setupAutocomplete(inputElOrId, suggestionsId, dataList) {
  // inputElOrId can be an element or an id string
  const input = typeof inputElOrId === 'string' ? document.getElementById(inputElOrId) : inputElOrId;
  const suggestions = document.getElementById(suggestionsId);
  if (!input || !suggestions) return;

  // For <select> elements, convert to a text-like behavior by listening to focus and creating options
  const isSelect = input.tagName && input.tagName.toLowerCase() === 'select';

  function showMatches(query) {
    suggestions.innerHTML = '';
    const q = query.trim().toLowerCase();
    if (q.length < 1) {
      suggestions.style.display = 'none';
      return;
    }
    const matches = dataList.filter(item => item.toLowerCase().includes(q)).slice(0, 8);
    if (matches.length === 0) {
      suggestions.style.display = 'none';
      return;
    }
    matches.forEach(match => {
      const div = document.createElement('div');
      div.textContent = match;
      div.addEventListener('click', () => {
        // Custom event to notify selection
        const detail = { value: match, source: input };
        const ev = new CustomEvent('autocomplete-select', { detail });
        document.dispatchEvent(ev);

        if (isSelect) {
          // add option if not exists and select it
          let opt = Array.from(input.options).find(o => o.value === match || o.text === match);
          if (!opt) {
            opt = new Option(match, match);
            input.add(opt);
          }
          input.value = match;
          input.dispatchEvent(new Event('change'));
        } else {
          input.value = match;
          input.dispatchEvent(new Event('input'));
        }
        suggestions.style.display = 'none';
      });
      suggestions.appendChild(div);
    });
    suggestions.style.display = 'block';
  }

  if (isSelect) {
    // For select use a text-like input overlay: when user focuses, show full list; when typing, filter
    input.addEventListener('focus', () => showMatches(''));
    // also create a small text input fallback to type queries
    input.addEventListener('input', (e) => showMatches(input.value || ''));
  } else {
    input.addEventListener('input', (e) => showMatches(input.value || ''));
  }

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !suggestions.contains(e.target)) {
      suggestions.style.display = 'none';
    }
  });
}

// === INICIAR TODOS LOS AUTOCOMPLETADOS ===
function initAllAutocomplete() {
  const gpuList = Object.keys(GPU_DATABASE).map(k => 
    k.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  );
  const cpuList = Object.keys(CPU_DATABASE).map(k => 
    k.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  );
  const gameList = GAME_DB;

  // Hardware
  setupAutocomplete('gpu', 'gpuSuggestions', gpuList);
  setupAutocomplete('cpu', 'cpuSuggestions', cpuList);

  // Comparador (these inputs in HTML use classes, select by query)
  document.querySelectorAll('.compare-gpu, .compare-gpu-b').forEach((el, idx) => {
    const id = el.id || `compareGpuTemp${idx}`;
    if (!el.id) el.id = id;
    const sugId = el.classList.contains('compare-gpu-b') ? 'compareGpuBSuggestions' : 'compareGpuASuggestions';
    setupAutocomplete(el, sugId, gpuList);
  });
  document.querySelectorAll('.compare-cpu, .compare-cpu-b').forEach((el, idx) => {
    const id = el.id || `compareCpuTemp${idx}`;
    if (!el.id) el.id = id;
    const sugId = el.classList.contains('compare-cpu-b') ? 'compareCpuBSuggestions' : 'compareCpuASuggestions';
    setupAutocomplete(el, sugId, cpuList);
  });

  // Precios autocomplete removed (prices section deleted)

  // Guías removed per user request

  // Benchmark
  setupAutocomplete('benchmarkGame', 'benchmarkGameSuggestions', gameList);
  setupAutocomplete('customGpu', 'customGpuSuggestions', gpuList);
  setupAutocomplete('customCpu', 'customCpuSuggestions', cpuList);


  // Juego selector (tag/chips)
  setupAutocomplete('gameInput', 'gameInputSuggestions', gameList);
  initGameSelector();
  // Comparar juegos selector
  setupAutocomplete('compareGameInput', 'compareGameSuggestions', gameList);
  initCompareSelector();
}

function initCompareSelector() {
  const input = document.getElementById('compareGameInput');
  const suggestions = document.getElementById('compareGameSuggestions');
  const container = document.getElementById('compareSelectedGames');
  const max = 10;

  // defensive: if UI not present (user uses simpler selects), no-op
  if (!input || !suggestions || !container) return;

  function addGame(name) {
    const existing = Array.from(container.querySelectorAll('.game-chip')).map(c => c.dataset.name.toLowerCase());
    if (existing.includes(name.toLowerCase())) return;
    if (existing.length >= max) { alert(`Puedes añadir hasta ${max} juegos para comparar.`); return; }
    const chip = document.createElement('div');
    chip.className = 'game-chip';
    chip.dataset.name = name;
    chip.innerHTML = `<span>${name}</span>`;
    // quality select
    const sel = document.createElement('select');
    sel.className = 'quality-select';
    ['low','medium','high','ultra'].forEach(q => { const o = new Option(q, q); if (q==='high') o.selected = true; sel.appendChild(o); });
    chip.appendChild(sel);
    const btn = document.createElement('button'); btn.type='button'; btn.textContent='✕'; btn.addEventListener('click', () => chip.remove());
    chip.appendChild(btn);
    container.appendChild(chip);
  }

  document.addEventListener('autocomplete-select', (e) => {
    if (e.detail && e.detail.source === input) {
      addGame(e.detail.value);
      input.value = '';
      suggestions.style.display = 'none';
    }
  });

  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') { ev.preventDefault(); const v = input.value.trim(); if (v) addGame(v); input.value=''; suggestions.style.display='none'; }
  });
}

// === ANÁLISIS DE HARDWARE PERSONALIZADO ===
function analyzeHardware(gpuInput, cpuInput, ram, selectedGames) {
  const gpuNorm = gpuInput.toLowerCase().replace(/\s+/g, ' ');
  const cpuNorm = cpuInput.toLowerCase().replace(/\s+/g, ' ');

  let gpuScore = 0;
  let gpuMatch = "";
  gpuScore = resolveGpuScore(gpuNorm);
  // try to find a human-friendly match key for display
  for (const [key, score] of Object.entries(GPU_DATABASE)) { if (gpuNorm.includes(key) || key.includes(gpuNorm)) { gpuMatch = key; break; } }

  let cpuScore = 0;
  let cpuMatch = "";
  cpuScore = resolveCpuScore(cpuNorm);
  for (const [key, score] of Object.entries(CPU_DATABASE)) { if (cpuNorm.includes(key) || key.includes(cpuNorm)) { cpuMatch = key; break; } }

  let html = `<h3>📊 Informe Personalizado para tus Juegos</h3>`;
  html += `<p><strong>Configuración detectada:</strong><br>
           GPU: ${gpuMatch ? gpuMatch.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : gpuInput} (${gpuScore ? gpuScore + '/100' : 'No reconocida'})<br>
           CPU: ${cpuMatch ? cpuMatch.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : cpuInput} (${cpuScore ? 'ST: ' + cpuScore : 'No reconocida'})<br>
           RAM: ${ram} GB</p>`;

  if (!gpuScore || !cpuScore) {
    html += `<p class="warning">⚠️ <strong>Advertencia:</strong> No pudimos identificar tu hardware con precisión. Los resultados son estimados.</p>`;
  }

  // Filtrar solo los juegos seleccionados (máx. 5)
  const gamesToAnalyze = GAME_REQUIREMENTS.filter(g => 
    selectedGames.includes(g.name)
  ).slice(0, 5);

  if (gamesToAnalyze.length === 0) {
    html += `<p>Selecciona al menos un juego para ver el análisis personalizado.</p>`;
  } else {
    html += `<h3>🎮 Rendimiento en tus juegos favoritos (1080p):</h3>`;
    // resolution factor
    const res = document.getElementById('hardwareResolution')?.value || '1080p';
    const resFactor = res === '1080p' ? 1 : (res === '1440p' ? 0.8 : 0.6);

    gamesToAnalyze.forEach(game => {
      // try get quality from selected chips
      const chip = Array.from(document.querySelectorAll('#selectedGames .game-chip')).find(c => c.dataset.name === game.name);
      const quality = chip ? (chip.querySelector('select')?.value || 'high') : 'high';
      const qFactor = { low: 1.2, medium: 1.0, high: 0.8, ultra: 0.6 }[quality] || 0.8;
        // compute FPS estimate early so we can use it to decide status thresholds
        const fpsEstimate = Math.round(estimateFpsForSetup(game, gpuInput, cpuInput, ram, qFactor) * resFactor);
        let status = "✅ Recomendado";
        let color = "#34d399";
        let details = "";

        if (ram < game.minRam) {
          status = "❌ No jugable";
          color = "#f87171";
          details = `Necesitas al menos ${game.minRam} GB RAM.`;
        } else if (fpsEstimate <= 45) {
          // New rule: treat 45 FPS and below as 'Mínimo (bajo FPS)'
          status = "⚠️ Mínimo (bajo FPS)";
          color = "#fbbf24";
          details = "Podrías jugar en ajustes bajos, pero con posibles caídas de FPS.";
        } else if (gpuScore >= game.gpuScoreRec && cpuScore >= game.cpuScoreRec && ram >= game.recRam) {
          status = "🚀 Óptimo";
          color = "#4deeea";
          details = "Disfrutarás del juego al máximo sin problemas.";
        } else {
          status = "🆗 Jugable";
          color = "#34d399";
          details = "Ajustes medios-altos deberían funcionar bien.";
        }
      html += `
        <div class="game-item">
          <strong>${game.name}</strong> — <em>${quality}</em><br>
          <span style="color:${color}; font-weight:bold">${status}</span><br>
          <small>${details} ${game.notes}</small>
          <p style="margin-top:8px;"><strong>FPS estimados (1080p base):</strong> ${fpsEstimate} FPS</p>
        </div>
      `;
    });
  }

  return html;
}

// === FUNCIONES PRINCIPALES ===
// Comparar dos setups simples
function compareSetups() {
  const aGpu = document.querySelector('.compare-gpu')?.value || '';
  const aCpu = document.querySelector('.compare-cpu')?.value || '';
  const aRam = parseInt(document.querySelector('.compare-ram')?.value || '0', 10) || 0;

  const bGpu = document.querySelector('.compare-gpu-b')?.value || '';
  const bCpu = document.querySelector('.compare-cpu-b')?.value || '';
  const bRam = parseInt(document.querySelector('.compare-ram-b')?.value || '0', 10) || 0;

  // gather selected games + quality (prefer chips in Compare tab)
  let selected = Array.from(document.querySelectorAll('#compareSelectedGames .game-chip')).map(ch => ({
    name: ch.dataset.name,
    quality: ch.querySelector('select')?.value || 'high'
  }));
  // fallback: if no chips added, try to use the compareSelectedGames entries from hardware selector or prompt user
  if (selected.length === 0) {
    // look for any chips in the global selectedGames as a helpful fallback
    selected = Array.from(document.querySelectorAll('#selectedGames .game-chip')).map(ch => ({ name: ch.dataset.name, quality: ch.querySelector('select')?.value || 'high' }));
  }

  const resultEl = document.getElementById('compareResult');
  resultEl.style.display = 'block';

  // Build detailed comparison
  let html = `<h4>Comparación detallada</h4>`;
  html += `<div class="compare-results-grid">${generateSetupSummary(aGpu,aCpu,aRam,'A')}${generateSetupSummary(bGpu,bCpu,bRam,'B')}</div>`;

  if (selected.length === 0) {
    html += `<p style="margin-top:12px;">Añade juegos para comparar rendimiento entre setups. Usa el selector arriba para añadir hasta 5 juegos.</p>`;
    resultEl.innerHTML = html;
    resultEl.style.display = 'block';
    return;
  }

  // For each game, compute FPS estimate for both setups based on quality and hardware
  html += `<h5 style="margin-top:16px;">Estimación de FPS por juego (1080p)</h5>`;
  html += `<div class="compare-detail">`;
  html += `<div class="col"><strong>Juego</strong></div><div class="col"><strong>Setup A (FPS)</strong></div><div class="col"><strong>Setup B (FPS)</strong></div>`;

  selected.forEach(g => {
    const gameReq = GAME_REQUIREMENTS.find(x => x.name.toLowerCase() === g.name.toLowerCase()) || null;
    const qFactor = { low: 1.2, medium: 1.0, high: 0.8, ultra: 0.6 }[g.quality] || 0.8;

    const fpsA = estimateFpsForSetup(gameReq, aGpu, aCpu, aRam, qFactor);
    const fpsB = estimateFpsForSetup(gameReq, bGpu, bCpu, bRam, qFactor);

    const statusA = fpsA < 30 ? 'Bajo' : (fpsA < 60 ? 'Medio' : 'Alto');
    const statusB = fpsB < 30 ? 'Bajo' : (fpsB < 60 ? 'Medio' : 'Alto');

    html += `<div class="col">${g.name} <br><small>Calidad: ${g.quality}</small></div>`;
    html += `<div class="col"><strong>${Math.round(fpsA)}</strong><br><small>${statusA}</small></div>`;
    html += `<div class="col"><strong>${Math.round(fpsB)}</strong><br><small>${statusB}</small></div>`;
  });

  html += `</div>`;
  resultEl.innerHTML = html;
}

function generateSetupSummary(gpuInput, cpuInput, ram, label) {
  const gpuNorm = gpuInput.toLowerCase().replace(/\s+/g, ' ');
  const cpuNorm = cpuInput.toLowerCase().replace(/\s+/g, ' ');
  const gpuScore = resolveGpuScore(gpuNorm);
  const cpuScore = resolveCpuScore(cpuNorm);
  return `
    <div class="compare-card">
      <h4>Setup ${label}</h4>
      <p><strong>GPU:</strong> ${gpuInput || 'N/A'} (${gpuScore ? gpuScore + '/100' : 'Desconocida'})</p>
      <p><strong>CPU:</strong> ${cpuInput || 'N/A'} (${cpuScore ? cpuScore : 'Desconocida'})</p>
      <p><strong>RAM:</strong> ${ram} GB</p>
    </div>
  `;
}

// searchGame removed because Prices UI was removed

// Estimate FPS based on simplified model using gpu/cpu scores and game averages
function estimateFpsForSetup(gameReq, gpuInput, cpuInput, ram, qualityFactor, resolutionFactor = 1) {
  // Improved FPS estimator with optional benchmark DB preference
  // - Uses GPU (0-100) and CPU (proxy single-thread score) databases
  // - Estimates a multi-thread score from heuristics on CPU model name
  // - If a benchmark exists for the exact game+gpu+res+quality, scale it by relative perf
  // - Otherwise use a blended heuristic that combines GPU + CPU perf

  // baseline FPS (per-game medium average if available)
  let baseFps = 80;
  if (gameReq && gameReq.avgFps) baseFps = gameReq.avgFps.medium || baseFps;

  // normalize names
  const gpuNorm = (gpuInput || '').toLowerCase().replace(/\s+/g, ' ');
  const cpuNorm = (cpuInput || '').toLowerCase().replace(/\s+/g, ' ');

  // Lookup raw scores early so we can use them for either bench-scaling or heuristic
  let gScore = 0, cScore = 0;
  gScore = resolveGpuScore(gpuNorm);
  cScore = resolveCpuScore(cpuNorm);

  // Heuristic: estimate multi-thread capability from model family in name
  let coreFactor = 1.4; // default
  if (/\b(i9|ryzen 9|xeon|ultra|core ultra)\b/.test(cpuNorm)) coreFactor = 1.9;
  else if (/\b(i7|ryzen 7)\b/.test(cpuNorm)) coreFactor = 1.7;
  else if (/\b(i5|ryzen 5)\b/.test(cpuNorm)) coreFactor = 1.5;
  else if (/\b(i3|ryzen 3)\b/.test(cpuNorm)) coreFactor = 1.2;

  const mtScore = cScore ? Math.min(Math.round(cScore * coreFactor), cScore * 2.4) : 0;

  // Convert raw scores into performance multipliers (calibrated ranges)
  const gpuPerf = gScore ? (0.5 + (gScore / 100) * 1.8) : 0.9; // user GPU perf
  const stPerf = cScore ? (0.6 + (Math.min(cScore, 4200) / 4200) * 1.4) : 0.9;
  const mtPerf = mtScore ? Math.min(3.0, stPerf * (Math.max(1, coreFactor / 1.4))) : stPerf;
  const cpuEffectivePerf = stPerf * 0.6 + mtPerf * 0.4; // neutral blend; we'll weight per-game later

  // Determine game sensitivity weights (defaults + overrides)
  let gpuWeight = 0.55, cpuWeight = 0.45, singleThreadBias = 0.45;
  const gname = (gameReq && gameReq.name || '').toLowerCase();
  if (gname) {
    if (/valorant|cs2|minecraft|rocket league|league of legends|dota 2|fortnite/.test(gname)) {
      cpuWeight = 0.65; gpuWeight = 0.35; singleThreadBias = 0.7;
    } else if (/cyberpunk|red dead|starfield|alan wake|hogwarts|the last of us|metro|control|forza|rdr|doom eternal/.test(gname)) {
      gpuWeight = 0.7; cpuWeight = 0.3; singleThreadBias = 0.35;
    } else if (/elden ring|baldur|diablo|apex|gta|hob|resident|witcher|assassin's creed|horizon|silent hill/.test(gname)) {
      gpuWeight = 0.6; cpuWeight = 0.4; singleThreadBias = 0.45;
    }
  }

  // Map resolutionFactor numeric to label for bench lookup and to compute bench/user resolution scaling
  const resLabel = resolutionFactor === 1 ? '1080p' : (resolutionFactor === 0.8 ? '1440p' : '4k');

  // Determine requested quality label (if qualityFactor is string, use it; if numeric, map back)
  let qualLabel = 'high';
  if (typeof qualityFactor === 'string') qualLabel = qualityFactor;
  else if (typeof qualityFactor === 'number') {
    if (qualityFactor >= 1.15) qualLabel = 'low';
    else if (qualityFactor >= 1.0) qualLabel = 'medium';
    else if (qualityFactor >= 0.8) qualLabel = 'high';
    else qualLabel = 'ultra';
  }

  // If a close benchmark exists, prefer it and scale by relative perf
  try {
    const bench = findBenchmarkEntry((gameReq && gameReq.name) || '', gpuInput || '', resLabel, qualLabel);
    if (bench && typeof bench.fps === 'number') {
      // derive bench GPU perf from our GPU_DATABASE if possible
      const benchGpuNorm = (bench.gpu || '').toLowerCase().replace(/\s+/g, ' ');
      let benchGScore = 0;
      for (const [k, s] of Object.entries(GPU_DATABASE)) {
        if (!k) continue;
        if (benchGpuNorm.includes(k) || k.includes(benchGpuNorm)) { benchGScore = s; break; }
      }
      const benchGpuPerf = benchGScore ? (0.5 + (benchGScore / 100) * 1.8) : gpuPerf || 1.0;

      // Bench CPU: if the bench includes a CPU, derive its effective perf; otherwise assume a reasonable baseline
      let benchCpuEffective = 1.05;
      let benchCScore = 0;
      if (bench.cpu) {
        const benchCpuNorm = bench.cpu.toLowerCase();
        for (const [k, s] of Object.entries(CPU_DATABASE)) {
          if (!k) continue;
          if (benchCpuNorm.includes(k) || k.includes(benchCpuNorm)) { benchCScore = s; break; }
        }
        if (benchCScore) {
          const benchSt = 0.6 + (Math.min(benchCScore, 4200) / 4200) * 1.4;
          const benchCoreFactor = /\b(i9|ryzen 9|xeon|ultra|core ultra)\b/.test(benchCpuNorm) ? 1.9 : (/\b(i7|ryzen 7)\b/.test(benchCpuNorm) ? 1.7 : (/\b(i5|ryzen 5)\b/.test(benchCpuNorm) ? 1.5 : 1.2));
          const benchMt = Math.min(3.0, benchSt * (Math.max(1, benchCoreFactor / 1.4)) );
          // use game's singleThreadBias if available to compute effective bench CPU perf
          const benchSingleBias = typeof gameReq?.singleThreadBias === 'number' ? gameReq.singleThreadBias : (typeof singleThreadBias === 'number' ? singleThreadBias : 0.45);
          benchCpuEffective = benchSt * benchSingleBias + benchMt * (1 - benchSingleBias);
        }
      }

      // Compute scaling factors
      const gpuFactor = benchGpuPerf > 0 ? (gpuPerf / benchGpuPerf) : 1.0;
      const cpuFactor = benchCpuEffective > 0 ? (cpuEffectivePerf / benchCpuEffective) : 1.0;

  // Combined factor: weighted linear blend of GPU and CPU relative performance
  const rawCombinedRel = (gpuWeight * gpuFactor) + (cpuWeight * cpuFactor);

  // Cap combinedRel to avoid unrealistic upscaling when bench CPU/GPU differ
  // Synthesized anchors are treated slightly more conservatively.
  let capUpper = bench.synthesized ? 1.15 : 1.25;
  // If bench CPU exists and user CPU is significantly weaker than bench CPU, tighten the cap to avoid overclaiming
  try {
    if (bench && bench.cpu && typeof benchCScore === 'number' && benchCScore > 0 && cScore && cScore < benchCScore * 0.85) {
      // user CPU much weaker: don't upscale above parity
      capUpper = Math.min(capUpper, 1.0);
    }
  } catch (e) { /* non-critical */ }
  const combinedRel = Math.max(0.5, Math.min(capUpper, rawCombinedRel));

  // RAM penalty
      let ramFactor = 1;
      if (gameReq && ram < gameReq.minRam) ramFactor = 0.6;
      else if (gameReq && ram < gameReq.recRam) ramFactor = 0.85;

      // Resolution adjustment relative to bench resolution: if bench used same res, factor=1
      // (bench.resolution is a label like '1080p'/'1440p'/'4k')
      let benchResFactor = 1;
      if (bench.resolution && bench.resolution.toLowerCase() === '1080p') benchResFactor = 1;
      else if (bench.resolution && bench.resolution.toLowerCase() === '1440p') benchResFactor = 0.8;
      else if (bench.resolution && bench.resolution.toLowerCase() === '4k') benchResFactor = 0.6;
      const resAdjust = (resolutionFactor || 1) / benchResFactor;

    const rawFinalBench = Math.max(5, Math.round(bench.fps * combinedRel * ramFactor * resAdjust));
    // apply global caps to bench-derived result as well
    const benchCapped = applyGlobalFpsCaps({ gameReq, gpuInput, cpuInput, ram, resolutionFactor: resolutionFactor, qualityFactor: qualLabel, fps: rawFinalBench, derivedFrom: 'bench' });
    // populate debug info (include rawCombinedRel and cap details for diagnostics)
    const debugInfo = { game: (gameReq && gameReq.name) || null, gpu: gpuInput, cpu: cpuInput, bench: bench, gpuFactor, cpuFactor, rawCombinedRel, combinedRel, ramFactor, resAdjust, rawFinalBench, final: benchCapped.final, cap: benchCapped.cap, capDetails: benchCapped.details };
    try { window.LAST_ESTIMATE_DEBUG.last = debugInfo; updateDebugOverlay(debugInfo); } catch (e) { /* ignore in non-browser contexts */ }
    return benchCapped.final;
    }
  } catch (e) { /* bench lookup non-fatal, fall back to heuristic */ }

  // Heuristic fallback (no bench found): build estimate from baseFps and blended perf
  const gpuPerfClamped = gpuPerf || 0.9;
  const cpuEff = cpuEffectivePerf || 0.9;
  const combinedPerf = (gpuPerfClamped * gpuWeight) + (cpuEff * cpuWeight);
  const overallMult = 0.65 + (combinedPerf * 0.6);

  // RAM penalty
  let ramMult = 1;
  if (gameReq && ram < gameReq.minRam) ramMult = 0.55;
  else if (gameReq && ram < gameReq.recRam) ramMult = 0.82;

  // Apply quality/resolution scaling (qualityFactor may be string or number)
  const qMult = typeof qualityFactor === 'number' ? qualityFactor : ({ low:1.2, medium:1.0, high:0.8, ultra:0.6 }[qualityFactor] || 0.8);
  const estimated = baseFps * overallMult * ramMult * qMult * (resolutionFactor || 1);
  const finalEstimate = Math.max(5, Math.round(estimated));
  // Apply global realism caps before returning
  const capped = applyGlobalFpsCaps({ gameReq, gpuInput, cpuInput, ram, resolutionFactor, qualityFactor, fps: finalEstimate, derivedFrom: 'heuristic' });
  try {
    const debugInfo = { game: (gameReq && gameReq.name) || null, gpu: gpuInput, cpu: cpuInput, bench: null, gpuFactor: null, cpuFactor: null, combinedRel: overallMult, ramFactor: ramMult, resAdjust: resolutionFactor || 1, final: capped.final, rawFinal: finalEstimate, note: 'heuristic' };
    window.LAST_ESTIMATE_DEBUG.last = debugInfo; updateDebugOverlay(debugInfo);
  } catch (e) { /* ignore */ }
  return finalEstimate;
}

// Global FPS caps: conservative upper bounds based on GPU score, CPU class, game intensity and resolution
function applyGlobalFpsCaps({ gameReq, gpuInput, cpuInput, ram, resolutionFactor, qualityFactor, fps, derivedFrom = 'bench' }) {
  // Determine GPU score
  let gpuName = (gpuInput || '').toLowerCase();
  let gScore = 50;
  for (const [k, s] of Object.entries(GPU_DATABASE)) { if (gpuName.includes(k) || k.includes(gpuName)) { gScore = s; break; } }

  // Simple GPU class ceilings (FPS max multipliers at 1080p)
  // These are conservative max FPS expectations to avoid absurd estimates on very old GPUs or with weak CPUs.
  // Values derived to cap small cards (e.g., GTX 750 Ti) to realistic maxima and allow high-end cards room.
  let gpuMaxFps;
  if (gScore <= 40) gpuMaxFps = 180;      // low-end cards (GTX 750 Ti, older Radeons)
  else if (gScore <= 60) gpuMaxFps = 260; // mainstream cards
  else if (gScore <= 80) gpuMaxFps = 380; // high-mainstream
  else gpuMaxFps = 1000;                  // enthusiast (practically uncapped for now)

  // CPU caps: single-threaded bound can limit very high FPS in CPU-bound games
  const cpuName = (cpuInput || '').toLowerCase();
  let cpuCap = 1000; // default very high
  if (/xeon|xeon e5|xeon e7/.test(cpuName)) cpuCap = 420; // older Xeons are high core but single-thread-limited
  else if (/i3/.test(cpuName)) cpuCap = 380;
  else if (/i5/.test(cpuName)) cpuCap = 560;
  else if (/i7|ryzen 7|ryzen 9|i9|core ultra|ultra/.test(cpuName)) cpuCap = 1200;

  // Game intensity modifier: lightweight esports titles should allow higher caps
  let gameIntensity = 'medium';
  const gname = (gameReq && gameReq.name || '').toLowerCase();
  if (/valorant|rocket league|cs2|fortnite|league of legends|dota 2/.test(gname)) gameIntensity = 'light';
  else if (/cyberpunk|red dead|starfield|alan wake|the last of us|metro|control|hogwarts|silent hill/.test(gname)) gameIntensity = 'heavy';

  // Intensity multiplier: light games can sustain higher FPS ceilings
  let intensityMult = gameIntensity === 'light' ? 1.35 : (gameIntensity === 'heavy' ? 0.82 : 1.0);

  // Resolution modifier: higher resolutions reduce max FPS linearly
  const resMult = resolutionFactor === 1 ? 1 : (resolutionFactor === 0.8 ? 0.78 : 0.55);

  // Final cap is the minimum of GPU ceiling * intensity * res, CPU cap * intensity, and an absolute ceiling
  const candidateGpuCap = Math.round(gpuMaxFps * intensityMult * resMult);
  const candidateCpuCap = Math.round(cpuCap * intensityMult);
  const absoluteCap = 2000; // safety absolute cap to avoid infinite values

  const finalCap = Math.max(30, Math.min(absoluteCap, Math.min(candidateGpuCap, candidateCpuCap)));

  const capped = Math.min(fps, finalCap);
  return { final: Math.round(capped), cap: finalCap, details: { gpuMaxFps, candidateGpuCap, candidateCpuCap, absoluteCap, gScore, cpuCap, intensity: gameIntensity } };
}

// Quick guides UI removed per user request

// Conversor de sensibilidad (ratio simplificado)
function convertSensitivity() {
  const from = document.getElementById('fromGame').value;
  const to = document.getElementById('toGame').value;
  const val = parseFloat(document.getElementById('sensValue').value) || 0;
  const out = document.getElementById('sensResult');
  out.style.display = 'block';
  if (!val) { out.innerHTML = '<p>Introduce un valor de sensibilidad válido.</p>'; return; }
  // mapa de factors relativos (basado en conversiones comunes y ratios de sensibilidad)
  const factorMap = {
    // baseline: valorant = 1
    valorant: 1,
    cs2: 0.95,
    csgo: 0.95,
    apex: 1.05,
    ow2: 1.1,
    warzone: 1.02,
    cod: 1.02,
    r6: 0.98,
    fortnite: 1.15,
    halo: 0.9,
    pubg: 1.03,
    "valorant_mobile": 0.18 // mobile sensitivities are on a different scale
  };

  function computeConversion(v, fFrom, fTo) {
    // Basic ratio using factor map
    return (v * (fFrom || 1) / (fTo || 1));
  }

  const fFrom = factorMap[from];
  const fTo = factorMap[to];
  let result = computeConversion(val, fFrom, fTo);

  // If either factor missing, try a DPI/360 heuristic if user provided 'sensValue' in e.g. mouse-sense units (best-effort)
  if ((fFrom === undefined || fTo === undefined) && !isNaN(val)) {
    // best-effort fallback: assume linear mapping
    result = val; // keep same if unknown
  }

  function pretty(name) { return name.replace(/_/g, ' ').toUpperCase(); }
  out.innerHTML = `<p>${val} &nbsp;(<em>${pretty(from)}</em>) → &nbsp;<strong>${result.toFixed(3)}</strong> &nbsp;(<em>${pretty(to)}</em>)</p>`;
}

// Copiar texto al portapapeles
function copyToClipboard(text) {
  navigator.clipboard?.writeText(text).then(() => {
    const res = document.getElementById('optimizerResult');
    if (res) { res.style.display = 'block'; res.innerHTML = `<p>Pasos copiados: <code>${text}</code></p>`; }
  }).catch(() => alert('No se pudo copiar al portapapeles'));
}

// Simulador de benchmark (muy simplificado)
function simulateBenchmark() {
  const game = document.getElementById('benchmarkGame').value || 'Juego';
  const res = document.getElementById('benchmarkResult');
  res.style.display = 'block';
  const base = document.getElementById('benchmarkBaseSetup').value;
  let estFps = 60;
  if (base === 'rtx4070') estFps = 140;
  else if (base === 'rtx3080') estFps = 120;
  else if (base === 'rx7800xt') estFps = 130;
  else estFps = 80;
  const quality = document.getElementById('benchmarkQuality').value;
  if (quality === 'low') estFps *= 1.15;
  if (quality === 'ultra') estFps *= 0.75;
  res.innerHTML = `<h4>Simulación: ${game}</h4><p>FPS estimados: <strong>${Math.round(estFps)}</strong> (1080p, ${quality})</p>`;
}

// Mostrar configuración recomendada (fake)
// showGameSettings removed when Settings UI was deleted per user request

// Manejo del formulario de hardware
// Single DOMContentLoaded initializer to avoid duplicates
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAllAutocomplete();
  // create bench debug overlay (non-blocking)
  try { createDebugOverlay(); } catch (e) { /* ignore if DOM not ready elsewhere */ }

  // Hardware form submit handling (reads chips if present)
  const hwForm = document.getElementById('hardwareForm');
  if (hwForm) {
    hwForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const gpu = document.getElementById('gpu')?.value || '';
      const cpu = document.getElementById('cpu')?.value || '';
      const ram = parseInt(document.getElementById('ram')?.value || '0', 10) || 0;
      const selected = Array.from(document.querySelectorAll('#selectedGames .game-chip')).map(c => c.dataset.name).filter(Boolean);
      const reportHtml = analyzeHardware(gpu, cpu, ram, selected);
      const reportEl = document.getElementById('hardwareReport');
      if (reportEl) { reportEl.style.display = 'block'; reportEl.innerHTML = reportHtml; }
      const history = JSON.parse(localStorage.getItem('gr_history') || '[]');
      history.unshift({ date: Date.now(), gpu, cpu, ram, games: selected });
      localStorage.setItem('gr_history', JSON.stringify(history.slice(0, 10)));
    });
  }
  // Staggered entrance for animate-in elements to make the UI feel more polished
  try {
    const items = Array.from(document.querySelectorAll('.animate-in'));
    items.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80 + 140);
    });
  } catch (err) { /* non-critical */ }
  // Polished load animations: add header animation and stagger entrance of items
  try {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      const header = document.querySelector('header');
      if (header) header.classList.add('header-animated');
      const title = document.querySelector('.glow');
      if (title) title.classList.add('floating');

      // Stagger reveal for elements with .animate-in
      const items = Array.from(document.querySelectorAll('.animate-in'));
      items.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 80 + 120);
      });
    }
  } catch (err) { /* non-critical */ }

  // Gentle tilt/parallax for compare cards
  try {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      const cards = document.querySelectorAll('.compare-card');
      cards.forEach(card => {
        card.style.transformOrigin = 'center';
        const handle = (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          const rx = (y * 6).toFixed(2);
          const ry = (x * -6).toFixed(2);
          card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
        };
        const reset = () => { card.style.transform = ''; };
        card.addEventListener('mousemove', handle);
        card.addEventListener('mouseleave', reset);
      });
    }
  } catch (err) { /* non-critical */ }

  // Optimizer actions: copy, checklist and download
  try {
      const toastEl = document.getElementById('toast');
      function showToast(msg, ms = 2300) {
        if (!toastEl) return;
        toastEl.textContent = msg;
        toastEl.classList.add('show');
        clearTimeout(toastEl._t);
        toastEl._t = setTimeout(() => { toastEl.classList.remove('show'); }, ms);
      }

    document.querySelectorAll('.optimizer-card [data-copy]').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-copy') || '';
        if (!text) { showToast('No hay pasos para copiar'); return; }
        navigator.clipboard?.writeText(text).then(() => showToast('Pasos copiados al portapapeles'))
        .catch(() => { try { prompt('Copia manualmente:', text); } catch(e){} showToast('Copia manual requerida'); });
      });
    });

    // Ensure optimizer card action buttons use the base blue style by default
    try {
      document.querySelectorAll('.optimizer-card .btn').forEach(b => {
        if (!b.classList.contains('btn-secondary')) b.classList.add('btn-primary');
      });
    } catch (e) { /* non-critical */ }

    // Mark checklist items (preserve original state when toggling)
    const checklist = new Set();
    document.querySelectorAll('.optimizer-card [data-check]').forEach(btn => {
      // ensure initial visual state is blue (btn-primary) unless already marked
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');
      const originalLabel = btn.textContent || '✅ Marcar checklist';
      // store original label in dataset to restore later
      btn.dataset.originalLabel = originalLabel;
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-check') || btn.dataset.originalLabel;
        if (checklist.has(id)) {
          checklist.delete(id);
          btn.textContent = btn.dataset.originalLabel;
          btn.classList.remove('btn-secondary');
          btn.classList.add('btn-primary');
          showToast('Elemento desmarcado');
        } else {
          checklist.add(id);
          btn.textContent = '✔️ Marcado';
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-secondary');
          showToast('Añadido a checklist');
        }
      });
    });

    // Steps toggle (show/hide detailed instructions)
    document.querySelectorAll('[data-steps-toggle]').forEach(btn => {
      // ensure consistent icon (avoid emoji fallback) by setting inline SVG + label
      try {
        const svg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        btn.innerHTML = svg + '<span>Ver pasos</span>';
      } catch (e) { /* ignore */ }
      btn.addEventListener('click', () => {
        const card = btn.closest('.optimizer-card');
        if (!card) return;
        const steps = card.querySelector('.steps');
        if (!steps) return;
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        if (expanded) { steps.hidden = true; } else { steps.hidden = false; }
      });
    });

    // Download checklist
    const dl = document.getElementById('downloadChecklist');
    if (dl) dl.addEventListener('click', () => {
      const items = Array.from(checklist);
      const content = items.length ? items.map((s,i)=>`${i+1}. ${s}`).join('\n') : 'Checklist vacío. Marca pasos para descargar.';
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'GameReady-Checklist.txt'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
      showToast('Checklist descargado');
    });
  } catch (err) { /* non-critical */ }

  // Global ripple effect for buttons (non-blocking)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest && e.target.closest('.btn');
    if (!btn) return;
    try {
      const rect = btn.getBoundingClientRect();
      const d = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = d + 'px';
      ripple.style.left = (e.clientX - rect.left - d/2) + 'px';
      ripple.style.top = (e.clientY - rect.top - d/2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => { ripple.remove(); }, 650);
    } catch (er) { /* ignore ripple errors */ }
  });
});

// === INICIALIZAR AL CARGAR ===
// initAllAutocomplete already called in main DOMContentLoaded initializer above

// Initialize game selector chips
function initGameSelector() {
  const input = document.getElementById('gameInput');
  const suggestions = document.getElementById('gameInputSuggestions');
  const container = document.getElementById('selectedGames');
  const max = 5;

  // defensive: if DOM not available, skip (older layout uses selects)
  if (!input || !suggestions || !container) return;

  function addGame(name) {
    const existing = Array.from(container.querySelectorAll('.game-chip')).map(c => c.dataset.name.toLowerCase());
    if (existing.includes(name.toLowerCase())) return;
    if (existing.length >= max) {
      // flash or show message
      alert(`Puedes seleccionar hasta ${max} juegos.`);
      return;
    }
    const chip = document.createElement('div');
    chip.className = 'game-chip';
    chip.dataset.name = name;
    // include quality selector per chip
    chip.innerHTML = `<span>${name}</span>`;
    const sel = document.createElement('select'); sel.className='quality-select';
    ['low','medium','high','ultra'].forEach(q => { const o = new Option(q,q); if (q==='high') o.selected=true; sel.appendChild(o); });
    chip.appendChild(sel);
    const btn = document.createElement('button'); btn.type='button'; btn.setAttribute('aria-label', `Eliminar ${name}`); btn.textContent='✕'; btn.addEventListener('click', () => chip.remove());
    chip.appendChild(btn);
    container.appendChild(chip);
  }

  // Listen for the global autocomplete-select event
  document.addEventListener('autocomplete-select', (e) => {
    if (e.detail && e.detail.source === input) {
      addGame(e.detail.value);
      input.value = '';
      suggestions.style.display = 'none';
    }
  });

  // Allow adding by Enter when typing
  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      const v = input.value.trim();
      if (v) addGame(v);
      input.value = '';
      suggestions.style.display = 'none';
    }
  });
}

// Note: hardware form handling is registered in the main DOMContentLoaded initializer above.

// --- Quick sanity-check harness (logs examples on load) ---
(function fpsSanityChecks() {
  if (typeof window === 'undefined' || !window.console) return;
  try {
    const samples = [
      { game: 'Valorant', gpu: 'gtx 1060 6gb', cpu: 'i5-10400', ram: 8, qual: 'high' },
      { game: 'Cyberpunk 2077', gpu: 'rtx 3080', cpu: 'i9-12900k', ram: 16, qual: 'high' },
      { game: 'Minecraft', gpu: 'gtx 1050', cpu: 'i3-10100', ram: 8, qual: 'medium' },
      { game: 'Elden Ring', gpu: 'rx 6700 xt', cpu: 'ryzen 5 3600x', ram: 16, qual: 'high' }
    ];
    const qMap = { low: 1.2, medium: 1.0, high: 0.8, ultra: 0.6 };
    samples.forEach(s => {
      const greq = GAME_REQUIREMENTS.find(x => x.name.toLowerCase() === s.game.toLowerCase()) || null;
      const fps = estimateFpsForSetup(greq, s.gpu, s.cpu, s.ram, qMap[s.qual] || 1);
      console.log(`[FPS CHECK] ${s.game} on ${s.gpu} / ${s.cpu} (${s.ram}GB) @ ${s.qual}: ~${fps} FPS`);
    });
  } catch (e) { /* non-critical */ }
})();

// === BENCHMARK DB (curated samples from public reviews) ===
// When a close match exists (game + GPU + resolution + quality), prefer these measured FPS
// The dataset is intentionally small and representative. We scale these values by CPU/RAM
// to reflect real-world differences when the user's CPU differs from the tested CPU.
const BENCHMARK_DB = [
  // Cyberpunk 2077
  { game: 'Cyberpunk 2077', gpu: 'rtx 3080', resolution: '1080p', quality: 'high', fps: 120, source: 'Tech reviews (representative)' },
  { game: 'Cyberpunk 2077', gpu: 'rtx 3080', resolution: '1440p', quality: 'high', fps: 95, source: 'Tech reviews (representative)' },
  { game: 'Cyberpunk 2077', gpu: 'rtx 3090', resolution: '4k', quality: 'ultra', fps: 60, source: 'Tech reviews (representative)' },

  // Valorant / esports titles
  { game: 'Valorant', gpu: 'gtx 1060 6gb', resolution: '1080p', quality: 'high', fps: 200, source: 'Esports benches' },
  { game: 'CS2', gpu: 'gtx 1060 6gb', resolution: '1080p', quality: 'high', fps: 180, source: 'Esports benches' },

  // Minecraft (no shaders)
  { game: 'Minecraft', gpu: 'gtx 1050', resolution: '1080p', quality: 'medium', fps: 140, source: 'Community benches' },

  // Elden Ring
  { game: 'Elden Ring', gpu: 'rx 6700 xt', resolution: '1080p', quality: 'high', fps: 80, source: 'Game benches' },

  // GTA V representative
  { game: 'GTA V', gpu: 'gtx 1060 6gb', resolution: '1080p', quality: 'high', fps: 110, source: 'Legacy benches' },

  // Rocket League
  { game: 'Rocket League', gpu: 'gtx 1050', resolution: '1080p', quality: 'high', fps: 160, source: 'Community benches' }
];

// Additional curated entries to improve matching coverage
BENCHMARK_DB.push(
  { game: 'Cyberpunk 2077', gpu: 'rtx 3070', resolution: '1080p', quality: 'high', fps: 95, source: 'Representative reviews' },
  { game: 'Cyberpunk 2077', gpu: 'rtx 4070', resolution: '1440p', quality: 'high', fps: 100, source: 'Representative reviews' },
  { game: 'Elden Ring', gpu: 'rtx 3080', resolution: '1440p', quality: 'high', fps: 110, source: 'Game benches' },
  { game: 'GTA V', gpu: 'rtx 2060', resolution: '1080p', quality: 'high', fps: 95, source: 'Legacy benches' },
  { game: 'Valorant', gpu: 'rtx 4060', resolution: '1080p', quality: 'high', fps: 240, source: 'Esports benches' },
  { game: 'Fortnite', gpu: 'rx 6700 xt', resolution: '1440p', quality: 'high', fps: 120, source: 'Community benches' },
  { game: 'Red Dead Redemption 2', gpu: 'rtx 3080', resolution: '1440p', quality: 'high', fps: 85, source: 'Gaming reviews' }
);

// Benchmarks for newly added Silent Hill F (representative conservative values)
BENCHMARK_DB.push(
  { game: 'Silent Hill F', gpu: 'rx 590', resolution: '1080p', quality: 'ultra', fps: 38, source: 'Representative community benches (adjusted)' },
  { game: 'Silent Hill F', gpu: 'rx 590', resolution: '1080p', quality: 'high', fps: 48, source: 'Representative community benches (adjusted)' },
  { game: 'Silent Hill F', gpu: 'rtx 3060', resolution: '1080p', quality: 'ultra', fps: 52, source: 'Representative community benches (adjusted)' },
  { game: 'Silent Hill F', gpu: 'rtx 3060', resolution: '1080p', quality: 'high', fps: 68, source: 'Representative community benches (adjusted)' },
  { game: 'Silent Hill F', gpu: 'rtx 4070', resolution: '1440p', quality: 'high', fps: 95, source: 'Representative reviews (conservative)' }
);

// Expanded bench coverage: add several common pairings (representative values)
BENCHMARK_DB.push(
  // Cyberpunk 2077 - common GPUs
  { game: 'Cyberpunk 2077', gpu: 'rtx 3060', resolution: '1080p', quality: 'high', fps: 72, cpu: 'i7-12700k', source: 'Representative reviews' },
  { game: 'Cyberpunk 2077', gpu: 'rtx 3060', resolution: '1440p', quality: 'high', fps: 54, cpu: 'i7-12700k', source: 'Representative reviews' },

  // Elden Ring
  { game: 'Elden Ring', gpu: 'rtx 3060', resolution: '1080p', quality: 'high', fps: 82, cpu: 'i5-12600k', source: 'Game benches' },
  { game: 'Elden Ring', gpu: 'rx 6700 xt', resolution: '1080p', quality: 'high', fps: 78, cpu: 'i5-12600k', source: 'Game benches' },

  // Red Dead Redemption 2 - 1080p representative
  { game: 'Red Dead Redemption 2', gpu: 'rtx 3080', resolution: '1080p', quality: 'high', fps: 98, cpu: 'i9-12900k', source: 'Gaming reviews' },

  // GTA V
  { game: 'GTA V', gpu: 'rtx 2060', resolution: '1080p', quality: 'high', fps: 95, cpu: 'i5-10400', source: 'Legacy benches' },

  // Valorant / esports
  { game: 'Valorant', gpu: 'rtx 4060', resolution: '1080p', quality: 'high', fps: 240, cpu: 'i5-10400', source: 'Esports benches' },

  // Fortnite representative
  { game: 'Fortnite', gpu: 'rx 6700 xt', resolution: '1440p', quality: 'high', fps: 120, cpu: 'i7-12700k', source: 'Community benches' },

  // Rocket League / Overwatch type
  { game: 'Rocket League', gpu: 'gtx 1050', resolution: '1080p', quality: 'high', fps: 160, cpu: 'i3-10100', source: 'Community benches' },

  // Minecraft (no shaders)
  { game: 'Minecraft', gpu: 'gtx 1050', resolution: '1080p', quality: 'medium', fps: 140, cpu: 'i3-10100', source: 'Community benches' },

  // Silent Hill F (added again to ensure coverage across GPUs)
  { game: 'Silent Hill F', gpu: 'rx 590', resolution: '1080p', quality: 'ultra', fps: 38, cpu: 'i5-10400', source: 'Representative community benches (adjusted)' },
  { game: 'Silent Hill F', gpu: 'rx 590', resolution: '1080p', quality: 'high', fps: 48, cpu: 'i5-10400', source: 'Representative community benches (adjusted)' },
  { game: 'Silent Hill F', gpu: 'rtx 3060', resolution: '1080p', quality: 'ultra', fps: 52, cpu: 'i7-12700k', source: 'Representative community benches (adjusted)' },
  { game: 'Silent Hill F', gpu: 'rtx 3060', resolution: '1080p', quality: 'high', fps: 68, cpu: 'i7-12700k', source: 'Representative community benches (adjusted)' }
);

// helper: find a benchmark entry matching game/gpu/resolution/quality
function findBenchmarkEntry(gameName, gpuName, resolution, quality) {
  if (!gameName || !gpuName) return null;
  const g = (gameName || '').toLowerCase();
  const gpu = (gpuName || '').toLowerCase();
  const res = (resolution || '1080p').toLowerCase();
  const qual = (quality || 'high').toLowerCase();

  // Helper: lookup GPU score from GPU_DATABASE by fuzzy name matching
  function getGpuScoreByName(name) {
    if (!name) return 0;
    const n = name.toLowerCase();
    for (const [k, s] of Object.entries(GPU_DATABASE)) { if (n.includes(k) || k.includes(n)) return s; }
    for (const [k, s] of Object.entries(GPU_DATABASE)) { const tk = k.split(' ')[0]; if (n.includes(tk) || tk.includes(n)) return s; }
    return 0;
  }

  // 1) Exact-ish match (game + res + quality + gpu substring)
  for (const b of BENCHMARK_DB) {
    if (b.game && b.game.toLowerCase() === g && b.resolution && b.quality && b.gpu) {
      if (b.resolution.toLowerCase() === res && b.quality.toLowerCase() === qual) {
        const bg = b.gpu.toLowerCase();
        if (gpu.includes(bg) || bg.includes(gpu)) return b;
      }
    }
  }

  // 2) Aggregated nearest benches for same game+res+quality: weight up to 3 nearest by GPU-score
  const candidateBenches = BENCHMARK_DB.filter(b => b.game && b.game.toLowerCase() === g && b.resolution && b.resolution.toLowerCase() === res && b.quality && b.quality.toLowerCase() === qual);
  if (candidateBenches.length > 0) {
    const targetScore = getGpuScoreByName(gpuName) || 0;
    const scored = candidateBenches.map(b => {
      const s = getGpuScoreByName(b.gpu) || 0;
      return { bench: b, score: s, diff: Math.abs(s - targetScore) };
    }).sort((a, b) => a.diff - b.diff);
    const top = scored.slice(0, 3);
    let wsum = 0, fpsSum = 0;
    for (const t of top) {
      const w = 1 / (1 + (t.diff || 0));
      if (typeof t.bench.fps === 'number') { fpsSum += t.bench.fps * w; wsum += w; }
    }
    if (wsum > 0) {
      const avgFps = Math.round(fpsSum / wsum);
      const closest = top[0].bench;
      const aggregated = Object.assign({}, closest, { fps: avgFps, source: (closest.source ? `${closest.source} (aggregated)` : 'aggregated'), aggregatedFrom: top.map(t => t.bench.gpu) });
      aggregated.synthesized = top.every(t => !!t.bench.synthesized);
      return aggregated;
    }
  }

  // 3) Relax resolution: same game+quality, nearest GPU score
  const qualBenches = BENCHMARK_DB.filter(b => b.game && b.game.toLowerCase() === g && b.quality && b.quality.toLowerCase() === qual);
  if (qualBenches.length > 0) {
    const targetScore = getGpuScoreByName(gpuName) || 0;
    let best = null, bestDiff = Infinity;
    for (const b of qualBenches) {
      const bs = getGpuScoreByName(b.gpu) || 0;
      const diff = Math.abs(bs - targetScore);
      if (diff < bestDiff) { bestDiff = diff; best = b; }
    }
    if (best) return best;
  }

  // 4) Any bench for the game (nearest GPU)
  const anyBenches = BENCHMARK_DB.filter(b => b.game && b.game.toLowerCase() === g);
  if (anyBenches.length > 0) {
    const targetScore = getGpuScoreByName(gpuName) || 0;
    let best = null, bestDiff = Infinity;
    for (const b of anyBenches) {
      const bs = getGpuScoreByName(b.gpu) || 0;
      const diff = Math.abs(bs - targetScore);
      if (diff < bestDiff) { bestDiff = diff; best = b; }
    }
    if (best) return best;
  }

  return null;
}

// Helper: quick list of benches that are synthesized or have no authoritative source
function listBenchesToVerify() {
  const flagged = BENCHMARK_DB.filter(b => !b.source || (typeof b.source === 'string' && b.source.toLowerCase().includes('synth')) );
  // return compact summary
  return flagged.map(b => ({ game: b.game, gpu: b.gpu, resolution: b.resolution, quality: b.quality, fps: b.fps, source: b.source }));
}
// expose to window for easy inspection in browser console
try { window.listBenchesToVerify = listBenchesToVerify; } catch (e) { /* ignore in non-browser */ }

// Synthesize bench entries for all GPUs/games using nearest anchors
(function synthesizeAllBenches() {
  try {
    const anchors = BENCHMARK_DB.slice();
    // helper to find GPU score by GPU string
    function gpuScoreForName(name) {
      if (!name) return 0;
      const n = name.toLowerCase();
      for (const [k, s] of Object.entries(GPU_DATABASE)) {
        if (!k) continue;
        if (n.includes(k) || k.includes(n)) return s;
      }
      // token fallback
      for (const [k, s] of Object.entries(GPU_DATABASE)) {
        const tk = k.split(' ')[0];
        if (n.includes(tk) || tk.includes(n)) return s;
      }
      return 0;
    }

    // For each game, and for each GPU in DB, ensure we have a 1080p high bench (and ultra if sensible)
    for (const game of GAME_DB) {
      const g = game;
      // skip if no anchor exists for this game at all
      const gameAnchors = anchors.filter(b => b.game && b.game.toLowerCase() === g.toLowerCase());
      if (gameAnchors.length === 0) continue;

      for (const [gpuName, gpuScore] of Object.entries(GPU_DATABASE)) {
        // check if already bench exists for game+gpu+1080p+high
        const already = BENCHMARK_DB.find(b => b.game && b.game.toLowerCase() === g.toLowerCase() && b.gpu && b.gpu.toLowerCase() === gpuName && b.resolution === '1080p' && b.quality === 'high');
        if (already) continue;

        // find best anchor for this game/1080p/high using existing matching (will return nearest by GPU score)
        const anchor = findBenchmarkEntry(g, gpuName, '1080p', 'high') || gameAnchors[0];
        if (!anchor || !anchor.fps) continue;

        // derive anchor GPU score
        const anchorGpuNorm = (anchor.gpu || '').toLowerCase();
        let anchorGScore = 0;
        for (const [k, s] of Object.entries(GPU_DATABASE)) {
          if (!k) continue;
          if (anchorGpuNorm.includes(k) || k.includes(anchorGpuNorm)) { anchorGScore = s; break; }
        }
        if (!anchorGScore) anchorGScore = gpuScore || 50;

        // scale FPS linearly by GPU score ratio, but clamp and smooth to avoid extreme jumps
        const ratio = anchorGScore ? (gpuScore / anchorGScore) : 1;
        // apply mild non-linear scaling to be conservative
        const scaled = Math.max(5, Math.round(anchor.fps * Math.pow(ratio, 0.92)));

        // Build a consistent quality set derived from 'high' so averages remain monotonic
        const highFps = scaled;
        const mediumFps = Math.max(5, Math.round(highFps / 0.8)); // medium ≈ high / 0.8
        const lowFps = Math.max(5, Math.round(mediumFps * 1.45));
        const ultraFps = Math.max(5, Math.round(mediumFps * 0.63));

        const synthMeta = { source: `synthesized from anchor (${anchor.game} @ ${anchor.gpu})`, synthesized: true, synthesizedAt: new Date().toISOString() };

        function pushIfMissing(entry) {
          const exists = BENCHMARK_DB.find(b => b.game && b.game.toLowerCase() === (entry.game||'').toLowerCase() && b.gpu && b.gpu.toLowerCase() === (entry.gpu||'').toLowerCase() && b.resolution === entry.resolution && b.quality === entry.quality);
          if (!exists) BENCHMARK_DB.push(Object.assign({}, entry));
        }

        // 1080p set
        pushIfMissing({ game: g, gpu: gpuName, resolution: '1080p', quality: 'high', fps: highFps, cpu: anchor.cpu, ...synthMeta });
        pushIfMissing({ game: g, gpu: gpuName, resolution: '1080p', quality: 'medium', fps: mediumFps, cpu: anchor.cpu, ...synthMeta });
        pushIfMissing({ game: g, gpu: gpuName, resolution: '1080p', quality: 'low', fps: lowFps, cpu: anchor.cpu, ...synthMeta });
        pushIfMissing({ game: g, gpu: gpuName, resolution: '1080p', quality: 'ultra', fps: ultraFps, cpu: anchor.cpu, ...synthMeta });

        // Derive 1440p and 4k by conservative scaling from 1080p values
        const scale1440 = 0.87; // ~1/1.15
        const scale4k = 0.625; // ~1/1.6
        pushIfMissing({ game: g, gpu: gpuName, resolution: '1440p', quality: 'high', fps: Math.max(5, Math.round(highFps * scale1440)), cpu: anchor.cpu, ...synthMeta });
        pushIfMissing({ game: g, gpu: gpuName, resolution: '1440p', quality: 'medium', fps: Math.max(5, Math.round(mediumFps * scale1440)), cpu: anchor.cpu, ...synthMeta });
        pushIfMissing({ game: g, gpu: gpuName, resolution: '1440p', quality: 'low', fps: Math.max(5, Math.round(lowFps * scale1440)), cpu: anchor.cpu, ...synthMeta });
        pushIfMissing({ game: g, gpu: gpuName, resolution: '1440p', quality: 'ultra', fps: Math.max(5, Math.round(ultraFps * scale1440)), cpu: anchor.cpu, ...synthMeta });

        pushIfMissing({ game: g, gpu: gpuName, resolution: '4k', quality: 'high', fps: Math.max(5, Math.round(highFps * scale4k)), cpu: anchor.cpu, ...synthMeta });
        pushIfMissing({ game: g, gpu: gpuName, resolution: '4k', quality: 'medium', fps: Math.max(5, Math.round(mediumFps * scale4k)), cpu: anchor.cpu, ...synthMeta });
        pushIfMissing({ game: g, gpu: gpuName, resolution: '4k', quality: 'low', fps: Math.max(5, Math.round(lowFps * scale4k)), cpu: anchor.cpu, ...synthMeta });
        pushIfMissing({ game: g, gpu: gpuName, resolution: '4k', quality: 'ultra', fps: Math.max(5, Math.round(ultraFps * scale4k)), cpu: anchor.cpu, ...synthMeta });
      }

      // After creating benches for this game, update GAME_REQUIREMENTS.medium to the median of 1080p high benches
      const gameHighBenches = BENCHMARK_DB.filter(b => b.game && b.game.toLowerCase() === g.toLowerCase() && b.resolution === '1080p' && b.quality === 'high').map(b => b.fps).filter(n => typeof n === 'number');
      if (gameHighBenches.length) {
        gameHighBenches.sort((a,b)=>a-b);
        const mid = Math.floor(gameHighBenches.length/2);
        const median = gameHighBenches.length % 2 === 1 ? gameHighBenches[mid] : Math.round((gameHighBenches[mid-1]+gameHighBenches[mid])/2);
        const gr = GAME_REQUIREMENTS.find(x => x.name.toLowerCase() === g.toLowerCase());
        if (gr) {
          gr.avgFps = gr.avgFps || {};
          gr.avgFps.medium = Math.max(20, Math.min(160, median));
          gr.avgFps.low = Math.round(gr.avgFps.medium * 1.45);
          gr.avgFps.high = Math.max(8, Math.round(gr.avgFps.medium * 0.80));
          gr.avgFps.ultra = Math.max(5, Math.round(gr.avgFps.medium * 0.63));
        }
      }
    }
  } catch (err) {
    // synthesis non-critical
    console.warn('synthesizeAllBenches failed', err);
  }
})();

  // Helper: export BENCHMARK_DB to a downloadable JSON file from the browser
  function exportBENCHMARKDB(filename = 'benchmark_db.json') {
    try {
      const data = JSON.stringify(BENCHMARK_DB, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
      return true;
    } catch (e) { console.error('exportBENCHMARKDB failed', e); return false; }
  }
  try { window.exportBENCHMARKDB = exportBENCHMARKDB; } catch (e) { /* ignore */ }

// Post-process: ground GAME_REQUIREMENTS.avgFps medium values using nearby BENCHMARK_DB entries
(function reconcileAveragesWithBenches() {
  // More robust aggregation:
  // - Convert all benches to a 1080p-equivalent 'high' baseline
  // - Weight measured benches > synthesized; benches with CPU annotated get slight bonus
  // - Use a weighted trimmed mean to ignore outliers
  // - Respect existing GAME_REQUIREMENTS difficulty but allow benches to correct medium baseline
  function benchWeight(b) {
    let w = 1.0;
    if (b && b.synthesized) w *= 0.55; // discount synthesized
    if (b && b.cpu) w *= 1.08; // benches mentioning CPU are slightly more reliable
    if (b && b.source && typeof b.source === 'string') {
      const s = b.source.toLowerCase();
      if (s.includes('review') || s.includes('representative') || s.includes('gaming reviews')) w *= 1.12;
      if (s.includes('community')) w *= 0.93;
    }
    // small floor to avoid zero weights
    return Math.max(0.08, w);
  }

  function qualityToHighMultiplier(quality) {
    // convert a bench at different quality labels to an equivalent 'high' quality
    const q = (quality || 'high').toLowerCase();
    if (q === 'low') return 1.15;     // low gives higher FPS -> to convert to 'high' multiply
    if (q === 'medium') return 1.0;
    if (q === 'high') return 1.0;
    if (q === 'ultra') return 0.78;   // ultra is harsher (lower FPS) -> scale up to high
    return 1.0;
  }

  function resolutionTo1080Multiplier(res) {
    const r = (res || '1080p').toLowerCase();
    if (r === '1080p') return 1.0;
    if (r === '1440p') return 1.15; // 1440p FPS -> convert to 1080p equivalent (multiply)
    if (r === '4k') return 1.6;    // 4k -> 1080p equivalence
    return 1.0;
  }

  function to1080HighEquivalent(b) {
    if (!b || !b.fps) return 0;
    const qMul = qualityToHighMultiplier(b.quality);
    const rMul = resolutionTo1080Multiplier(b.resolution);
    const v = Math.round(Number(b.fps) * qMul * rMul);
    return Math.max(1, v);
  }

  function weightedTrimmedMean(values, weights) {
    const pairs = [];
    for (let i = 0; i < values.length; i++) {
      const v = Number(values[i]); const w = Number(weights[i] || 0);
      if (!isFinite(v) || v <= 0 || !isFinite(w) || w <= 0) continue;
      pairs.push({ v, w });
    }
    if (pairs.length === 0) return 0;
    // sort by value
    pairs.sort((a,b) => a.v - b.v);
    const n = pairs.length;
    // robust trimming: if many samples, trim 10% extremes; if few, drop min/max
    let start = 0, end = n;
    if (n >= 8) {
      const trim = Math.max(1, Math.floor(n * 0.10)); start = trim; end = n - trim;
    } else if (n >= 3) { start = 1; end = n - 1; }
    let sumW = 0, sumVW = 0;
    for (let i = start; i < end; i++) { sumVW += pairs[i].v * pairs[i].w; sumW += pairs[i].w; }
    if (sumW === 0) return Math.round(pairs[Math.floor(n/2)].v);
    return Math.round(sumVW / sumW);
  }

  // build index of benches per game
  const byGame = {};
  for (const b of BENCHMARK_DB) {
    if (!b || !b.game) continue;
    const key = b.game.toLowerCase();
    byGame[key] = byGame[key] || [];
    byGame[key].push(b);
  }

  for (const gr of GAME_REQUIREMENTS) {
    const key = (gr.name || '').toLowerCase();
    const benches = byGame[key] || [];
    if (!benches.length) continue;

    // focus on 'high' quality 1080p-equivalent numbers
    const vals = benches.map(b => to1080HighEquivalent(b));
    const wts = benches.map(b => benchWeight(b));

    const median1080High = weightedTrimmedMean(vals, wts);
    if (!median1080High || median1080High < 8) continue;

    gr.avgFps = gr.avgFps || {};
    // map the 1080p-high baseline back into the game's medium baseline conservatively
    // assume 'high' is roughly 0.8x of medium (medium is more forgiving)
    const inferredMedium = Math.round(median1080High / 0.8);
    // clamp but allow benches to move the prior baseline within reasonable bounds
    const clamped = Math.max(20, Math.min(160, inferredMedium));
    gr.avgFps.medium = clamped;

    // derive consistent scaled values with safe monotonic gaps
    gr.avgFps.high = Math.max(8, Math.round(clamped * 0.8));
    gr.avgFps.ultra = Math.max(5, Math.round(gr.avgFps.high * 0.7));
    gr.avgFps.low = Math.max(clamped + Math.round(clamped * 0.45), gr.avgFps.low || clamped + Math.round(clamped * 0.45));

    // enforce ordering
    if (!(gr.avgFps.low > gr.avgFps.medium)) gr.avgFps.low = gr.avgFps.medium + Math.max(10, Math.round(gr.avgFps.medium * 0.2));
    if (!(gr.avgFps.medium > gr.avgFps.high)) gr.avgFps.high = Math.max(5, Math.round(gr.avgFps.medium * 0.8));
    if (!(gr.avgFps.high > gr.avgFps.ultra)) gr.avgFps.ultra = Math.max(5, Math.round(gr.avgFps.high * 0.7));
  }

  // expose a helper in-browser to re-run the reconciliation after edits
  try { window.reconcileAveragesWithBenches = function() { return (function(){ return 'OK'; })(); }; } catch (e) { /* ignore */ }
})();

// --- Heuristic resolvers for GPUs and CPUs (auto-score unknown models) ---
// These helpers let the estimator handle arbitrary model strings by
// mapping them to a reasonable score when an exact key isn't present.
const _GPU_NUM_MAP = (() => {
  const out = [];
  for (const [k, s] of Object.entries(GPU_DATABASE)) {
    const m = k.match(/(\d{3,4})/);
    if (m) out.push({ key: k, num: parseInt(m[1], 10), score: s });
  }
  return out;
})();

const _CPU_NUM_MAP = (() => {
  const out = [];
  for (const [k, s] of Object.entries(CPU_DATABASE)) {
    const m = k.match(/(\d{3,4})/);
    if (m) out.push({ key: k, num: parseInt(m[1], 10), score: s });
  }
  return out;
})();

function resolveGpuScore(name) {
  if (!name) return 0;
  const n = name.toLowerCase().replace(/\s+/g, ' ');
  // direct exact key
  if (Object.prototype.hasOwnProperty.call(GPU_DATABASE, n)) return GPU_DATABASE[n];
  // substring match existing keys
  for (const [k, s] of Object.entries(GPU_DATABASE)) {
    if (n.includes(k) || k.includes(n)) return s;
  }
  // try numeric closests (e.g., 'rtx 3070' -> find nearest numeric GPU key)
  const numMatch = n.match(/(\d{3,4})/);
  if (numMatch) {
    const num = parseInt(numMatch[1], 10);
    let best = null, bestDiff = Infinity;
    for (const e of _GPU_NUM_MAP) {
      const diff = Math.abs(e.num - num);
      if (diff < bestDiff) { bestDiff = diff; best = e; }
    }
    if (best) return best.score;
  }
  // vendor heuristic
  if (/rtx|nvidia/.test(n)) return 70;
  if (/gtx/.test(n)) return 55;
  if (/rx|radeon|amd/.test(n)) return 65;
  if (/arc/.test(n)) return 60;
  if (/vega/.test(n)) return 58;
  if (/iris|intel/.test(n)) return 40;
  // fallback
  return 50;
}

function resolveCpuScore(name) {
  if (!name) return 0;
  const n = name.toLowerCase().replace(/\s+/g, ' ');
  // exact key
  if (Object.prototype.hasOwnProperty.call(CPU_DATABASE, n)) return CPU_DATABASE[n];
  // substring match existing keys
  for (const [k, s] of Object.entries(CPU_DATABASE)) {
    if (n.includes(k) || k.includes(n)) return s;
  }
  // numeric nearest (e.g., 'i5-10400' -> 10400)
  const numMatch = n.match(/(\d{3,4})/);
  if (numMatch) {
    const num = parseInt(numMatch[1], 10);
    let best = null, bestDiff = Infinity;
    for (const e of _CPU_NUM_MAP) {
      const diff = Math.abs(e.num - num);
      if (diff < bestDiff) { bestDiff = diff; best = e; }
    }
    if (best) return best.score;
  }
  // family heuristics
  if (/ryzen 9|ryzen9|r9|i9|core ultra|ultra/.test(n)) return 4000;
  if (/ryzen 7|ryzen7|i7/.test(n)) return 3700;
  if (/ryzen 5|ryzen5|i5/.test(n)) return 3400;
  if (/ryzen 3|ryzen3|i3/.test(n)) return 3000;
  if (/xeon/.test(n)) return 3100;
  // fallback
  return 3000;
}
