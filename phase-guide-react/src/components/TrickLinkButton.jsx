import { useState } from "react";

const TrickLinkButton = ({ label, url, hint }) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(true);
  };

  return (
    <span className={`trick-link ${revealed ? "trick-link--open" : ""}`}>
      <button type="button" className="trick-link__button" onClick={handleClick} aria-expanded={revealed}>
        {label}
      </button>
      {revealed && (
        <span className="trick-link__hint">
          {hint}{" "}
          <a href={url} target="_blank" rel="noreferrer">
            Inspect anomaly
          </a>
        </span>
      )}
    </span>
  );
};

export default TrickLinkButton;
