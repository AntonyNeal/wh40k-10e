const checklistByTurn = {
  "pre-game": [
    { id: "pre-assess", label: "👀 SPOT 4 CHARACTERS: Daemon Prince (Warlord), Khârn, Lord on Juggernaut, Slaughterbound." },
    { id: "pre-forgefiends", label: "🔫 TWO FORGEFIENDS: 340 pts of shooting! Priority Turn 1-2. Devastating Wounds deletes them." },
    { id: "pre-eightbound", label: "😈 EIGHTBOUND + EXALTED: 6 total elite killers. Don't let them reach Magnus!" },
    { id: "pre-spawn", label: "🐙 HIS 6 CHAOS SPAWN: Screening his characters. Shoot through them or around them." },
    { id: "pre-berzerkers", label: "⚔️ 20 BERZERKERS: 2 squads of 10. Rhino carries one. Deadly if they reach you." },
    { id: "pre-enhancement", label: "💎 REMEMBER ENHANCEMENTS: Umbralefic Crystal (escape), your buffs beat his Helm of Brazen Ire!" },
  ],
  "deployment": [
    { id: "deploy-magnus", label: "👹 MAGNUS CENTER-BACK: D6+6 shots from safety. YOUR Spawn screen him!" },
    { id: "deploy-ahriman", label: "📜 AHRIMAN + 10 RUBRICS: Deploy in cover. 24\" range + Scryer redeployment!" },
    { id: "deploy-disc", label: "🛸 TWO EXALTED ON DISCS: Flanks for objectives + Cabal Points." },
    { id: "deploy-flamers", label: "🔥 WARPFLAMER RUBRICS: Mid-board threat. Overwatch trap for Eightbound!" },
    { id: "deploy-range", label: "🔮 KINDRED SORCERY: Plan for +6\" Range Turn 1 OR Devastating Wounds vs Forgefiends!" },
  ],
  1: [
    { id: "t1-kindred", label: "🔮 KINDRED SORCERY: DEVASTATING WOUNDS vs Forgefiends! Or +6\" Range for safety." },
    { id: "t1-forgefiend", label: "🎯 PRIORITY: Kill at least ONE Forgefiend Turn 1. Magnus can solo it with Dev Wounds!" },
    { id: "t1-magnus", label: "👹 MAGNUS: D6+6 shots with Devastating Wounds. 6s to wound = mortals bypass armor!" },
    { id: "t1-screen", label: "🐙 SCREEN MAGNUS: Your Spawn in front. His Eightbound can't reach the Primarch." },
    { id: "t1-cp", label: "💰 SAVE 1 CP: You need Overwatch when his Eightbound charge Turn 2!" },
  ],
  2: [
    { id: "t2-kindred", label: "🔮 KINDRED SORCERY: PSYCHIC MAELSTROM (+1 to Wound) for character assassination!" },
    { id: "t2-deepstrike", label: "🎯 BOTH TERMINATOR SQUADS DROP: 10 SOT → Daemon Prince. 5 SOT → Khârn OR Juggerlord!" },
    { id: "t2-prince", label: "👑 DAEMON PRINCE DEAD: He has Helm of Brazen Ire. Still dies to +1 Wound Terminators!" },
    { id: "t2-kharn", label: "⚔️ KHÂRN OR JUGGERLORD: Pick one. 5 SOT wound on 3s. Delete a character!" },
    { id: "t2-forgefiend2", label: "🔫 SECOND FORGEFIEND: If alive, Magnus finishes it. His shooting is now GONE." },
    { id: "t2-crystal", label: "💎 UMBRALEFIC CRYSTAL: If counter-charged, REMEMBER you can escape next turn!" },
  ],
  3: [
    { id: "t3-characters", label: "👑 CHARACTER CHECK: Daemon Prince + Khârn dead? If not, fix that NOW." },
    { id: "t3-remaining", label: "🎯 REMAINING CHARACTERS: Juggerlord + Slaughterbound. Keep hunting!" },
    { id: "t3-kindred", label: "🔮 KINDRED SORCERY: +1 Wound vs Berzerkers, Dev Wounds if vehicles survive." },
    { id: "t3-headless", label: "🪤 HEADLESS ARMY: World Eaters without characters = angry but unfocused." },
    { id: "t3-overwatch", label: "🔥 OVERWATCH READY: Warpflamers with Devastating Wounds punish charges!" },
  ],
  4: [
    { id: "t4-cleanup", label: "🧹 CLEANUP: His elite units wasted on Spawn. Berzerkers without buffs are manageable." },
    { id: "t4-score", label: "🏆 SCORE BIG: Control objectives. Your Psykers hold = points!" },
    { id: "t4-magnus", label: "👹 MAGNUS ALIVE: He's been shooting all game. Keep him safe for final turns." },
    { id: "t4-jakhals", label: "🐀 KILL JAKHALS: Don't let cheap units steal objectives. Delete them." },
    { id: "t4-mop", label: "💀 MOP UP: Terminators + Rubrics kill what's left. His army is broken." },
  ],
  5: [
    { id: "t5-hold", label: "🏆 FINAL HOLD: Units on objectives. Sticky objectives are YOURS!" },
    { id: "t5-score", label: "📊 COUNT VP: You should be ahead. Don't get greedy chasing kills." },
    { id: "t5-magnus", label: "👹 MAGNUS LIVES: Final shots—style points with Devastating Wounds!" },
    { id: "t5-safe", label: "🛡️ PLAY SAFE: No heroics. Your lead wins the game." },
    { id: "t5-gg", label: "🎉 GG: The Grand Coven crushed Eat Trash Beat Trash. Tzeentch is pleased." },
  ],
};

// Flat list for backwards compatibility
const checklistItems = Object.values(checklistByTurn).flat();

export { checklistByTurn };
export default checklistItems;
