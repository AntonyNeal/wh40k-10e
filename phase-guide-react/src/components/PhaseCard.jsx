import { Link } from "react-router-dom";

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
          <h3>🔮 Cabal Rituals</h3>
          
          {phase.ritualsIntro && (
            <p className="phase-card__rituals-intro">{phase.ritualsIntro}</p>
          )}
          
          {phase.ritualsHowTo && (
            <div className="phase-card__rituals-howto">
              <h4>How to Cast a Ritual:</h4>
              <ol>
                {phase.ritualsHowTo.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}
          
          <h4>Your Rituals:</h4>
          <div className="phase-card__ritual-list">
            {phase.rituals.map((ritual) => (
              <div key={ritual.name} className="phase-card__ritual">
                <div className="phase-card__ritual-header">
                  <span className="phase-card__ritual-name">{ritual.name}</span>
                  <span className="phase-card__ritual-cost">Need {ritual.cost}+</span>
                </div>
                <p className="phase-card__ritual-when">⏰ {ritual.when}</p>
                <p className="phase-card__ritual-effect">→ {ritual.effect}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <p className="tip">{phase.tip}</p>
      
      <Link to="/checklist" className="phase-card__checklist-link">
        📋 Open Turn Checklist
      </Link>
    </article>
  );
};

export default PhaseCard;
