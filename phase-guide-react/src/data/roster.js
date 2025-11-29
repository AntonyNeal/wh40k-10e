const roster = {
  total: 2005,
  detachment: "Grand Coven",
  listName: "Psychic Supremacy",
  mission: "Mission K: Scorched Earth + Search And Destroy",
  opponent: "Eat Trash Beat Trash - World Eaters Berzerker Warband (1995 pts)",
  strategy: "GRAND COVEN: Turn 1 = DEVASTATING WOUNDS to delete his 2 Forgefiends! Turn 2 = +1 to Wound to assassinate his 4 characters! Disc Sorcerers scorch HIS objectives while you control yours!",
  
  opponentArmy: {
    name: "Eat Trash Beat Trash",
    points: 1995,
    detachment: "Berzerker Warband",
    characters: [
      { name: "Khârn the Betrayer", points: 100, role: "Warlord", threat: "Buff aura for Berzerkers. Kill Turn 2!" },
      { name: "World Eaters Daemon Prince", points: 220, role: "Monster", threat: "Helm of Brazen Ire (4++). Still dies to massed fire!" },
      { name: "World Eaters Lord on Juggernaut", points: 105, role: "Fast Character", threat: "8\" move + Favoured of Khorne. Flanks you!" },
      { name: "Slaughterbound", points: 110, role: "Character", threat: "Berzerker Glaive. Kill after main threats." },
    ],
    threats: [
      { name: "2x Forgefiend", points: 340, threat: "ONLY ranged threat! Kill Turn 1 with Devastating Wounds!" },
      { name: "Eightbound (3)", points: 135, threat: "Elite melee. Screen with Spawn, don't let reach Magnus!" },
      { name: "Exalted Eightbound (3)", points: 140, threat: "Even deadlier melee. Same solution—feed Spawn!" },
      { name: "2x Khorne Berserkers (10)", points: 360, threat: "20 angry marines. Without Khârn = less scary." },
      { name: "3x Chaos Spawn (2)", points: 270, threat: "6 Spawn screening his characters. Shoot through!" },
    ],
    cheapUnits: [
      { name: "2x Jakhals (2)", points: 130, threat: "Cheap objective grabbers. Delete them!" },
      { name: "World Eaters Rhino", points: 85, threat: "Berzerkers inside. Pop it or ignore it." },
    ],
  },

  detachmentRule: {
    name: "Kindred Sorcery",
    effects: [
      "PICK ONE PER TURN (start of any phase):",
      "IMBUED MANIFESTATION: +6\" range on all Psychic weapons this phase!",
      "PSYCHIC MAELSTROM: +1 to Wound rolls with Psychic weapons this phase!",
      "WRATH OF THE IMMATERIUM: Psychic weapons get Devastating Wounds this phase!",
    ],
    howToUse: "Turn 1: DEVASTATING WOUNDS vs Forgefiends! Turn 2: +1 to Wound for character assassination! Turn 3+: Whatever kills what's left!"
  },

  enhancements: [
    {
      name: "Umbralefic Crystal",
      cost: 20,
      bearer: "Sorcerer in Terminator Armour (with 10 SOT)",
      effect: "Once per battle, in Command phase, remove unit from battlefield → set up anywhere 9\"+ from enemies.",
      antiOpponent: "ESCAPE BUTTON: If Eightbound or Berzerkers catch your Terminators, vanish and redeploy!",
    },
  ],

  stratagems: [
    {
      name: "Kindred Sorcery (Detachment Ability)",
      cost: "FREE",
      when: "Start of any phase - pick ONE buff for ALL psychic weapons that phase",
      effect: "+6\" range, OR +1 to Wound, OR Devastating Wounds on all Psychic weapons.",
      antiOpponent: "TURN 1: Devastating Wounds deletes Forgefiends! TURN 2: +1 Wound kills characters!",
    },
    {
      name: "Sorcerous Might",
      cost: "1 CP",
      when: "Before a TSons Psyker shoots or fights",
      effect: "+1 Strength and +1 AP on psychic weapons for that unit.",
      antiOpponent: "ALPHA STRIKE: Use on 10 SOT when they drop. S5 AP-3 Inferno bolts vs Daemon Prince!",
    },
    {
      name: "Fire Overwatch",
      cost: "1 CP",
      when: "When opponent declares a charge",
      effect: "Shoot the charging unit. Warpflamers auto-hit!",
      antiOpponent: "THE TRAP: When Eightbound charge, Overwatch with Devastating Wounds = mortals on 6s!",
    },
    {
      name: "Ensorcelled Infusion",
      cost: "1 CP",
      when: "Your Shooting or Fight phase",
      effect: "Pick a TSons unit. Until end of phase, add 1 to Wound rolls with Psychic weapons.",
      antiOpponent: "STACK IT: Use with Psychic Maelstrom for +2 to Wound total vs characters!",
    },
  ],

  highlights: [
    {
      name: "Magnus the Red",
      points: 420,
      role: "Primarch & Vehicle Killer",
      notes: "FORGEFIEND ASSASSIN: D6+6 psychic shots. With Devastating Wounds Turn 1, 6s = mortals that bypass armor! He can one-shot a Forgefiend! Keep YOUR Spawn in front to screen him from Eightbound!",
    },
    {
      name: "Ahriman",
      points: 100,
      role: "Arch-Sorcerer",
      notes: "SCRYER OF FATES: Redeploy 3 units AFTER deployment—reposition away from his Eightbound! D6+1 Transmogrifying Blast shots. +1 to Ritual tests. Attach to 10 Rubrics for firebase!",
    },
    {
      name: "Sorcerer in TDA + 10 Scarab Occult Terminators",
      points: 460,
      role: "Character Assassins",
      notes: "THE HAMMER: Deep strike Turn 2 with PSYCHIC MAELSTROM. 20+ Inferno bolts with +1 to Wound = dead Daemon Prince! His Helm of Brazen Ire gives 4++ but not enough vs massed fire!",
    },
    {
      name: "Sorcerer in TDA + 5 Scarab Occult Terminators",
      points: 265,
      role: "Secondary Kill Squad",
      notes: "FLEXIBLE HUNTERS: Drop near Khârn OR Lord on Juggernaut. Both have ~5-6 wounds. 5 SOT with +1 Wound delete either easily!",
    },
    {
      name: "Exalted Sorcerer on Disc",
      points: 115,
      role: "Mobile Psyker",
      notes: "FLYING FIREPOWER: 12\" move + FLY. Inferno bolts benefit from Kindred Sorcery. Zoom into his territory to scorch objectives! Generates Cabal Points!",
    },
    {
      name: "Exalted Sorcerer on Disc",
      points: 115,
      role: "Mobile Psyker #2",
      notes: "CABAL POINTS: Each Psyker generates Cabal Points. Two flying Exalted = flexible positioning for Scorched Earth mission!",
    },
    {
      name: "10 Rubric Marines (Inferno boltguns)",
      points: 210,
      role: "Battleline + Ahriman's Unit",
      notes: "AHRIMAN'S BODYGUARD: 20 AP-2 Inferno bolts + Ahriman's psychic. With Devastating Wounds they threaten his Spawn screens! Sticky objective holders.",
    },
    {
      name: "5 Rubric Marines (Warpflamers) + Rhino",
      points: 180,
      role: "Overwatch Trap",
      notes: "EIGHTBOUND BAIT: Position where his elite melee wants to charge. 5 Warpflamers = 5×D6 auto-hits! Devastating Wounds Overwatch = mortals on 6s!",
    },
    {
      name: "Rhino #2",
      points: 75,
      role: "Mobile Transport + Screen",
      notes: "EXTRA MOBILITY: Use for 10 Rubrics OR as a screen/blocking unit. 12\" move can contest objectives or block charge lanes for his Eightbound!",
    },
    {
      name: "Chaos Spawn (2)",
      points: 65,
      role: "Magnus's Bodyguard",
      notes: "SCREEN THE PRIMARCH: His 6 Chaos Spawn + Eightbound want Magnus. Your Spawn die so Magnus survives to shoot! Their death = elite melee wasted!",
    },
  ],
};

export default roster;
