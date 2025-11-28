const phases = [
  {
    id: "command",
    label: "Phase 01",
    buttonLabel: "1. Command",
    title: "Command Phase",
    description:
      "🧩 RIDDLE: What army has no psykers and fears the warp? Luca's. World Eaters have ZERO psychic defense. Every spell you cast is free damage.",
    points: [
      "YOUR CABAL POINTS: You have 12 total. Luca has 0 psychic anything.",
      "Is it Turn 2+? Your Terminators can appear from reserves!",
      "LUCA'S THREATS: Daemon Prince (Warlord), Khârn, Eightbound, Exalted Eightbound.",
    ],
    rituals: [],
    tip: "🎯 His Daemon Prince has Helm of Brazen Ire—he's their lynchpin. Kill him Turn 2.",
  },
  {
    id: "movement",
    label: "Phase 02",
    buttonLabel: "2. Movement",
    title: "Movement Phase",
    description:
      "🧩 RIDDLE: What flies while axes hit empty air? Magnus. His Exalted Eightbound move 9\". Magnus moves 16\". Math says: stay 13\"+ away and they NEVER catch you.",
    points: [
      "Magnus: Stay 13\"+ from Eightbound (9\" move + 12\" charge = 21\" threat). You're safe at 13\".",
      "Watch his RHINO: It has 10 Berzerkers + Khârn inside. Don't let it get close!",
      "Screamers: Consider charging his Forgefiend to stop it shooting Magnus.",
    ],
    rituals: [],
    tip: "🎯 Luca's only shooting = Forgefiend + Helbrute. Everything else has to walk at you.",
  },
  {
    id: "shooting",
    label: "Phase 03",
    buttonLabel: "3. Shooting",
    title: "Shooting Phase",
    description:
      "🧩 RIDDLE: What army can't shoot back? Luca's (mostly). His Forgefiend + Helbrute are IT. Kill them and his army becomes a slow melee blob you can kite forever.",
    points: [
      "KILL ORDER: (1) Daemon Prince, (2) Khârn, (3) Forgefiend/Helbrute, (4) Exalted Eightbound, (5) Eightbound, (6) Berzerkers.",
      "Daemon Prince is 220 pts and his WARLORD. Dead Prince = no command rerolls.",
      "Warpflamers can shoot AND Overwatch later! Burn something now, burn chargers later.",
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
      { name: "Temporal Surge", cost: 6, when: "To reposition after shooting", effect: "Pick a friendly unit within 24\". They move D6\" (can't charge after). Score 10+? Move 6\" guaranteed!" },
      { name: "Destiny's Ruin", cost: 5, when: "Before shooting the Daemon Prince", effect: "Pick an enemy within 24\". Re-roll 1s to hit against them. Score 10+? Re-roll ALL misses!" },
      { name: "Doombolt", cost: 7, when: "To snipe Khârn or finish wounded characters", effect: "Pick an enemy within 24\". They take D3 mortal wounds (no saves!). Score 11+? D3+3 instead!" },
      { name: "Twist of Fate", cost: 9, when: "Against Eightbound or the Helbrute", effect: "Pick an enemy within 24\". +1 AP against them (AP-1 becomes AP-2). Score 12+? +2 AP!" },
    ],
    tip: "🎯 TIP: Use Doombolt to finish Khârn (5 wounds). D3 mortals = probably dead Betrayer.",
  },
  {
    id: "charge",
    label: "Phase 04",
    buttonLabel: "4. Charge",
    title: "Charge Phase",
    description:
      "🧩 RIDDLE: What wants to charge into fire? Eightbound. Let them. Your Warpflamers auto-hit on Overwatch. Each unit of 3 Eightbound dies to focused flamers.",
    points: [
      "DO NOT CHARGE LUCA'S STUFF. His Eightbound/Berzerkers fight on death!",
      "When he charges your Warpflamer Rubrics, use OVERWATCH (1 CP).",
      "10 flamers × D6+2 = about 80 auto-hitting shots. His 3-model Eightbound units evaporate.",
    ],
    rituals: [],
    tip: "🎯 REMEMBER: You saved 1 CP for Overwatch, right? That's your trap card.",
  },
  {
    id: "fight",
    label: "Phase 05",
    buttonLabel: "5. Fight",
    title: "Fight Phase",
    description:
      "🧩 RIDDLE: What wins by not fighting? You. Eightbound and Berzerkers are SCARY in melee. Exalted Eightbound especially—they're his elite killers.",
    points: [
      "If Magnus is in combat, Fall Back next turn. He can still cast after falling back!",
      "Terminators CAN fight weakened units. Their power fists hurt.",
      "BEWARE: Berzerkers AND Eightbound fight when they die. Dead models still swing!",
    ],
    rituals: [],
    tip: "🎯 REMEMBER: You win on objectives, not by punching. Let Luca chase while you score.",
  },
  {
    id: "battleshock",
    label: "Phase 06",
    buttonLabel: "6. Battleshock",
    title: "Battleshock Phase",
    description:
      "🧩 RIDDLE: What holds the ground even when gone? Rubrics. STICKY OBJECTIVES mean once you grab a point, it's yours until Luca physically walks onto it.",
    points: [
      "Check your score. Ahead? Good—keep running away and scoring.",
      "Luca's army is SLOW. His Jakhals/Goremongers are just chaff for Blessing of Khorne.",
      "Next turn: Where will Terminators appear? What will Magnus target?",
    ],
    rituals: [],
    tip: "🎯 His whole army runs forward—grab the objectives he leaves behind.",
  },
];

export default phases;
