import Checklist from "../components/Checklist.jsx";

const ChecklistPage = ({ items, completed, onToggle }) => {
  return (
    <main className="page" aria-label="Pre-battle checklist">
      <Checklist items={items} completed={completed} onToggle={onToggle} />
    </main>
  );
};

export default ChecklistPage;
