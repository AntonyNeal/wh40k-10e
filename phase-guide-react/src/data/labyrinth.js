const labyrinthNodes = [
  {
    id: "gameplan",
    title: "The Pincer Protocol",
    body:
      "Turn 1: Castle. Rhino screens Magnus, chaff spreads wide. Let Luca push forward into no-man's land. Turn 2: Both Terminator bombs arrive BEHIND his army. He pushed forward—now his backline is dust. Turn 3+: He's trapped between Magnus ahead and Terminators behind. Nowhere to go. Score points, kite, win.",
    suspicions: ["Luca will realize too late.", "The trap only works if you're patient T1.", "Deep strike positioning is everything."],
    references: ["terminators", "magnus", "mission"],
  },
  {
    id: "terminators",
    title: "The Double Anvil",
    body:
      "Two Terminator units. Two Sorcerers. Two points of arrival. Luca cannot screen both flanks AND push forward. One will land clean. 10-man deletes whatever it touches. 5-man threatens the other side. He has to choose what dies.",
    suspicions: ["Split them to opposite corners.", "10-man hits his biggest threat.", "5-man grabs backfield objectives."],
    references: ["gameplan", "deepstrike"],
  },
  {
    id: "magnus",
    title: "The Unkillable Kite",
    body:
      "Magnus flies. Berzerkers don't. Stay 13\" away and they can NEVER charge you. 18\" smite range means you're always in range to hurt them. If Angron appears, just kite him too—he's fast but Magnus is faster with proper positioning.",
    suspicions: ["Never land Magnus within charge range.", "Use ruins and vertical movement.", "He's bait AND the hammer—depending on what Luca does."],
    references: ["angron", "gameplan"],
  },
  {
    id: "angron",
    title: "Dealing with Angron",
    body:
      "If Luca brings Angron (435pts), don't panic. Angron alone cannot win the game. Kite him with Magnus, let Terminators delete everything else. By Turn 4, Angron is standing alone on a battlefield of dust. He can kill one unit per turn—you have more units than turns.",
    suspicions: ["Angron returns when killed—don't waste resources overkilling.", "He's scary but he's only one model.", "Score while he chases."],
    references: ["magnus", "mission"],
  },
  {
    id: "deepstrike",
    title: "Deep Strike Doctrine",
    body:
      "Turn 2 is your moment. Luca's army pushed forward Turn 1—his backfield is exposed. Both SOT units arrive 9\" from his Jakhals, his characters, his home objective. Psychic powers + Inferno Boltguns delete whatever you target. Then you're in HIS deployment zone.",
    suspicions: ["Measure carefully—9\" is farther than it looks.", "Target characters first if possible.", "Don't scatter both units together—spread the threat."],
    references: ["terminators", "gameplan"],
  },
  {
    id: "warpflamers",
    title: "The Overwatch Trap",
    body:
      "Warpflamer Rubrics are BAIT. Let Luca charge them. In Overwatch, each model fires D6+2 auto-hitting S4 AP-1 shots. 10 models = 80+ auto-hitting shots on average. Berzerkers are T4 3+—half die before they swing. And they WANT to charge. Let them.",
    suspicions: ["Position them where Luca wants to be.", "Keep Infernal Master attached for rerolls.", "Save 1 CP for Overwatch stratagem."],
    references: ["berzerkers", "gameplan"],
  },
  {
    id: "berzerkers",
    title: "Know the Enemy: Berzerkers",
    body:
      "Berzerkers hit like trucks. S5 AP-1 chainaxes, +1 attack on charge. They FIGHT WHEN THEY DIE. But they're T4 3+—paper against massed fire. They're slow (6\" move). They have no shooting. Every Berzerker that dies to Inferno Boltguns is one less chainaxe in your face.",
    suspicions: ["Don't charge them—shoot them.", "If you must fight, use SOT (they can tank some damage).", "Fight-on-death triggers even at 0 wounds—be aware."],
    references: ["warpflamers", "deepstrike"],
  },
  {
    id: "mission",
    title: "Mission Selection",
    body:
      "Pick missions that reward holding objectives over killing. Thousand Sons hold points with sticky OC. World Eaters want to fight—make them fight for nothing. 'Sites of Power' (characters score) is ideal—you have 6 characters, Luca has 2-3. 'Purge the Foe' works if you're confident in kill output.",
    suspicions: ["Avoid kill-based secondaries if possible.", "Take objectives Luca abandons when he pushes forward.", "Sticky OC is your best friend."],
    references: ["gameplan", "angron"],
  },
];

export default labyrinthNodes;
