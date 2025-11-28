const phases = [
  {
    id: "command",
    label: "Phase 01",
    buttonLabel: "1. Command",
    title: "Command Phase",
    description:
      "🧩 RIDDLE: What has no magic but fears the wise? Luca's army. You have psychic powers, he has none. This phase is free points for you.",
    points: [
      "YOUR CABAL POINTS: You have 12 total (Magnus 4 + Sorcerer TDA 2 + Sorcerer TDA 2 + Infernal Master 1 + Exalted Sorcerer 3).",
      "Is it Turn 2 or later? Your Terminators can appear from reserves!",
      "Are you on an objective? Score it now.",
    ],
    rituals: [],
    tip: "🎯 REMEMBER: Save your Cabal points for Shooting phase rituals!",
  },
  {
    id: "movement",
    label: "Phase 02",
    buttonLabel: "2. Movement",
    title: "Movement Phase",
    description:
      "🧩 RIDDLE: What flies high while axes swing at air? Magnus. He can fly over everything. Berzerkers can only walk 6 inches. Stay far away!",
    points: [
      "Magnus: Stay MORE than 12 inches from enemies. They can't charge you!",
      "Screamers and Spawn: Put them in front as a wall. If Luca hits them, he's not hitting Magnus.",
      "Rhino: Drive it forward to block line of sight to your good stuff.",
    ],
    rituals: [],
    tip: "🎯 REMEMBER: 13 inches = safety. Berzerkers charge 12 inches max.",
  },
  {
    id: "shooting",
    label: "Phase 03",
    buttonLabel: "3. Shooting",
    title: "Shooting Phase",
    description:
      "🧩 RIDDLE: What bleeds from afar but never bleeds back? Luca's army. He has almost NO shooting. You have ALL the shooting. This is YOUR phase.",
    points: [
      "Kill his characters first—they make his army stronger.",
      "Kill Berzerkers second—every dead one is one less axe.",
      "Warpflamers can shoot AND still Overwatch later! Burn them twice!",
    ],
    ritualsIntro: "At the START of your Shooting phase, your Psykers can attempt Rituals. Each Psyker can only attempt ONE ritual per turn, and each ritual can only be attempted ONCE per turn across your whole army.",
    ritualsHowTo: [
      "1. Pick a Psyker who hasn't done a ritual this turn",
      "2. Pick a ritual no one else has done this turn",
      "3. Roll 2D6 (this is your Psychic Test)",
      "4. OPTIONAL: Spend Cabal Points to add to your roll (1 point = +1 to roll)",
      "5. If your total equals or beats the ritual's cost, it works!",
      "⚠️ WARNING: If you roll doubles or triples, that Psyker's unit takes D3 mortal wounds!"
    ],
    rituals: [
      { name: "Temporal Surge", cost: 6, when: "To reposition a unit before shooting", effect: "Pick a friendly unit within 24\". They move D6\" (can't charge after). Score 10+? Move 6\" guaranteed!" },
      { name: "Destiny's Ruin", cost: 5, when: "Before shooting your priority target", effect: "Pick an enemy within 24\". Re-roll 1s to hit against them. Score 10+? Re-roll ALL misses!" },
      { name: "Doombolt", cost: 7, when: "To snipe characters or finish wounded units", effect: "Pick an enemy within 24\". They take D3 mortal wounds (no saves!). Score 11+? D3+3 instead!" },
      { name: "Twist of Fate", cost: 9, when: "Against Eightbound or vehicles", effect: "Pick an enemy within 24\". +1 AP against them (AP-1 becomes AP-2). Score 12+? +2 AP!" },
    ],
    tip: "🎯 TIP: With 12 Cabal Points, you can easily boost a 2D6 roll. Average roll is 7, so spend 2 points to guarantee Twist of Fate (9)!",
  },
  {
    id: "charge",
    label: "Phase 04",
    buttonLabel: "4. Charge",
    title: "Charge Phase",
    description:
      "🧩 RIDDLE: What wants to run INTO the fire? Berzerkers. LET THEM. Your Warpflamers auto-hit on Overwatch. He runs in, he burns.",
    points: [
      "DO NOT CHARGE. Let HIM charge YOU.",
      "When he declares a charge, use Overwatch with Warpflamers.",
      "Each flamer shoots D6+2 auto-hitting shots. 10 flamers = 80+ hits. He dies before reaching you.",
    ],
    rituals: [],
    tip: "🎯 REMEMBER: You have 1 CP saved for Overwatch, right? RIGHT?",
  },
  {
    id: "fight",
    label: "Phase 05",
    buttonLabel: "5. Fight",
    title: "Fight Phase",
    description:
      "🧩 RIDDLE: What wins by not fighting? You. If you're in combat with Berzerkers, something went wrong. They fight better than you. Avoid this.",
    points: [
      "If Magnus is stuck in combat, Fall Back next turn. He can still cast spells after falling back!",
      "Terminators CAN fight, but only against stuff that's already hurt.",
      "BEWARE: Berzerkers fight when they die. Even dead ones swing back!",
    ],
    rituals: [],
    tip: "🎯 REMEMBER: You win on points, not kills. Stay on objectives.",
  },
  {
    id: "battleshock",
    label: "Phase 06",
    buttonLabel: "6. Battleshock",
    title: "Battleshock Phase",
    description:
      "🧩 RIDDLE: What holds ground even when gone? Rubrics. Your Rubrics have STICKY objectives. Once you capture a point, it stays yours even if you walk away.",
    points: [
      "Check your score. Are you ahead? GOOD. Keep running away.",
      "Rubrics on objectives = those points are YOURS.",
      "Plan next turn. Where will Terminators drop? What will Magnus shoot?",
    ],
    rituals: [],
    tip: "🎯 REMEMBER: If you're ahead, play keep-away. Make Luca chase you.",
  },
];

export default phases;
