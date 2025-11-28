const checklistByTurn = {
  "pre-luca": [
    { id: "pre-luca-assess", label: "👀 SPOT HIS THREATS: Daemon Prince (Warlord), Khârn, Eightbound, Forgefiend." },
    { id: "pre-luca-rhino", label: "🚗 FIND THE RHINO: It has 10 Berzerkers + maybe Khârn inside." },
    { id: "pre-luca-shooting", label: "🔫 HIS GUNS: Forgefiend + Helbrute. That's ALL his shooting." },
    { id: "pre-luca-chaff", label: "🐀 IGNORE CHAFF: Jakhals, Goremongers, Spawn are just filler." },
    { id: "pre-luca-backfield", label: "📍 HIS BACKFIELD: Mark where Terminators will drop Turn 2." },
  ],
  "pre-louis": [
    { id: "pre-louis-terrain", label: "🏛️ PICK TERRAIN: Choose side with more LOS-blocking for Magnus." },
    { id: "pre-louis-lanes", label: "🚫 BLOCK RHINO: Make his Rhino path go around terrain." },
    { id: "pre-louis-objectives", label: "📍 OBJECTIVES: Pick side where you can grab and hide." },
    { id: "pre-louis-drop", label: "🎯 DROP ZONES: His backfield should be clear for Terminators." },
    { id: "pre-louis-cp", label: "💰 SAVE 1 CP: You need it for Warpflamer Overwatch!" },
  ],
  1: [
    { id: "t1-magnus", label: "🦅 MAGNUS SAFE: 13\"+ from Eightbound. They can't reach you." },
    { id: "t1-forgefiend", label: "🔫 FORGEFIEND: Consider Screamers charging it to tie it up." },
    { id: "t1-screen", label: "🛡️ SCREEN: Spawn/Rhino in front of Magnus as a wall." },
    { id: "t1-rhino", label: "🚗 WATCH RHINO: Note where his Berzerker transport is going." },
    { id: "t1-cp", label: "💰 BANK CP: Don't spend—you need 1 for Overwatch Turn 2+." },
  ],
  2: [
    { id: "t2-deepstrike", label: "🎯 DROP TERMINATORS: Both squads arrive BEHIND Luca." },
    { id: "t2-prince", label: "👑 KILL DAEMON PRINCE: 10 SOT focus fire his Warlord (220 pts)." },
    { id: "t2-kharn", label: "⚔️ KILL KHÂRN: 5 SOT focus fire the Betrayer (85 pts, 5 wounds)." },
    { id: "t2-kite", label: "🏃 KITE MAGNUS: Stay 13\"+ from threats. Smite from safety." },
    { id: "t2-overwatch", label: "🔥 OVERWATCH READY: Save 1 CP for Warpflamer trap!" },
  ],
  3: [
    { id: "t3-trap", label: "🪤 TRAP SPRUNG: His characters should be dead. Army is headless." },
    { id: "t3-forgefiend", label: "🔫 FORGEFIEND DEAD? If not, kill it now. His shooting must die." },
    { id: "t3-eightbound", label: "😈 EIGHTBOUND: Let them charge into Overwatch. They die to flamers." },
    { id: "t3-objectives", label: "📍 HOLD OBJECTIVES: You should control 2-3 by now." },
    { id: "t3-killmore", label: "💀 KILL ORDER: Characters (Kharn!) → Eightbound → Berzerkers." },
  ],
  4: [
    { id: "t4-cleanup", label: "🧹 CLEANUP: His Warlord + Khârn dead. Mop up what's left." },
    { id: "t4-score", label: "🏆 SCORE BIG: Hold objectives with characters for bonus VP." },
    { id: "t4-eightbound", label: "😈 EIGHTBOUND CHECK: Any left? Keep them at range. Don't fight them." },
    { id: "t4-position", label: "📍 SPREAD OUT: Units in multiple table quarters = Engage points." },
    { id: "t4-cp", label: "💰 SPEND CP: Use stratagems freely now—game is nearly won." },
  ],
  5: [
    { id: "t5-hold", label: "🏆 HOLD THE LINE: Don't overextend. Protect your lead." },
    { id: "t5-score", label: "📊 COUNT SCORE: Are you ahead? Just survive. You win." },
    { id: "t5-safe", label: "🛡️ PLAY SAFE: No heroics. Keep Magnus alive for final scoring." },
    { id: "t5-sticky", label: "📍 STICKY POINTS: Rubrics hold objectives even if they walk away." },
    { id: "t5-gg", label: "🎉 GG LUCA: Shake hands. Tzeentch is pleased." },
  ],
};

// Flat list for backwards compatibility
const checklistItems = Object.values(checklistByTurn).flat();

export { checklistByTurn };
export default checklistItems;
