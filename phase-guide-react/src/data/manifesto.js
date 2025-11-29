const manifesto = {
  army: "Thousand Sons GRAND COVEN vs Eat Trash Beat Trash (World Eaters)",
  mission:
    "🎯 MISSION K: SCORCHED EARTH + SEARCH AND DESTROY. Diagonal deployment = maximum distance from his melee! Your Disc Sorcerers (12\" FLY) zoom into his territory to scorch objectives. He can't catch them!",
  riddle:
    "🔮 THE BIG RIDDLE: What has 340 pts of shooting and dies Turn 1? His 2 Forgefiends! DEVASTATING WOUNDS from Magnus = mortals bypass armor. Kill his guns, then assassinate his 4 characters Turn 2!",
  madness:
    "EAT TRASH BEAT TRASH: Daemon Prince (Warlord) + Khârn + Lord on Juggernaut + Slaughterbound. 2x Forgefiend (340 pts shooting!), Eightbound + Exalted Eightbound, 20 Berzerkers, 6 Chaos Spawn screens. NEW PLAN: Devastating Wounds Turn 1 kills Forgefiends. +1 Wound Turn 2 kills characters!",
  directive:
    "THE GRAND COVEN STRATEGY:\n• TURN 1: DEVASTATING WOUNDS! Magnus deletes Forgefiends. 5 Terminators drop to pressure!\n• TURN 2: PSYCHIC MAELSTROM (+1 Wound). Second 5 Terminators drop—DELETE Daemon Prince + Khârn!\n• TURN 3+: Disc Sorcerers scorch HIS objectives. Your Psykers hold YOURS. Headless army crumbles.",
  socialHack:
    "MIND GAME: Scorched Earth forces HIM to come to you. He has to stop you scorching his objectives—but his army is slow! Your Disc Sorcerers with 12\" FLY run circles around his Berzerkers.",

  grandCovenExplained: {
    title: "🔮 GRAND COVEN DETACHMENT",
    concept: "Grand Coven gives you FLEXIBILITY. At the start of any phase, pick ONE powerful buff for ALL your psychic weapons that phase. Different turns need different buffs!",
    
    rules: [
      {
        name: "Kindred Sorcery - Wrath of the Immaterium",
        effect: "Psychic weapons get Devastating Wounds this phase.",
        simple: "6s to wound = MORTAL WOUNDS! Turn 1: Delete his Forgefiends. Mortals bypass their armor!"
      },
      {
        name: "Kindred Sorcery - Psychic Maelstrom",
        effect: "+1 to Wound rolls with Psychic weapons this phase.",
        simple: "Wound T4 on 3s instead of 4s! Turn 2: Terminators delete characters with +1 to Wound!"
      },
      {
        name: "Kindred Sorcery - Imbued Manifestation",
        effect: "+6\" range on all Psychic weapons this phase.",
        simple: "24\" Inferno bolts become 30\"! Use if you need distance to stay safe."
      }
    ],

    whenToUse: {
      title: "Which Buff When?",
      tips: [
        "DEVASTATING WOUNDS (Wrath): TURN 1 vs Forgefiends! Magnus can one-shot them!",
        "+1 TO WOUND (Psychic Maelstrom): TURN 2 when Terminators drop. Delete characters!",
        "+6\" RANGE (Imbued Manifestation): Use if you need safety from charges."
      ]
    },

    keyEnhancements: [
      { name: "Umbralefic Crystal (20 pts)", bearer: "Sorcerer in TDA with 10 SOT", effect: "Once per battle: Remove unit, redeploy anywhere 9\"+ from enemies. ESCAPE BUTTON if Eightbound catch you!" },
      { name: "Athenaean Scrolls (15 pts)", bearer: "Exalted Sorcerer on Disc", effect: "+1 to Wound ALWAYS ON. Stacks with Psychic Maelstrom for +2 to Wound! Perfect for scorching objectives!" }
    ],

    positioning: {
      title: "Search And Destroy Deployment (Diagonal)",
      tips: [
        "MAGNUS CENTER-BACK: Maximum range from his melee. D6+6 shots with Devastating Wounds = dead Forgefiend!",
        "AHRIMAN + 10 RUBRICS: Your corner, in cover. They hold YOUR objectives.",
        "TWO EXALTED ON DISCS: Ready to zoom across and scorch HIS objectives!",
        "CHAOS SPAWN: Front screen. They die so Magnus lives.",
        "5 TERMINATORS: Drop Turn 1 near objectives to apply immediate pressure!",
        "5 TERMINATORS: Drop Turn 2 with +1 Wound active to assassinate characters!"
      ]
    }
  },

  psychicGunlineExplained: {
    title: "🔫 THE PSYCHIC GUNLINE",
    concept: "Your army SHOOTS. You don't want melee—you want to delete units before they reach you. Scorched Earth rewards your mobile Disc Sorcerers zooming into his territory!",
    
    math: {
      title: "The Math That Kills Eat Trash",
      trades: [
        { his: "2x Forgefiend (340 pts)", result: "Magnus with Devastating Wounds Turn 1 = at least 1 DEAD. His shooting collapses." },
        { his: "Daemon Prince (220 pts)", result: "10 SOT with +1 to Wound = DEAD. Helm of Brazen Ire doesn't save him!" },
        { his: "Khârn (100 pts)", result: "5 SOT with +1 to Wound = DEAD. His Berzerkers lose their buff!" },
        { his: "Lord on Juggernaut (105 pts)", result: "8\" move threatens your flanks. Terminators delete him if he overextends." },
        { his: "Eightbound charge Spawn", kills: "2 Chaos Spawn (65 pts)", you: "His elite killers wasted on chaff." }
      ],
      summary: "Turn 1: Kill Forgefiends (Devastating Wounds). Turn 2: Kill characters (+1 Wound). Turn 3+: Scorch and score!"
    },

    killPriority: {
      title: "🎯 Kill Order",
      explanation: "His army has 4 characters and 2 Forgefiends. Kill the guns Turn 1, then assassinate characters!",
      targets: [
        { name: "1. Forgefiends (340 pts)", why: "His ONLY ranged threat! Devastating Wounds from Magnus deletes them!" },
        { name: "2. Daemon Prince (Warlord)", why: "220 pts, Helm of Brazen Ire (4++). Still dies to massed Terminator fire!" },
        { name: "3. Khârn", why: "100 pts, makes Berzerkers LETHAL. Without him, they're just angry marines." },
        { name: "4. Lord on Juggernaut", why: "105 pts, 8\" move flanker. Delete if he threatens your backline." }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // SCORING EXPLAINED FOR LOUIS - MISSION K: SCORCHED EARTH
  // ═══════════════════════════════════════════════════════════════
  scoringBasics: {
    title: "Mission K: Scorched Earth + Search And Destroy",
    intro:
      "The game is a RACE TO POINTS. Diagonal deployment (Search And Destroy) gives you MAXIMUM DISTANCE from his melee! Scorched Earth rewards your mobile Disc Sorcerers for zooming into his territory!",

    primary: {
      name: "Scorched Earth = Control + Destroy",
      explanation:
        "You score VP for holding objectives in YOUR territory, AND for 'scorching' (destroying) objectives in HIS territory. Your Disc Sorcerers are PERFECT for this—12\" FLY to reach his objectives!",
      
      howToHold: {
        title: "How SCORCHED EARTH Works",
        steps: [
          "Hold objectives in YOUR deployment zone = score normally",
          "To SCORCH an enemy objective: Control it at end of your turn, then remove it!",
          "Scorched objectives = bonus VP AND he can't score from them anymore!",
          "Your Disc Sorcerers (12\" FLY) zoom into his territory to scorch",
          "His slow Berzerkers can't catch them—they're stuck!"
        ],
        sticky: "STICKY OBJECTIVES: Once you control an objective, you keep controlling it even if you move away—UNTIL the enemy moves models onto it."
      },

      points: [
        { scenario: "Hold 1+ objectives in your territory", vp: "2-5 VP" },
        { scenario: "Hold objectives in no man's land", vp: "2-3 VP" },
        { scenario: "SCORCH an enemy objective", vp: "BONUS VP + deny him points!" },
        { scenario: "Hold more than opponent", vp: "+1 VP bonus" }
      ],
      
      maxPerTurn: "Your Disc Sorcerers scorch his objectives while your Psykers hold yours!",
      
      sitesOfPower: {
        title: "🎯 Scorched Earth Strategy",
        explanation: "Search And Destroy deployment means diagonal corners. You deploy FAR from his melee. He has to cross the whole board while you shoot!",
        bonus: "Disc Sorcerers scorch HIS objectives = he loses scoring options!",
        whyGood: "You have 12\" FLY sorcerers. His fastest unit is Lord on Juggernaut (8\" move). You run circles around him!"
      }
    },

    secondary: {
      name: "Secondary Objectives = Your Secret Missions",
      explanation:
        "BEFORE the game starts, you and Luca each secretly pick 2 secondary objectives. These give bonus VP throughout the game for doing specific things. Choose wisely—you're stuck with them!",
      
      howItWorks: [
        "Before deployment, secretly write down your 2 secondary choices.",
        "Reveal them to each other after deployment.",
        "You score these same 2 secondaries every turn they apply.",
        "Pick secondaries that match YOUR army's strengths!"
      ],

      goodForYou: [
        {
          name: "Engage on All Fronts",
          vp: "2-4 VP/turn",
          how: "Have units in 3+ table quarters at end of your turn = 2 VP. In all 4 quarters = 4 VP. The board is split into 4 squares—spread out!",
          tip: "PERFECT for you. Disc Sorcerers zoom to opposite corners. Terminators drop in his zone. Magnus holds center. Easy 4 VP every turn!"
        },
        {
          name: "Behind Enemy Lines",
          vp: "2-4 VP/turn",
          how: "Have 1+ units wholly within enemy deployment zone = 2 VP. Have 2+ units there = 4 VP.",
          tip: "Disc Sorcerers and Terminators are built for this! Score this every turn from Turn 2 onward. Scorch his objectives while you're there!"
        }
      ],
      
      yourPicks: {
        title: "🎯 PICK THESE TWO",
        primary: "Engage on All Fronts",
        secondary: "Behind Enemy Lines",
        reasoning: "Both reward MOBILITY—exactly what your Disc Sorcerers do! They zoom into his territory, scorch objectives, AND score secondaries. Luca's army is one slow blob."
      },

      warning: "You're LOCKED IN to your choices. Avoid anything that requires killing—that's Luca's game, not yours!"
    },

    turnByTurn: {
      title: "📊 Your VP Total Each Turn",
      turns: [
        { turn: 1, total: 0, note: "No scoring Turn 1. Kill Forgefiends with Dev Wounds! 5 SOT drop to pressure!" },
        { turn: 2, total: 10, note: "Second 5 SOT drop with +1 Wound. Delete characters! Disc Sorcerers zoom forward." },
        { turn: 3, total: 22, note: "Start scorching HIS objectives. He's losing options!" },
        { turn: 4, total: 34, note: "His headless army flails. You control the board." },
        { turn: 5, total: 45, note: "Scorched Earth victory. His objectives are gone. GG Luca!" }
      ]
    },

    goldenRules: [
      "🔥 TURN 1: DEVASTATING WOUNDS vs Forgefiends! Kill his shooting!",
      "🎯 TURN 2: +1 WOUND! Terminators delete Daemon Prince + Khârn!",
      "🛸 DISC SORCERERS: Zoom into his territory. Scorch objectives!",
      "🐙 CHAOS SPAWN: Die gloriously. Screen Magnus. Waste his melee.",
      "🏆 SCORCHED EARTH: He can't score from destroyed objectives!"
    ]
  },
};

export default manifesto;
