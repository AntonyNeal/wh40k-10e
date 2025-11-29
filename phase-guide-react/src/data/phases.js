const phases = [
  {
    id: "command",
    label: "Phase 01",
    buttonLabel: "1. Command",
    title: "Command Phase",
    description:
      "🔮 GRAND COVEN: Pick your Kindred Sorcery buff! Turn 1: DEVASTATING WOUNDS to kill Forgefiends! Turn 2: +1 to Wound to delete characters! With 6 Psykers generating Cabal Points, you dominate the psychic game!",
    points: [
      "KINDRED SORCERY: Pick ONE buff at the start of any phase—time it perfectly!",
      "Turn 1: DEVASTATING WOUNDS vs his 2 Forgefiends. 5 SOT drop to pressure + objectives!",
      "Turn 2: PSYCHIC MAELSTROM (+1 to Wound). Second 5 SOT drop—assassinate characters!",
    ],
    stratagems: [
      { name: "Umbralefic Crystal", cost: "ENHANCEMENT", when: "Command Phase", effect: "Remove your 10 SOT + Sorcerer from the battlefield and redeploy 9\"+ from enemies. ESCAPE if Eightbound caught you last turn!" },
    ],
    rituals: [],
    tip: "🎯 VS EAT TRASH: He has 4 characters (Prince, Khârn, Juggerlord, Slaughterbound). Kill the Prince first—he's the Warlord!",
  },
  {
    id: "movement",
    label: "Phase 02",
    buttonLabel: "2. Movement",
    title: "Movement Phase",
    description:
      "🔮 PSYCHIC GUNLINE: Stay back Turn 1! His 2 Forgefiends can shoot you, but YOUR shooting is better. Magnus dominates from center-back. Screen with YOUR Spawn!",
    points: [
      "MAGNUS: Center-back. D6+6 psychic shots per turn. He deletes Forgefiends with Dev Wounds!",
      "AHRIMAN + 10 RUBRICS: Stay in cover. Scryer of Fates lets you redeploy if needed.",
      "TWO EXALTED ON DISCS: Cover flanks. Generate Cabal Points AND threaten objectives.",
      "YOUR SPAWN: Screen Magnus! His 6 Spawn + Eightbound want to reach your Primarch.",
    ],
    stratagems: [
      { name: "Temporal Surge (Ritual)", cost: "6+ on 2D6", when: "Any phase", effect: "Pick a friendly unit within 24\". They move D6\" (can't charge after). Use to reposition Disc Sorcerers or escape melee!" },
    ],
    rituals: [],
    tip: "🎯 HIS THREAT VECTORS: 6 Chaos Spawn screening + Eightbound/Exalted Eightbound behind. Don't let them reach Magnus!",
  },
  {
    id: "shooting",
    label: "Phase 03",
    buttonLabel: "3. Shooting",
    title: "Shooting Phase",
    description:
      "🔮 KINDRED SORCERY ACTIVATION: Turn 1 = DEVASTATING WOUNDS vs Forgefiends! Turn 2 = +1 to Wound vs characters! Magnus is your anti-vehicle assassin!",
    points: [
      "TURN 1: Kill Forgefiends with Dev Wounds! 5 SOT drop to grab objectives + apply pressure!",
      "TURN 2: +1 Wound. Second 5 SOT drop and DELETE Daemon Prince, then Khârn!",
      "MAGNUS: D6+6 Psychic shots. Devastating Wounds makes him delete T10+ vehicles!",
      "KILL ORDER: (1) Forgefiends, (2) Daemon Prince, (3) Khârn, (4) Lord on Juggernaut.",
    ],
    stratagems: [
      { name: "Sorcerous Might", cost: "1 CP", when: "Before a Psyker shoots", effect: "+1 Strength and +1 AP on psychic weapons. Use on 10 SOT vs Daemon Prince for S5 AP-3!" },
      { name: "Ensorcelled Infusion", cost: "1 CP", when: "Your Shooting phase", effect: "+1 to Wound with Psychic weapons for one unit. STACKS with Psychic Maelstrom for +2 total!" },
      { name: "Wrath of the Wronged", cost: "1 CP", when: "After losing a unit", effect: "+1 to Hit for one unit this phase. Use if Spawn died—avenge them with Magnus!" },
    ],
    ritualsIntro: "At the START of your Shooting phase, your Psykers can attempt Rituals. Each Psyker can only attempt ONE ritual per turn, and each ritual can only be attempted ONCE per turn across your whole army.",
    ritualsHowTo: [
      "1. Pick a Psyker who hasn't done a ritual this turn",
      "2. Pick a ritual no one else has done this turn",
      "3. Roll 2D6 (this is your Psychic Test)",
      "4. OPTIONAL: Spend Cabal Points to add to your roll (1 point = +1 to roll)",
      "5. If your total equals or beats the ritual's cost, it works!",
      "⚠️ WARNING: If you roll doubles or triples, that Psyker's unit takes D3 mortal wounds!",
      "💡 6 PSYKERS = 6+ Cabal Points per turn! Spend them freely!"
    ],
    rituals: [
      { name: "Temporal Surge", cost: 6, when: "To reposition or escape melee", effect: "Pick a friendly unit within 24\". They move D6\" (can't charge after). Score 10+? Move 6\" guaranteed!" },
      { name: "Destiny's Ruin", cost: 5, when: "Before shooting Forgefiends or Prince", effect: "Pick an enemy within 24\". Re-roll 1s to hit against them. Score 10+? Re-roll ALL misses!" },
      { name: "Doombolt", cost: 7, when: "To snipe characters through Spawn screens", effect: "Pick an enemy within 24\". They take D3 mortal wounds (no saves!). Score 11+? D3+3 instead!" },
      { name: "Twist of Fate", cost: 9, when: "Against Forgefiends or Daemon Prince", effect: "Pick an enemy within 24\". +1 AP against them (AP-1 becomes AP-2). Score 12+? +2 AP!" },
    ],
    tip: "🎯 TURN 1: Magnus kills Forgefiends. 5 SOT pressure. TURN 2: Second 5 SOT + +1 Wound = dead characters!",
  },
  {
    id: "charge",
    label: "Phase 04",
    buttonLabel: "4. Charge",
    title: "Charge Phase",
    description:
      "🔮 THE TRAP: DON'T CHARGE HIM. His Eightbound + Exalted Eightbound are elite killers. Let them waste time on YOUR Spawn while you shoot!",
    points: [
      "YOUR ARMY DOESN'T CHARGE. You're a psychic gunline, not melee!",
      "WARPFLAMER RUBRICS: Position where his Eightbound want to charge. OVERWATCH trap!",
      "KINDRED SORCERY: Pick DEVASTATING WOUNDS before Overwatch. 6s to wound = mortals!",
      "HIS 6 SPAWN: He uses them to screen. Shoot through or around—don't get baited!",
    ],
    stratagems: [
      { name: "Fire Overwatch", cost: "1 CP", when: "When he declares a charge", effect: "Shoot the charging unit! Warpflamers = D6 auto-hits EACH. Pick Devastating Wounds first for mortals on 6s!" },
      { name: "Kindred Sorcery (Devastating Wounds)", cost: "FREE", when: "Start of his Charge phase", effect: "Pick Wrath of the Immaterium BEFORE he charges. Your Overwatch deals mortals on 6s to wound!" },
    ],
    rituals: [],
    tip: "🎯 HIS ELITE MELEE: Eightbound (3) + Exalted Eightbound (3) = 6 elite killers. Let them charge Spawn, not Terminators!",
  },
  {
    id: "fight",
    label: "Phase 05",
    buttonLabel: "5. Fight",
    title: "Fight Phase",
    description:
      "🔮 ESCAPE PLAN: If his Eightbound catch your units, Fall Back—Psykers can shoot after! Your Spawn exist to die. They absorb elite melee units!",
    points: [
      "YOUR CHAOS SPAWN: They're screens. Their death = his elites wasted a turn!",
      "MAGNUS IN MELEE: He's actually good! With +1 to Wound, he kills Eightbound.",
      "RUBRICS CAUGHT: Fall Back next turn. Psychic weapons fire after falling back!",
      "HIS BERZERKERS: 20 models in 2 squads. Dangerous, but without characters they're weaker!",
    ],
    stratagems: [
      { name: "Kindred Sorcery (+1 Wound)", cost: "FREE", when: "Start of Fight phase", effect: "If Magnus is stuck in melee, pick Psychic Maelstrom. His melee attacks get +1 to Wound!" },
      { name: "Sorcerous Might", cost: "1 CP", when: "Before Magnus fights", effect: "+1 Strength and +1 AP on Magnus's melee. He wounds Eightbound on 2s with S8!" },
    ],
    rituals: [],
    tip: "🎯 LORD ON JUGGERNAUT: He has 8\" move + charge. Watch for him flanking—5 SOT can delete him!",
  },
  {
    id: "battleshock",
    label: "Phase 06",
    buttonLabel: "6. Battleshock",
    title: "Battleshock Phase",
    description:
      "🔮 THE VICTORY: Count objectives. Your Psykers hold and score. His army is losing characters every turn. Headless World Eaters = unfocused rage!",
    points: [
      "Check objectives: Characters on Sites of Power? Bonus VP!",
      "Exalted on Discs grab objectives. 12\" FLY = they're everywhere!",
      "KILL HIS JAKHALS: Cheap 2-model units trying to steal objectives. Delete them!",
      "HEADLESS ARMY: Without Prince + Khârn, his Berzerkers lose key buffs!",
    ],
    stratagems: [
      { name: "Insane Bravery", cost: "1 CP", when: "When a unit fails Battleshock", effect: "Auto-pass Battleshock test. Use on Terminators or Rubrics holding objectives!" },
    ],
    rituals: [],
    tip: "🎯 WIN CONDITION: Kill Forgefiends Turn 1, characters Turn 2. His army crumbles without shooting or leadership!",
  },
];

export default phases;
