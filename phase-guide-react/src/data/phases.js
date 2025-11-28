const phases = [
  {
    id: "command",
    label: "Phase 01",
    buttonLabel: "Command",
    title: "Command Phase",
    description:
      "Harvest glittering CP embers, count the Cabal sigils, and whisper the mission code to the spirits in your implants. Every order is a vote in Tzeentch's parliament of madness, so script the turn before reality notices.",
    points: [
      "Score +1 CP, verify mission dials, and mutter their value backwards.",
      "Collect Cabal points (Magnus 4, Ahriman 3, others 1-2) and bank them like stolen suns.",
      "Resolve upkeep buffs: Weaver of Fates, Doombolt priming, stratagem echoes.",
    ],
    tip: "Tip: Decide the ritual before the ritual decides you—warp currents are jealous things.",
  },
  {
    id: "movement",
    label: "Phase 02",
    buttonLabel: "Movement",
    title: "Movement Phase",
    description:
      "Herd your automata through neon ruins, trace glyphs in exhaust trails, and let Magnus surf the skyline in search of weak minds. Movement is the lie we tell physics, so tell it beautifully.",
    points: [
      "March Rubric bricks with metronomic calm; unleash Enlightened to harry the alleys.",
      "Stage Deep Strike / Temporal Surge plays two turns ahead.",
      "Maintain spacing vs blast code; keep characters within look-out sigil arcs.",
    ],
    tip: "Tip: Freeze-frame the battlefield in your cortex; future-you will thank past-you's paranoia.",
  },
  {
    id: "shooting",
    label: "Phase 03",
    buttonLabel: "Shooting",
    title: "Shooting Phase",
    description:
      "Let the guns speak in hexameters. Chain Cabal rituals to Forgefiend barrages, let flamers write glowing graffiti on Luca's armor, and watch probability lose its composure.",
    points: [
      "Spend Cabal points on Twist of Fate / Wrath before touching a die.",
      "Resolve Forgefiend + Warpflamer shots first to incinerate screens.",
      "Bank CP for Overwatch or phasic ploys you plan to echo later.",
    ],
    tip: "Tip: Declare all target strings like a prophet—the Warp prefers confident liars.",
  },
  {
    id: "charge",
    label: "Phase 04",
    buttonLabel: "Charge",
    title: "Charge Phase",
    description:
      "Charge only when the voices chant in triplicate. Enlightened screens lash out, Scarabs blink behind prey, and Magnus selects which mortal gets to understand terror today.",
    points: [
      "Pre-measure heroic pockets; leave bait for interventions.",
      "Keep the Exalted Sorcerer sheltered until the last microsecond.",
      "Spend Cabal on Temporal Surge when the angle looks impossible.",
    ],
    tip: "Tip: Always leave a warp-width gap for pile-ins; cluttered zealots die twice.",
  },
  {
    id: "fight",
    label: "Phase 05",
    buttonLabel: "Fight",
    title: "Fight Phase",
    description:
      "In the fight phase you are half duelist, half mathematician. Sequence from doom to nuisance, let Scarabs tank interrupts, and keep Rubrics chanting even as blades flash.",
    points: [
      "Audit Fight First / Fight Last triggers—Enlightened mortals win trades.",
      "Declare Warptime, Veterans, or hexes before picking dice up.",
      "Consolidate intelligently; OC is the true blade.",
    ],
    tip: "Tip: Leave a single automaton hugging each objective—soulless loyalty scores VPs.",
  },
  {
    id: "battleshock",
    label: "Phase 06",
    buttonLabel: "Battleshock",
    title: "Battleshock Phase",
    description:
      "The battlefield exhales. Test Battleshock, bless sticky objectives, edit Luca's memory of the score. This is when the cult scribes its graffiti into causality.",
    points: [
      "Roll Battleshock for depleted units; save CP for Insane Bravery if narrative demands.",
      "Mark which objectives stay sticky via Rubrics / Magnus auras.",
      "Recount remaining Cabal dice and casualties for next turn's ritual ledger.",
    ],
    tip: "Tip: Announce VP totals like a sermon; confusion is the enemy's only prayer.",
  },
];

export default phases;
