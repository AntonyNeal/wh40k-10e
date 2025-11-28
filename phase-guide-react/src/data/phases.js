const phases = [
  {
    id: "command",
    label: "Phase 01",
    buttonLabel: "Command",
    title: "Command Phase",
    description:
      "🧩 RIDDLE: What has no magic but fears the wise? Luca's army. You have psychic powers, he has none. This phase is free points for you.",
    points: [
      "Count your Cabal points: Magnus gives 4, each Sorcerer gives 2, Infernal Master gives 1.",
      "Is it Turn 2 or later? Your Terminators can appear from reserves!",
      "Are you on an objective? Score it now.",
    ],
    tip: "🎯 REMEMBER: Every turn he can't hit you = you're winning.",
  },
  {
    id: "movement",
    label: "Phase 02",
    buttonLabel: "Movement",
    title: "Movement Phase",
    description:
      "🧩 RIDDLE: What flies high while axes swing at air? Magnus. He can fly over everything. Berzerkers can only walk 6 inches. Stay far away!",
    points: [
      "Magnus: Stay MORE than 12 inches from enemies. They can't charge you!",
      "Screamers and Spawn: Put them in front as a wall. If Luca hits them, he's not hitting Magnus.",
      "Rhino: Drive it forward to block line of sight to your good stuff.",
    ],
    tip: "🎯 REMEMBER: 13 inches = safety. Berzerkers charge 12 inches max.",
  },
  {
    id: "shooting",
    label: "Phase 03",
    buttonLabel: "Shooting",
    title: "Shooting Phase",
    description:
      "🧩 RIDDLE: What bleeds from afar but never bleeds back? Luca's army. He has almost NO shooting. You have ALL the shooting. This is YOUR phase.",
    points: [
      "Kill his characters first—they make his army stronger.",
      "Kill Berzerkers second—every dead one is one less axe.",
      "DON'T use Warpflamers now. SAVE them for Overwatch when he charges!",
    ],
    tip: "🎯 REMEMBER: His army gets smaller. Yours doesn't. Shoot everything.",
  },
  {
    id: "charge",
    label: "Phase 04",
    buttonLabel: "Charge",
    title: "Charge Phase",
    description:
      "🧩 RIDDLE: What wants to run INTO the fire? Berzerkers. LET THEM. Your Warpflamers auto-hit on Overwatch. He runs in, he burns.",
    points: [
      "DO NOT CHARGE. Let HIM charge YOU.",
      "When he declares a charge, use Overwatch with Warpflamers.",
      "Each flamer shoots D6+2 auto-hitting shots. 10 flamers = 80+ hits. He dies before reaching you.",
    ],
    tip: "🎯 REMEMBER: You have 1 CP saved for Overwatch, right? RIGHT?",
  },
  {
    id: "fight",
    label: "Phase 05",
    buttonLabel: "Fight",
    title: "Fight Phase",
    description:
      "🧩 RIDDLE: What wins by not fighting? You. If you're in combat with Berzerkers, something went wrong. They fight better than you. Avoid this.",
    points: [
      "If Magnus is stuck in combat, Fall Back next turn. He can still cast spells after falling back!",
      "Terminators CAN fight, but only against stuff that's already hurt.",
      "BEWARE: Berzerkers fight when they die. Even dead ones swing back!",
    ],
    tip: "🎯 REMEMBER: You win on points, not kills. Stay on objectives.",
  },
  {
    id: "battleshock",
    label: "Phase 06",
    buttonLabel: "Battleshock",
    title: "Battleshock Phase",
    description:
      "🧩 RIDDLE: What holds ground even when gone? Rubrics. Your Rubrics have STICKY objectives. Once you capture a point, it stays yours even if you walk away.",
    points: [
      "Check your score. Are you ahead? GOOD. Keep running away.",
      "Rubrics on objectives = those points are YOURS.",
      "Plan next turn. Where will Terminators drop? What will Magnus shoot?",
    ],
    tip: "🎯 REMEMBER: If you're ahead, play keep-away. Make Luca chase you.",
  },
];

export default phases;
