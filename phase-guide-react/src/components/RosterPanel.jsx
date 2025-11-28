import roster from "../data/roster.js";

const RosterPanel = () => {
  const totalPoints = roster.highlights.reduce((sum, entry) => sum + entry.points, 0);

  return (
    <section className="roster" aria-label="2000pt Thousand Sons list">
      <header className="roster__header">
        <div>
          <p className="eyebrow">Strike Force Loadout</p>
          <h2>2000pt War Cabal Roster</h2>
        </div>
        <div className="roster__total">
          <span className="roster__points">{totalPoints} pts</span>
          <span className="roster__detachment">{roster.detachment}</span>
        </div>
      </header>
      <div className="roster__grid">
        {roster.highlights.map((entry) => (
          <article key={entry.name} className="roster-item">
            <header>
              <h3>{entry.name}</h3>
              <span className="roster-item__points">{entry.points} pts</span>
            </header>
            <p className="roster-item__role">{entry.role}</p>
            <p className="roster-item__notes">{entry.notes}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RosterPanel;
