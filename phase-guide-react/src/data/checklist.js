const checklistByTurn = {
  "pre-luca": [
    { id: "pre-luca-assess", label: "👀 ASSESS: Look at both sides. Which has more LOS-blocking terrain?" },
    { id: "pre-luca-accept", label: "✅ ACCEPT IT: Luca chose—now make his choice work for YOU." },
    { id: "pre-luca-ruins", label: "🏛️ FIND RUINS: Identify tall ruins Magnus can hide behind Turn 1." },
    { id: "pre-luca-lanes", label: "🎯 CHARGE LANES: Where will Berzerkers want to go? Put flamers there." },
    { id: "pre-luca-backfield", label: "📍 HIS BACKFIELD: Mark where Terminators will drop Turn 2." },
  ],
  "pre-louis": [
    { id: "pre-louis-pick", label: "🏆 PICK WISELY: Choose the side with MORE terrain for Magnus to hide." },
    { id: "pre-louis-los", label: "🏛️ LOS BLOCKING: You want tall ruins near your deployment zone." },
    { id: "pre-louis-objectives", label: "📍 OBJECTIVES: Pick side where objectives are easier to reach safely." },
    { id: "pre-louis-lanes", label: "🚫 DENY LANES: Force Berzerkers to take the long way around terrain." },
    { id: "pre-louis-drop", label: "🎯 DROP ZONES: His backfield should have open space for Terminators." },
  ],
  1: [
    { id: "t1-screen", label: "🛡️ WALL UP: Screamers, Spawn, Rhino in FRONT of Magnus." },
    { id: "t1-distance", label: "📏 13 INCHES: Magnus stays 13\"+ from all threats." },
    { id: "t1-rhino", label: "🚗 RHINO PUSH: Advance Rhino midboard to block line of sight." },
    { id: "t1-cp", label: "💰 BANK CP: Don't spend CP—you need it for Turn 2+." },
    { id: "t1-score", label: "🏆 SCORE: Grab any safe objectives. Rubrics are sticky!" },
  ],
  2: [
    { id: "t2-deepstrike", label: "🎯 DROP TERMINATORS: Both squads arrive BEHIND Luca's army." },
    { id: "t2-split", label: "↔️ SPLIT THEM: 10-man left, 5-man right. He can't stop both." },
    { id: "t2-shoot", label: "🔫 PRIORITY FIRE: Kill his characters first, then Berzerkers." },
    { id: "t2-kite", label: "🏃 KITE MAGNUS: Stay 13\"+ from threats. Smite from safety." },
    { id: "t2-overwatch", label: "🔥 SAVE 1 CP: You need it for Warpflamer Overwatch!" },
  ],
  3: [
    { id: "t3-trap", label: "🪤 TRAP CLOSED: Luca is between Magnus and Terminators." },
    { id: "t3-flamers", label: "🔥 OVERWATCH READY: When Berzerkers charge, BURN them." },
    { id: "t3-fallback", label: "🏃 FALL BACK: If Magnus is tagged, fall back and cast." },
    { id: "t3-objectives", label: "📍 HOLD OBJECTIVES: You should control 2-3 by now." },
    { id: "t3-killmore", label: "💀 KILL ORDER: Characters (Kharn!) → Eightbound → Berzerkers." },
  ],
  4: [
    { id: "t4-cleanup", label: "🧹 CLEANUP: His army should be nearly gone. Mop up." },
    { id: "t4-score", label: "🏆 SCORE BIG: Hold objectives, max primary points." },
    { id: "t4-eightbound", label: "😈 EIGHTBOUND CHECK: Any left? Keep them at range. Don't fight them." },
    { id: "t4-position", label: "📍 POSITION: Spread units to hold multiple objectives." },
    { id: "t4-cp", label: "💰 SPEND CP: Use stratagems freely now—game is nearly won." },
  ],
  5: [
    { id: "t5-hold", label: "🏆 HOLD THE LINE: Don't overextend. Protect your lead." },
    { id: "t5-final", label: "📊 COUNT SCORE: Are you ahead? Just survive. You win." },
    { id: "t5-safe", label: "🛡️ PLAY SAFE: No heroics. Keep Magnus alive." },
    { id: "t5-sticky", label: "📍 STICKY POINTS: Rubrics hold objectives even if they die." },
    { id: "t5-gg", label: "🎉 GG LUCA: Shake hands. Tzeentch is pleased." },
  ],
};

// Flat list for backwards compatibility
const checklistItems = Object.values(checklistByTurn).flat();

export { checklistByTurn };
export default checklistItems;
