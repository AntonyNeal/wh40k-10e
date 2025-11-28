import PhaseSelector from "../components/PhaseSelector.jsx";
import PhaseCard from "../components/PhaseCard.jsx";

const PhasesPage = ({ phases, activePhaseId, onSelectPhase }) => {
  return (
    <main className="page" aria-label="Phase-by-phase breakdown">
      <PhaseSelector phases={phases} activePhaseId={activePhaseId} onSelect={onSelectPhase} />
      <section id="phase-cards" className="phase-grid" aria-live="polite">
        {phases.map((phase) => (
          <PhaseCard key={phase.id} phase={phase} isActive={phase.id === activePhaseId} />
        ))}
      </section>
    </main>
  );
};

export default PhasesPage;
