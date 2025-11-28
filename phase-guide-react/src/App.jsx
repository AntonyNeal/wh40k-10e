import { useEffect, useMemo, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import InitiationPage from "./pages/InitiationPage.jsx";
import LabyrinthPage from "./pages/LabyrinthPage.jsx";
import PhasesPage from "./pages/PhasesPage.jsx";
import RosterPage from "./pages/RosterPage.jsx";
import ChecklistPage from "./pages/ChecklistPage.jsx";
import MobileNav from "./components/MobileNav.jsx";
import phases from "./data/phases.js";
import checklistItems from "./data/checklist.js";

const STORAGE_KEY = "phase-guide-react-checklist";

function App() {
  const [activePhaseId, setActivePhaseId] = useState(phases[0]?.id ?? "");
  const [checklistState, setChecklistState] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setChecklistState(JSON.parse(saved));
      } catch (error) {
        console.warn("Failed to parse checklist state", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checklistState));
  }, [checklistState]);

  const activePhaseIndex = useMemo(() => {
    return phases.findIndex((phase) => phase.id === activePhaseId);
  }, [activePhaseId]);

  const handleSelectPhase = (phaseId) => {
    setActivePhaseId(phaseId);
  };

  const handleCyclePhase = () => {
    const nextIndex = (activePhaseIndex + 1) % phases.length;
    setActivePhaseId(phases[nextIndex].id);
    const nextCard = document.querySelector(`[data-phase="${phases[nextIndex].id}"]`);
    nextCard?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleHeroCycle = () => {
    handleCyclePhase();
    navigate("/phases");
  };

  const handleToggleChecklist = (id) => {
    setChecklistState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<HomePage onCycle={handleHeroCycle} />} />
        <Route path="/initiation" element={<InitiationPage />} />
        <Route path="/labyrinth" element={<LabyrinthPage />} />
        <Route
          path="/phases"
          element={<PhasesPage phases={phases} activePhaseId={activePhaseId} onSelectPhase={handleSelectPhase} />}
        />
        <Route path="/roster" element={<RosterPage />} />
        <Route
          path="/checklist"
          element={<ChecklistPage items={checklistItems} completed={checklistState} onToggle={handleToggleChecklist} />}
        />
        <Route path="*" element={<HomePage onCycle={handleHeroCycle} />} />
      </Routes>
      <MobileNav />
    </div>
  );
}

export default App;
