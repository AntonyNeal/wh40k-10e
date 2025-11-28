const labyrinthNodes = [
  {
    id: "gameplan",
    title: "🧩 The Trap",
    body:
      "RIDDLE: What moves forward into a closing cage? Luca's army.\n\nTURN 1: Sit back. Let Luca run forward.\nTURN 2: Drop Terminators BEHIND him.\nTURN 3+: He's stuck between Magnus in front and Terminators behind. Score points and win.",
    suspicions: ["Be PATIENT turn 1.", "The trap closes turn 2.", "Don't chase—let him come to you."],
    references: ["terminators", "magnus", "mission"],
  },
  {
    id: "terminators",
    title: "🔨 Two Hammers",
    body:
      "RIDDLE: What strikes from two sides at once? Your Terminators.\n\nYou have TWO groups:\n• 10 Terminators = the BIG hammer\n• 5 Terminators = the small hammer\n\nDrop them on OPPOSITE sides of the board. Luca can't stop both.",
    suspicions: ["Big squad kills his best unit.", "Small squad grabs his backfield.", "Split them far apart."],
    references: ["gameplan", "deepstrike"],
  },
  {
    id: "magnus",
    title: "🦅 The Flying Giant",
    body:
      "RIDDLE: What floats above while axes swing at nothing? Magnus.\n\nMagnus FLIES. Berzerkers WALK.\nStay 13+ inches away = they can NEVER touch you.\nSmite range is 18 inches = you're always in range to hurt them.",
    suspicions: ["13 inches = safety zone.", "Use buildings to gain height.", "Never land near Berzerkers."],
    references: ["eightbound", "gameplan"],
  },
  {
    id: "eightbound",
    title: "😈 The Scary Ones",
    body:
      "RIDDLE: What moves fast and hits like a truck? Eightbound.\n\nEIGHTBOUND ARE DANGEROUS:\n• They move 9\" (faster than Berzerkers!)\n• They hit EXTREMELY hard\n• They're his elite killers\n\nANSWER: Shoot them from far. Use Twist of Fate (+AP) to cut through their saves.",
    suspicions: ["Kill them BEFORE they reach you.", "Warpflamers on Overwatch shred them.", "They're expensive—killing them hurts Luca."],
    references: ["magnus", "warpflamers"],
  },
  {
    id: "deepstrike",
    title: "⚡ The Surprise",
    body:
      "RIDDLE: What appears from nowhere when the enemy looks away? Your Terminators.\n\nTURN 2 = SURPRISE TIME:\n• Luca pushed forward\n• His backfield is EMPTY\n• Drop Terminators 9 inches from his stuff\n• Shoot. Kill. Win.",
    suspicions: ["9 inches is farther than it looks—measure twice!", "Kill characters first.", "Put the two squads far apart."],
    references: ["terminators", "gameplan"],
  },
  {
    id: "warpflamers",
    title: "🔥 The Fire Trap",
    body:
      "RIDDLE: What wants to be charged? Your Warpflamer Rubrics.\n\nWhen Luca charges them, you use OVERWATCH:\n• Each flamer shoots D6+2 times\n• They AUTO-HIT (no rolling!)\n• 10 flamers = about 80 hits\n• Berzerkers DIE before reaching you",
    suspicions: ["SAVE 1 CP for Overwatch.", "Put them where Luca wants to go.", "Let him charge into the fire."],
    references: ["berzerkers", "gameplan"],
  },
  {
    id: "berzerkers",
    title: "⚔️ The Enemy",
    body:
      "RIDDLE: What dies from far but kills up close? Berzerkers.\n\nKNOW THIS:\n• They move only 6 inches (slow!)\n• They have NO shooting\n• They hit VERY hard in combat\n• They fight EVEN WHEN DEAD\n\nANSWER: Shoot them. Never charge them.",
    suspicions: ["NEVER fight them if you can shoot instead.", "Dead Berzerkers still swing back—beware!", "They're scary in combat, weak to guns."],
    references: ["warpflamers", "deepstrike"],
  },
  {
    id: "mission",
    title: "🏆 How to Win",
    body:
      "RIDDLE: What wins without fighting? Holding objectives.\n\nBEST MISSION: Sites of Power\n• Only CHARACTERS score points\n• You have 6 characters\n• Luca has 2-3\n• You outscore him by just existing\n\nYour Rubrics have STICKY objectives—once captured, they stay yours.",
    suspicions: ["Don't pick kill-based missions.", "Grab objectives Luca leaves behind.", "You win on POINTS, not kills."],
    references: ["gameplan", "eightbound"],
  },
];

export default labyrinthNodes;
