const PhaseSelector = ({ phases, activePhaseId, onSelect }) => {
  return (
    <section className="phase-selector" aria-label="Select game phase">
      {phases.map((phase) => (
        <button
          key={phase.id}
          type="button"
          className={`phase-selector__btn${activePhaseId === phase.id ? " active" : ""}`}
          data-phase={phase.id}
          aria-pressed={activePhaseId === phase.id}
          onClick={() => onSelect(phase.id)}
        >
          {phase.buttonLabel}
        </button>
      ))}
    </section>
  );
};

export default PhaseSelector;
