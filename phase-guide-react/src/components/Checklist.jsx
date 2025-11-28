const Checklist = ({ items, completed, onToggle }) => {
  return (
    <section className="checklist" aria-label="Turn preparation checklist">
      <div className="checklist__header">
        <h2>Quick Turn Checklist</h2>
        <p>Toggle items as you complete them to keep reps clean and avoid missed triggers.</p>
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
