import { useState } from "react";
import { checklistByTurn } from "../data/checklist.js";

const Checklist = ({ completed, onToggle }) => {
  const [activeTurn, setActiveTurn] = useState("pre-luca");
  const tabs = [
    { key: "pre-luca", label: "Luca Picks Side" },
    { key: "pre-louis", label: "Louis Picks Side" },
    { key: 1, label: "Turn 1" },
    { key: 2, label: "Turn 2" },
    { key: 3, label: "Turn 3" },
    { key: 4, label: "Turn 4" },
    { key: 5, label: "Turn 5" },
  ];
  const items = checklistByTurn[activeTurn] || [];

  return (
    <section className="checklist" aria-label="Turn preparation checklist">
      <div className="checklist__header">
        <h2>Game Checklist</h2>
        <p>Start with pregame setup, then follow turn-by-turn.</p>
      </div>
      <div className="checklist__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`checklist__tab${activeTurn === tab.key ? " active" : ""}`}
            onClick={() => setActiveTurn(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <ul className="checklist__list">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={completed[item.id] ? "completed" : ""}
              onClick={() => onToggle(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Checklist;
