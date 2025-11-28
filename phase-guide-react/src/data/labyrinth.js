const labyrinthNodes = [
  {
    id: "magnus",
    title: "Screen Burn // Magnus",
    body:
      "He left fingerprints on the liquid crystal and they never cooled. Whoever is reading this, do not scrape them away. They point toward objectives that exist only when he looks at them.",
    suspicions: ["Probably Julian.", "Or the hacker who keeps renaming my desktop.", "Or Magnus."],
    references: ["ritual", "extraction"],
  },
  {
    id: "ritual",
    title: "Ritual Cache 7",
    body:
      "Seven shell companies. Seven false icons. Seven Rubric Marines whispering the same password. Turn any of them off and the whole plan keeps running. That's the frightening part.",
    suspicions: ["Not me.", "Feels like Tzeentch kept the receipts.", "Why would a human write like this?"],
    references: ["scarab", "goad"],
  },
  {
    id: "scarab",
    title: "Scarab Loop",
    body:
      "If you loop the Scarab Occult combat logs backwards, a voice begs you not to deep strike on turn two. The voice signs off as 'Future Luca'.",
    suspicions: ["Julian wouldn't warn Luca.", "Hackers love time paradoxes.", "Maybe this is you, reading ahead."],
    references: ["mission", "magnus"],
  },
  {
    id: "mission",
    title: "Sites of Power Insider",
    body:
      "Only Characters may score. Repeating it like a mantra doesn't make it less cruel. We built a list of names; Luca built a list of casualties.",
    suspicions: ["Feels like corporate memo by day, cult screed by night.", "Could be auto-generated.", "Could be prophecy."],
    references: ["goad", "extraction"],
  },
  {
    id: "goad",
    title: "Social Hack Payload",
    body:
      "Compliment Luca's warlord. Mock our own armor saves. Smile when he insists on Sites of Power. Record his smile for later divination.",
    suspicions: ["I remember writing this, but I don't remember hitting save.", "Someone added emojis then deleted them.", "Tzeentch laughs behind the HUD."],
    references: ["ritual", "scarab", "music"],
  },
  {
    id: "extraction",
    title: "Emergency Extraction Myth",
    body:
      "Escape route scribbled in ultraviolet ink between two ruined hab-blocks. When you scan it, the route becomes longer. When you stop, it's already behind you.",
    suspicions: ["Definitely horror-movie energy.", "Julian would never joke about this.", "Unless the joke is on me."],
    references: ["music", "mission"],
  },
  {
    id: "music",
    title: "Litanies of Electric Glass",
    body:
      "Play the linked video at half speed while reading Artefact 13. The waveform forms the sigil of the Architect. Or maybe that's just pareidolia. Either way, the room gets colder.",
    suspicions: ["Link planted by hacker?", "Julian's taste is better than this.", "Tzeentch would absolutely Rickroll us."],
    references: ["scarab", "magnus"],
  },
  {
    id: "stonefoot",
    title: "Stonefoot Broadcast",
    body:
      "Every eleventh capital letter across this dossier spells D-A-I-D-A-R-A-B-O-T-C-H-I. The mystics swear that's a coincidence. The tremor in the floor says otherwise.",
    suspicions: [
      "This reads like a giant is typing with mountain-sized hands.",
      "Mystics keep swapping vowels for symbols—classic obfuscation.",
      "If you can pronounce the name, you already work for them.",
    ],
    references: ["mission", "music", "goad"],
  },
];

export default labyrinthNodes;
