const PhaseCard = ({ phase, isActive }) => {
  return (
    <article className={`phase-card${isActive ? " active" : ""}`} data-phase={phase.id}>
      <header>
        <p className="label">{phase.label}</p>
        <h2>{phase.title}</h2>
      </header>
      <p>{phase.description}</p>
      <ul>
        {phase.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      
      {phase.rituals && phase.rituals.length > 0 && (
        <div className="phase-card__rituals">
          <h3>🔮 Rituals to Use</h3>
          <div className="phase-card__ritual-list">
            {phase.rituals.map((ritual) => (
              <div key={ritual.name} className="phase-card__ritual">
                <div className="phase-card__ritual-header">
                  <span className="phase-card__ritual-name">{ritual.name}</span>
                  <span className="phase-card__ritual-cost">{ritual.cost} Cabal</span>
                </div>
                <p className="phase-card__ritual-when">⏰ {ritual.when}</p>
                <p className="phase-card__ritual-effect">→ {ritual.effect}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <p className="tip">{phase.tip}</p>
    </article>
  );
};

export default PhaseCard;
