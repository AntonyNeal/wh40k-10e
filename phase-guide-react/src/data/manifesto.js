const manifesto = {
  army: "Thousand Sons vs World Eaters",
  mission:
    "TELL LUCA: \"You pick the mission deck—Leviathan or Pariah Nexus.\" Then YOU pick Sites of Power. Only CHARACTERS score bonus VP. You have 6 characters; Luca has 3 (Daemon Prince, Khârn, Slaughterbound). Kill his characters Turn 2 and outscore him forever.",
  riddle:
    "🧩 THE BIG RIDDLE: What runs forward but catches nothing? What swings axes at empty air? ANSWER: Luca's 1490 pts of angry melee—when you stay far away and shoot.",
  madness:
    "LUCA'S LIST: Daemon Prince (Warlord, 220 pts), Khârn (85 pts), 10 Berzerkers in Rhino, 3 Eightbound, 3 Exalted Eightbound, Forgefiend + Helbrute (his ONLY shooting), Jakhals/Goremongers/Spawn (chaff). Kill the Prince + Khârn Turn 2. Kill Forgefiend. His army becomes a headless melee blob you kite forever.",
  directive:
    "THE PLAN:\n• TURN 1: Screen Magnus. Watch his Rhino. Maybe Screamers charge Forgefiend.\n• TURN 2: Drop Terminators. Kill Daemon Prince (Warlord) + Khârn.\n• TURN 3+: His characters dead. Kite, score, win.",
  socialHack:
    "MIND GAME: Compliment his Eightbound models before the game. When your Terminators delete his Daemon Prince and Khârn Turn 2, his face will be priceless. His 220pt Warlord dies to focused SOT fire.",

  // ═══════════════════════════════════════════════════════════════
  // SCORING EXPLAINED FOR LOUIS (who's new to 40k)
  // ═══════════════════════════════════════════════════════════════
  scoringBasics: {
    title: "How You Win (Victory Points)",
    intro:
      "The game is a RACE TO 50 POINTS. First to 50 wins. If nobody hits 50 after 5 turns, highest score wins. IMPORTANT: Killing things gives ZERO points—only OBJECTIVES give points!",

    primary: {
      name: "Primary Mission = The Big Points",
      explanation:
        "At the END of YOUR turn (starting Turn 2), you score points for HOLDING objectives—those 40mm round markers on the battlefield. There are usually 5-6 objectives placed around the board.",
      
      howToHold: {
        title: "How to HOLD an Objective",
        steps: [
          "Look at the objective marker (40mm round base)",
          "Count YOUR models within 3 inches of its center",
          "Count ENEMY models within 3 inches of its center", 
          "If you have MORE models → you control it",
          "If it's TIED → nobody controls it",
          "Example: You have 2 Rubrics within 3\". Luca has 1 Berzerker. YOU control it (2 beats 1)."
        ],
        sticky: "STICKY OBJECTIVES: Once you control an objective, you keep controlling it even if you move away—UNTIL the enemy moves models onto it. So you can grab an objective, then move away to shoot!"
      },

      points: [
        { scenario: "You hold 1 objective", vp: "2 VP" },
        { scenario: "You hold 2 objectives", vp: "3 VP" },
        { scenario: "You hold 3 or more objectives", vp: "5 VP" },
        { scenario: "You hold MORE objectives than Luca", vp: "+1 VP bonus" }
      ],
      
      maxPerTurn: "Maximum you can score per turn: 5 + 1 = 6 VP from primary",
      
      sitesOfPower: {
        title: "🎯 Sites of Power (YOUR Mission)",
        explanation: "This mission gives BONUS points if a CHARACTER holds the objective. Not just any unit—a CHARACTER specifically.",
        bonus: "+1 VP per objective held by a CHARACTER",
        whyGood: "You have 6 characters (Magnus, 2 Sorcerers in TDA, Infernal Master, Exalted Sorcerer, and Daemon Prince if you use him). Luca has maybe 2-3. This means you can score 8+ VP per turn while he scores 5-6."
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
        "Pick secondaries that match YOUR army's strengths, not Luca's."
      ],

      goodForYou: [
        {
          name: "Engage on All Fronts",
          vp: "2-4 VP/turn",
          how: "Have units in 3+ table quarters at end of your turn = 2 VP. In all 4 quarters = 4 VP. The board is split into 4 squares—spread out!",
          tip: "PERFECT for you. Teleporting Terminators, fast Screamers, Spawn, Rhinos—you can easily be in 3-4 quarters every turn. Luca's slow Berzerkers can't stop you."
        },
        {
          name: "Behind Enemy Lines",
          vp: "4 VP/turn",
          how: "Have 1+ units wholly within the enemy deployment zone = 2 VP. Have 2+ units there = 4 VP.",
          tip: "Screamers (14\" move) and Spawn (10\" move) are built for this. Teleport Terminators into his backfield Turn 2. Score this every turn from Turn 2 onward."
        }
      ],
      
      yourPicks: {
        title: "🎯 LOUIS: PICK THESE TWO",
        primary: "Engage on All Fronts",
        secondary: "Behind Enemy Lines",
        reasoning: "Both reward MOVING and SPREADING OUT—exactly what you're doing anyway. You don't need to kill ANYTHING to max these. Luca's army is slow and clumped up—he literally cannot stop you from scoring."
      },

      warning: "You're LOCKED IN to your choices. Avoid anything that requires killing—that's Luca's game, not yours!"
    },

    turnByTurn: {
      title: "📊 Your VP Total Each Turn",
      turns: [
        { turn: 1, total: 0, note: "No scoring Turn 1. Just move up." },
        { turn: 2, total: 8, note: "Drop Terminators. Grab objectives." },
        { turn: 3, total: 18, note: "You're ahead. Keep scoring." },
        { turn: 4, total: 28, note: "Stay ahead. Let him chase." },
        { turn: 5, total: 40, note: "You win. GG." }
      ]
    },

    goldenRules: [
      "🏆 KILLING = 0 POINTS. Holding objectives = ALL points.",
      "📍 You don't need to kill Berzerkers—just stay 13\" away and score.",
      "🔄 Objectives are STICKY—grab them, then move away to shoot.",
      "🎭 Let Luca kill your stuff. YOU score while HE wastes time fighting.",
      "⏰ The game ends Turn 5. If you're ahead on points, you WIN."
    ]
  },
};

export default manifesto;
