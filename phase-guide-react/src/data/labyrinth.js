const labyrinthNodes = [
  {
    id: "gameplan",
    title: "🧩 The Trap",
    body:
      "RIDDLE: What runs forward into a closing cage? Luca's army.\n\nLUCA'S LIST (1490 pts):\n• Daemon Prince (Warlord) + Khârn\n• 10 Berzerkers in Rhino\n• 3 Eightbound + 3 Exalted Eightbound\n• Forgefiend + Helbrute (his only shooting)\n• Jakhals, Goremongers, Spawn (chaff)\n\nTHE PLAN: Let him push. Drop Terminators behind. Trap closed.",
    suspicions: ["Kill his Daemon Prince Turn 2—he's the Warlord.", "Forgefiend dies = his shooting dies.", "His chaff (Jakhals/Goremongers) just feeds Blessing of Khorne."],
    references: ["terminators", "magnus", "mission"],
  },
  {
    id: "terminators",
    title: "🔨 Two Hammers",
    body:
      "RIDDLE: What strikes from two sides at once? Your Terminators.\n\n10-MAN SQUAD: Target his Daemon Prince (220 pts, Warlord).\n5-MAN SQUAD: Target Khârn the Betrayer (85 pts).\n\nBoth characters dead Turn 2 = his army has no leaders. Berzerkers without Khârn are just angry dudes.",
    suspicions: ["Daemon Prince has Helm of Brazen Ire—PRIORITY TARGET.", "Khârn only has 5 wounds. Easy kill.", "Drop them far apart so Luca can't respond to both."],
    references: ["gameplan", "deepstrike"],
  },
  {
    id: "magnus",
    title: "🦅 The Flying Giant",
    body:
      "RIDDLE: What floats above while axes swing at nothing? Magnus.\n\nExalted Eightbound (his fastest) move 9\".\nMagnus flies 16\".\nStay 13\"+ away = NOTHING catches you.\n\nOnly his Forgefiend + Helbrute can hurt Magnus. Kill them and Magnus is invincible.",
    suspicions: ["Screamers can charge Forgefiend Turn 1 to tie it up.", "13 inches = the magic safety number.", "His Rhino is fast—watch it. Berzerkers inside!"],
    references: ["forgefiend", "gameplan"],
  },
  {
    id: "forgefiend",
    title: "🔫 His Only Guns",
    body:
      "RIDDLE: What dies and leaves an army blind? His Forgefiend.\n\nLUCA'S SHOOTING:\n• Forgefiend (150 pts) - 3 Ectoplasma cannons\n• Helbrute (120 pts) - Heavy flamer + hammer\n\nThat's IT. Kill both and his entire army has to WALK at you with no ranged threat. Magnus and Terminators freely shoot forever.",
    suspicions: ["Screamers can tie up Forgefiend Turn 1.", "Helbrute wants melee—don't let it get close.", "Once both die, the game is basically won."],
    references: ["magnus", "gameplan"],
  },
  {
    id: "eightbound",
    title: "😈 The Elite Killers",
    body:
      "RIDDLE: What hits like a truck but walks into fire? Eightbound.\n\nLuca has TWO squads:\n• 3 Eightbound (150 pts)\n• 3 Exalted Eightbound (160 pts) - THESE ARE SCARIER\n\nExalted move 9\", hit harder. Both units fight on death. Solution: Warpflamer Overwatch. 10 flamers = 80 auto-hits. 3-model units evaporate.",
    suspicions: ["They FIGHT when they die—never charge them!", "Overwatch is the answer.", "Exalted have better weapons—kill them first if possible."],
    references: ["warpflamers", "berzerkers"],
  },
  {
    id: "deepstrike",
    title: "⚡ The Surprise",
    body:
      "RIDDLE: What appears when the enemy looks away? Your Terminators.\n\nTURN 2 TARGETS:\n• 10 SOT → Daemon Prince (his Warlord, 220 pts)\n• 5 SOT → Khârn (his force multiplier, 85 pts)\n\nBoth die to focused fire. His army loses all leadership. His Rhino full of Berzerkers is stuck in midfield with no support.",
    suspicions: ["Drop 9\" away—measure twice!", "Kill characters FIRST, then shoot chaff.", "His Jakhals backfield guard is only 65 pts—sweep them."],
    references: ["terminators", "gameplan"],
  },
  {
    id: "warpflamers",
    title: "🔥 The Fire Trap",
    body:
      "RIDDLE: What wants to be charged? Your Warpflamer Rubrics.\n\nWhen Eightbound or Berzerkers charge:\n• Declare OVERWATCH (1 CP)\n• 10 Warpflamers fire D6+2 each = ~80 hits\n• S4 AP-1 D1, AUTO-HIT\n• His 3-model Eightbound units? Dead. His 10 Berzerkers? Halved.",
    suspicions: ["SAVE 1 CP for Overwatch—it's your trap.", "Position Rubrics where Luca WANTS to charge.", "All Is Dust gives +1 save vs D1 attacks (most of his stuff)."],
    references: ["eightbound", "berzerkers"],
  },
  {
    id: "berzerkers",
    title: "⚔️ The Rhino Bomb",
    body:
      "RIDDLE: What rides in a metal box full of death? 10 Berzerkers + Khârn.\n\nLuca's Rhino (85 pts) carries:\n• 10 Khorne Berzerkers (180 pts)\n• Probably Khârn the Betrayer (85 pts)\n\nIf the Rhino reaches you and disgorges, you're in trouble. Solution: Kill the Rhino early OR screen with Spawn/Screamers so they can't get close.",
    suspicions: ["Rhino moves 12\". Watch its advance!", "Kill the Rhino or lock it in combat.", "If they get out, Warpflamer Overwatch is your only hope."],
    references: ["warpflamers", "gameplan"],
  },
  {
    id: "mission",
    title: "🏆 How to Win",
    body:
      "RIDDLE: What wins without killing? Holding objectives.\n\nSITES OF POWER: Only CHARACTERS score bonus VP.\n• You have 6 characters (Magnus, 2 Sorcerers TDA, Infernal Master, Exalted Sorcerer on Disc, etc.)\n• Luca has 3 (Daemon Prince, Khârn, Slaughterbound)\n\nKill his characters Turn 2. Now you outscore him every turn just by existing.",
    suspicions: ["His characters are his weakness—kill them!", "Sticky objectives = grab and leave.", "Points win games, not kills."],
    references: ["gameplan", "terminators"],
  },
];

export default labyrinthNodes;
