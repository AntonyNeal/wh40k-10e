import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const goToInitiation = () => {
    navigate("/initiation");
  };

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
      </div>
      <div className="hero__illust" aria-hidden="true">
        <div className="sigil sigil--outer"></div>
        <div className="sigil sigil--inner"></div>
        <span className="planet planet--gold"></span>
        <span className="planet planet--silver"></span>
        <span className="planet planet--silver planet--small"></span>
        <button type="button" className="sigil__dot sigil__dot--clickable" onClick={goToInitiation} aria-label="Go to mission briefing"></button>
      </div>
    </header>
  );
};

export default Hero;
