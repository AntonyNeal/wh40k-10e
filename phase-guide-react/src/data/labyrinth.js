const labyrinthNodes = [
  {
    id: "gameplan",
    title: "🔮 Grand Coven",
    body:
      "RIDDLE: What gets stronger every phase? Your Grand Coven army.\n\nKINDRED SORCERY:\n• DEVASTATING WOUNDS (Turn 1 vs Forgefiends!)\n• +1 TO WOUND (Turn 2, kill characters!)\n• +6\" RANGE (if you need safe shooting)\n\nVS EAT TRASH: Kill his 2 Forgefiends Turn 1, then assassinate characters Turn 2!",
    suspicions: ["Devastating Wounds Turn 1 vs Forgefiends!", "+1 to Wound Turn 2 when Terminators drop!", "He has 4 characters—hunt them all!"],
    references: ["terminators", "magnus", "forgefiend"],
  },
  {
    id: "ahriman",
    title: "📜 Ahriman",
    body:
      "RIDDLE: What redeploys 3 units and boosts rituals? Ahriman.\n\nSCRYER OF FATES: After deployment, redeploy up to 3 units! Reposition away from his Eightbound or toward his Forgefiends.\n\nARCH-SORCERER: +1 to Psychic tests when Channeling the Warp. Your rituals succeed more often!\n\nAttach him to 10 Rubrics for a powerful firebase!",
    suspicions: ["Scryer of Fates: Redeploy 3 units after deployment!", "Arch-Sorcerer: +1 to Ritual tests!", "He's BS2+ so he rarely misses."],
    references: ["gameplan", "magnus"],
  },
  {
    id: "terminators",
    title: "🔨 The Hammer",
    body:
      "RIDDLE: What strikes from behind with +1 to wound? Your Terminators.\n\nTURN 2:\n• 10 SOT → DELETE Daemon Prince (wound on 4s instead of 5s!)\n• 5 SOT → DELETE Khârn OR Lord on Juggernaut!\n\nHis army has 4 characters. Kill the Prince (Warlord) and Khârn first. Juggerlord + Slaughterbound die later!",
    suspicions: ["Pick Psychic Maelstrom (+1 Wound) when they drop.", "10 SOT have 20+ Inferno bolts = dead characters.", "Umbralefic Crystal = escape button!"],
    references: ["gameplan", "deepstrike", "enhancements"],
  },
  {
    id: "magnus",
    title: "🦅 The Crimson King",
    body:
      "RIDDLE: What deletes Forgefiends Turn 1? Magnus with Devastating Wounds.\n\nMAGNUS IS YOUR VEHICLE KILLER:\n• D6+6 Psychic shots per turn\n• With DEVASTATING WOUNDS, 6s to wound = mortals bypass armor!\n• He can one-shot a Forgefiend Turn 1!\n\nTurn 1 priority: Kill at least ONE Forgefiend. His shooting threat vanishes!",
    suspicions: ["Devastating Wounds vs Forgefiends Turn 1!", "His melee is BRUTAL with +1 to Wound!", "Keep YOUR Spawn in front to screen him."],
    references: ["gameplan", "forgefiend"],
  },
  {
    id: "forgefiend",
    title: "🔫 His Big Guns",
    body:
      "RIDDLE: What dies to Magnus with one buff? BOTH Forgefiends.\n\nEAT TRASH'S SHOOTING:\n• TWO Forgefiends (340 pts total!) - 6 Ectoplasma cannons\n• This is his ONLY real ranged threat!\n\nTURN 1: Use DEVASTATING WOUNDS. Magnus shoots one Forgefiend. Your Terminators or Ahriman finish the other. His shooting disappears!",
    suspicions: ["Devastating Wounds bypasses armor saves!", "Magnus can one-shot a Forgefiend.", "Kill both Turn 1-2 and he has no guns!"],
    references: ["magnus", "gameplan"],
  },
  {
    id: "eightbound",
    title: "😈 The Elite Killers",
    body:
      "RIDDLE: What wastes time on Chaos Spawn? Eightbound.\n\n6 ELITE MELEE KILLERS:\n• 3 Eightbound (135 pts)\n• 3 Exalted Eightbound (140 pts)\n\nDon't let them reach Magnus or Terminators! Screen with YOUR Spawn. Let his elites waste attacks on cheap bodies.",
    suspicions: ["They FIGHT when they die—never charge them!", "Overwatch with Devastating Wounds active!", "Your Spawn die so Psykers survive."],
    references: ["flamers", "terminators", "enhancements"],
  },
  {
    id: "deepstrike",
    title: "⚡ Character Assassination",
    body:
      "RIDDLE: What appears with +1 to wound and deletes characters? BOTH Terminator squads.\n\nTURN 2:\n• Declare PSYCHIC MAELSTROM (+1 to Wound)\n• 10 SOT drop → DELETE Daemon Prince (Helm of Brazen Ire doesn't save him!)\n• 5 SOT drop → DELETE Khârn OR Lord on Juggernaut\n\n4 characters total. Kill 2 per turn. Army crumbles!",
    suspicions: ["Drop 9\" away—measure twice!", "Psychic Maelstrom makes your shooting brutal.", "Kill order: Daemon Prince → Khârn → Juggerlord → Slaughterbound!"],
    references: ["terminators", "gameplan", "enhancements"],
  },
  {
    id: "flamers",
    title: "🔥 The Fire Trap",
    body:
      "RIDDLE: What punishes every charge with mortals? Warpflamers with Devastating Wounds.\n\nPosition 5 Rubrics with Warpflamers where his Eightbound want to charge.\nWhen Eightbound charge:\n• Pick DEVASTATING WOUNDS at start of Charge phase\n• Declare OVERWATCH (1 CP)\n• 5 Warpflamers × D6 = ~17.5 auto-hits\n• 6s to wound = MORTAL WOUNDS!",
    suspicions: ["SAVE 1 CP for Overwatch!", "Pick Devastating Wounds before his Charge phase!", "Position them to cover charge lanes."],
    references: ["eightbound", "gameplan"],
  },
  {
    id: "enhancements",
    title: "💎 Your Enhancement",
    body:
      "YOUR ENHANCEMENT (20 pts):\n\n• UMBRALEFIC CRYSTAL (20 pts) - Sorcerer in TDA with 10 SOT\n  Once per battle: Remove unit, redeploy 9\"+ from enemies.\n  USE WHEN: His Eightbound or Berzerkers catch your Terminators!\n\nHIS ENHANCEMENT:\n• Helm of Brazen Ire on Daemon Prince - 4++ invuln. Still dies to massed Terminator fire!",
    suspicions: ["Umbralefic Crystal = ESCAPE for 460+ pts of Terminators!", "His Helm of Brazen Ire gives 4++ but not enough!", "Use +1 Wound to punch through his saves!"],
    references: ["terminators", "gameplan"],
  },
  {
    id: "juggerlord",
    title: "🐂 Lord on Juggernaut",
    body:
      "RIDDLE: What has 8\" move and Favoured of Khorne? The Lord on Juggernaut.\n\nTHE FLANKER:\n• 8\" move + charge range = threatens your flanks\n• Favoured of Khorne enhancement = Fight on death!\n• He's fast enough to reach your backline!\n\nSOLUTION: 5 SOT with +1 Wound delete him. He only has 6 wounds. Don't let him reach Magnus!",
    suspicions: ["8\" move makes him faster than Berzerkers!", "Favoured of Khorne = Fights when killed!", "5 SOT can kill him easily with +1 Wound!"],
    references: ["terminators", "deepstrike"],
  },
  {
    id: "mission",
    title: "🏆 How to Win",
    body:
      "RIDDLE: What wins by shooting and scoring? You.\n\nVS EAT TRASH BEAT TRASH:\n• Turn 1: DEVASTATING WOUNDS. Magnus kills Forgefiend. Shoot the other!\n• Turn 2: PSYCHIC MAELSTROM. Terminators delete Daemon Prince + Khârn.\n• Turn 3+: His headless army flails. Kill Juggerlord + Slaughterbound.\n\nHis 2 Forgefiends are his only guns. Delete them = he walks at you helplessly!",
    suspicions: ["Kill Forgefiends Turn 1—no more shooting threat!", "Kill Prince + Khârn Turn 2—his army loses buffs!", "His Jakhals are cheap—don't let them steal objectives!"],
    references: ["gameplan", "forgefiend", "terminators"],
  },
];

export default labyrinthNodes;
