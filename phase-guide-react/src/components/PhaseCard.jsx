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
      <p className="tip">{phase.tip}</p>
    </article>
  );
};

export default PhaseCard;
