import manifesto from "../data/manifesto.js";

const Initiation = () => {
  return (
    <section className="initiation" aria-label="Battle briefing">
      <div className="initiation__grid">
        <article>
          <p className="eyebrow">Army Designation</p>
          <h2>{manifesto.army}</h2>
          <p className="initiation__text">{manifesto.mission}</p>
        </article>
        <article>
          <p className="eyebrow">The Gameplan</p>
          <blockquote>
            <p>{manifesto.directive}</p>
          </blockquote>
        </article>
        <article>
          <p className="eyebrow">Know Your Enemy</p>
          <p className="initiation__text">{manifesto.riddle}</p>
          <p className="initiation__text initiation__whisper">
            {manifesto.madness}
          </p>
        </article>
        <article>
          <p className="eyebrow">Psychological Warfare</p>
          <p className="initiation__text">{manifesto.socialHack}</p>
          <p className="initiation__text initiation__whisper">
            Remember: Luca WANTS to fight. Let him want. Make him chase. Score while he bleeds.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Initiation;
