const phases = [
  {
    id: "command",
    label: "Phase 01",
    buttonLabel: "Command",
    title: "Command Phase",
    description:
      "World Eaters have no psychic phase and minimal command tricks. This is where you pull ahead. Bank CP, count Cabal points, and remember: every turn Luca doesn't reach combat is a turn you're winning.",
    points: [
      "Collect Cabal points: Magnus (4), Sorcerers in TDA (2 each), Infernal Master (1), Exalted Sorcerer (2).",
      "Check if Terminators can deep strike this turn (T2+). Plan arrival zones behind Luca's push.",
      "Score primary if holding objectives. Rubrics are sticky—don't forget!",
    ],
    tip: "Tip: World Eaters want to rush. Every phase you delay combat, you win. Be patient, score points, let them come.",
  },
  {
    id: "movement",
    label: "Phase 02",
    buttonLabel: "Movement",
    title: "Movement Phase",
    description:
      "Movement wins this matchup. Magnus FLIES—stay 13\" from Berzerkers and they can never touch you. Screen with Screamers and Spawn. Make Luca waste movement chasing ghosts.",
    points: [
      "Magnus: Stay airborne, stay 13\"+ from threats. Smite range is 18\"—you don't need to be close.",
      "Rhino: Advance midboard T1 to screen Magnus. Rubrics disembark T2 to claim objectives.",
      "Screamers/Spawn: Spread wide. Force Berzerkers to charge THEM instead of valuable units.",
    ],
    tip: "Tip: If Luca charges your chaff, he's not charging Magnus. Trade 75pts of Screamers for a full turn of shooting.",
  },
  {
    id: "shooting",
    label: "Phase 03",
    buttonLabel: "Shooting",
    title: "Shooting Phase",
    description:
      "World Eaters have almost NO shooting. This phase is entirely yours. Spend Cabal points freely—Doombolt, Twist of Fate, Temporal Surge. Every dead Berzerker is one less chainaxe in your face.",
    points: [
      "Priority targets: Characters first (Lord on Juggernaut removes terrain-ignore), then Berzerkers.",
      "Inferno Boltguns from SOT: AP-2 shreds 3+ saves. Focus fire—half-dead squads still fight at full strength.",
      "Warpflamers: Save Overwatch for his charge phase. D6+2 auto-hits EACH will delete charging Berzerkers.",
    ],
    tip: "Tip: Luca's army shrinks every shooting phase. Yours doesn't. Attrition is your friend.",
  },
  {
    id: "charge",
    label: "Phase 04",
    buttonLabel: "Charge",
    title: "Charge Phase",
    description:
      "YOU should rarely charge. Let LUCA charge into your Overwatch. Warpflamers auto-hit on Overwatch. Berzerkers are T4 3+—they die to massed flamers before swinging.",
    points: [
      "Overwatch with Warpflamer Rubrics: Each model fires D6+2 auto-hitting S4 AP-1 shots. Devastating.",
      "If SOT must charge (to trap a unit), ensure you have Cabal for Temporal Surge to position first.",
      "Magnus should NEVER charge Berzerkers or Angron. Fly away, smite, repeat.",
    ],
    tip: "Tip: 'Fight on death' means Berzerkers swing when they die. Don't charge them—shoot them off the board instead.",
  },
  {
    id: "fight",
    label: "Phase 05",
    buttonLabel: "Fight",
    title: "Fight Phase",
    description:
      "If you're in combat with World Eaters, something went wrong. SOT can trade into weakened squads, but avoid fresh Berzerkers. Fight First and interrupts matter—sequence carefully.",
    points: [
      "SOT fight well but Berzerkers fight better. Only engage damaged units or chaff.",
      "If Magnus is tagged, Fall Back next turn (he can still shoot/cast after falling back with psychic powers).",
      "World Eaters get +1 attack when charging—never let them charge if avoidable.",
    ],
    tip: "Tip: Pile in toward objectives, consolidate onto points. OC wins games, not kills.",
  },
  {
    id: "battleshock",
    label: "Phase 06",
    buttonLabel: "Battleshock",
    title: "Battleshock Phase",
    description:
      "World Eaters are often small elite squads—Battleshock rarely affects them. Focus on your own morale. Rubrics are sticky and auto-pass Battleshock on objectives you control.",
    points: [
      "Check which objectives are sticky-capped by Rubrics. They hold even if you leave.",
      "Score VP—count carefully. World Eaters score by killing, you score by holding.",
      "Recount Cabal points for next turn. Plan deep strike arrivals.",
    ],
    tip: "Tip: If you're ahead on points, play keep-away. Luca has to come to you—make him pay for every inch.",
  },
];

export default phases;
