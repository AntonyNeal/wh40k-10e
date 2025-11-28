import PhaseSelector from "../components/PhaseSelector.jsx";
import PhaseCard from "../components/PhaseCard.jsx";

const PhasesPage = ({ phases, activePhaseId, onSelectPhase }) => {
  const activePhase = phases.find((phase) => phase.id === activePhaseId);

  return (
    <main className="page" aria-label="Phase-by-phase breakdown">
      <PhaseSelector phases={phases} activePhaseId={activePhaseId} onSelect={onSelectPhase} />
      <section id="phase-cards" aria-live="polite">
        {activePhase && <PhaseCard phase={activePhase} isActive={true} />}
      </section>
    </main>
  );
};

export default PhasesPage;
