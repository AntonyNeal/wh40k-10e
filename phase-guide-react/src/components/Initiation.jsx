import manifesto from "../data/manifesto.js";
import TrickLinkButton from "./TrickLinkButton.jsx";

const Initiation = () => {
  return (
    <section className="initiation" aria-label="Cult initiation message">
      <div className="initiation__grid">
        <article>
          <p className="eyebrow">Designation</p>
          <h2>{manifesto.army}</h2>
          <p className="initiation__text">{manifesto.mission}</p>
        </article>
        <article>
          <p className="eyebrow">Cipher-Riddle</p>
          <blockquote>
            <p>{manifesto.riddle}</p>
          </blockquote>
          <p className="initiation__text">{manifesto.directive}</p>
        </article>
        <article>
          <p className="eyebrow">Mad Savant Broadcast</p>
          <p className="initiation__text">{manifesto.madness}</p>
          <p className="initiation__text initiation__whisper">
            Background footsteps in the audio are not artifacts; they're the Mystics pacing on shoulders wider than city blocks.
          </p>
        </article>
        <article>
          <p className="eyebrow">Social Hack Briefing</p>
          <p className="initiation__text">{manifesto.socialHack}</p>
          <p className="initiation__text initiation__whisper">
            There are whispers about <TrickLinkButton label="heat in hidden galleries" url="https://glasstire.com/2019/06/29/the-occult-is-so-hot-right-now/" hint="A curator left sigils in the wall captions." />; interpret at your own peril.
          </p>
          <p className="initiation__text initiation__whisper">
            If the auguries drip, consult the <TrickLinkButton label="thirteenth crimson catalogue" url="https://www.shutterstock.com/search/occult-blood?page=13&dd_referrer=https%3A%2F%2Fwww.google.com%2F" hint="Page thirteen tastes of copper and static." /> and remember: Tzeentch admires collectors.
          </p>
          <p className="initiation__text initiation__whisper">
            When doubt hums, replay the <TrickLinkButton label="litanies of electric glass" url="https://www.youtube.com/watch?v=QngdF-55AGc" hint="Let the glass hymn align your synapses." />; their cadence keeps the Warp amused.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Initiation;
