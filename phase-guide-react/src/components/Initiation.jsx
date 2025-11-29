import { Link } from "react-router-dom";
import manifesto from "../data/manifesto.js";

const Initiation = () => {
  const scoring = manifesto.scoringBasics;
  const grandCoven = manifesto.grandCovenExplained;

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
        </article>
      </div>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* KINDRED SORCERY EXPLANATION */}
      {/* ════════════════════════════════════════════════════════════ */}
      <div className="kindred-sorcery">
        <h2 className="kindred-sorcery__title">{grandCoven.title}</h2>
        <p className="kindred-sorcery__concept">{grandCoven.concept}</p>

        <div className="kindred-sorcery__rules">
          {grandCoven.rules.map((rule, i) => (
            <div key={i} className="kindred-sorcery__rule">
              <h4 className="kindred-sorcery__rule-name">{rule.name}</h4>
              <p className="kindred-sorcery__rule-effect">{rule.effect}</p>
              <p className="kindred-sorcery__rule-simple">💡 {rule.simple}</p>
            </div>
          ))}
        </div>

        <div className="kindred-sorcery__when">
          <h3>{grandCoven.whenToUse.title}</h3>
          <ul className="kindred-sorcery__tips">
            {grandCoven.whenToUse.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="kindred-sorcery__enhancements">
          <h3>💎 Your Enhancements</h3>
          {grandCoven.keyEnhancements.map((enh, i) => (
            <div key={i} className="kindred-sorcery__enhancement">
              <strong>{enh.name}</strong> — {enh.bearer}
              <p>{enh.effect}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* DETAILED SCORING GUIDE FOR LOUIS */}
      {/* ════════════════════════════════════════════════════════════ */}
      <div className="scoring-guide">
        <h2 className="scoring-guide__title">{scoring.title}</h2>
        <p className="scoring-guide__intro">{scoring.intro}</p>

        {/* GOLDEN RULES AT TOP */}
        <div className="scoring-guide__golden-rules">
          {scoring.goldenRules.map((rule, i) => (
            <div key={i} className="scoring-guide__golden-rule">{rule}</div>
          ))}
        </div>

        <div className="scoring-guide__sections">
          {/* ══════════ PRIMARY MISSION ══════════ */}
          <div className="scoring-guide__section scoring-guide__section--full">
            <h3>📍 {scoring.primary.name}</h3>
            <p>{scoring.primary.explanation}</p>

            {/* How to Hold */}
            <div className="scoring-guide__subsection">
              <h4>{scoring.primary.howToHold.title}</h4>
              <ol className="scoring-guide__steps">
                {scoring.primary.howToHold.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
              <p className="scoring-guide__sticky">
                🔄 {scoring.primary.howToHold.sticky}
              </p>
            </div>

            {/* Points Table */}
            <div className="scoring-guide__subsection">
              <h4>Points You Score</h4>
              <div className="scoring-guide__table">
                {scoring.primary.points.map((row, i) => (
                  <div key={i} className="scoring-guide__row">
                    <span>{row.scenario}</span>
                    <span className="scoring-guide__vp">{row.vp}</span>
                  </div>
                ))}
              </div>
              <p className="scoring-guide__max">{scoring.primary.maxPerTurn}</p>
            </div>

            {/* Sites of Power */}
            <div className="scoring-guide__subsection scoring-guide__sites">
              <h4>{scoring.primary.sitesOfPower.title}</h4>
              <p>{scoring.primary.sitesOfPower.explanation}</p>
              <p className="scoring-guide__bonus">{scoring.primary.sitesOfPower.bonus}</p>
              <p className="scoring-guide__whygood">💡 {scoring.primary.sitesOfPower.whyGood}</p>
            </div>
          </div>

          {/* ══════════ SECONDARY OBJECTIVES ══════════ */}
          <div className="scoring-guide__section scoring-guide__section--full">
            <h3>🎯 {scoring.secondary.name}</h3>
            <p>{scoring.secondary.explanation}</p>

            {/* How It Works */}
            <div className="scoring-guide__subsection">
              <h4>How Secondaries Work</h4>
              <ol className="scoring-guide__steps">
                {scoring.secondary.howItWorks.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Good Secondaries */}
            <div className="scoring-guide__subsection">
              <h4>✅ YOUR SECONDARY PICKS</h4>
              
              {/* The Picks */}
              <div className="scoring-guide__picks">
                <div className="scoring-guide__pick-box">
                  <span className="scoring-guide__pick-label">PICK #1</span>
                  <span className="scoring-guide__pick-name">{scoring.secondary.yourPicks.primary}</span>
                </div>
                <div className="scoring-guide__pick-box">
                  <span className="scoring-guide__pick-label">PICK #2</span>
                  <span className="scoring-guide__pick-name">{scoring.secondary.yourPicks.secondary}</span>
                </div>
              </div>
              <p className="scoring-guide__pick-reason">{scoring.secondary.yourPicks.reasoning}</p>

              <div className="scoring-guide__cards">
                {scoring.secondary.goodForYou.map((sec, i) => (
                  <div key={i} className="scoring-guide__card scoring-guide__card--good">
                    <div className="scoring-guide__card-header">
                      <strong>{sec.name}</strong>
                      <span className="scoring-guide__card-vp">{sec.vp}</span>
                    </div>
                    <p>{sec.how}</p>
                    <p className="scoring-guide__card-tip">💡 {sec.tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="scoring-guide__warning">⚠️ {scoring.secondary.warning}</p>
          </div>

          {/* ══════════ TURN BY TURN ══════════ */}
          <div className="scoring-guide__section scoring-guide__section--full">
            <h3>{scoring.turnByTurn.title}</h3>
            <div className="scoring-guide__totals">
              {scoring.turnByTurn.turns.map((t, i) => (
                <div key={i} className="scoring-guide__total-row">
                  <span className="scoring-guide__total-turn">Turn {t.turn}</span>
                  <span className="scoring-guide__total-vp">{t.total} VP</span>
                  <span className="scoring-guide__total-note">{t.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Link to Roster */}
        <Link to="/roster" className="scoring-guide__roster-link">
          📋 View Your Army List →
        </Link>
      </div>
    </section>
  );
};

export default Initiation;