import { Link } from "react-router-dom";

const Hero = ({ onCycle }) => {
  return (
    <header className="hero">
      <div className="hero__content">
        <p className="eyebrow">Encrypted – Hollow Colossus Relay</p>
        <h1 className="glitch" data-text="Invitation to the Neon Sect">
          Invitation to the Neon Sect
        </h1>
        <p className="lede">
          You have been selected to bear the chromed mask and walk beneath glitching constellations. This dossier keeps
          rewriting itself: sometimes it signs Julian's name, sometimes a serial number, sometimes a burning eye. Read,
          obey, and keep your mind liquid.
        </p>
        <p className="hero__obfus">
          Watermark trace: D.A.I.D.A.R.A.//BØTCHI.MYST.9. Most operatives skim past those initials. You should not.
        </p>
        <div className="hero__actions">
          <button type="button" id="cycleFocus" className="ghost" onClick={onCycle}>
            Cycle augury focus
          </button>
          <Link to="/phases" className="primary">
            Jump to breakdown
          </Link>
        </div>
      </div>
      <div className="hero__illust" aria-hidden="true">
        <div className="sigil sigil--outer"></div>
        <div className="sigil sigil--inner"></div>
        <span className="sigil__dot"></span>
      </div>
    </header>
  );
};

export default Hero;
