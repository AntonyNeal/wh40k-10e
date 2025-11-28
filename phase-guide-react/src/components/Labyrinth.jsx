import { useMemo, useState } from "react";
import labyrinthNodes from "../data/labyrinth.js";

const Labyrinth = () => {
  const [activeNodeId, setActiveNodeId] = useState(labyrinthNodes[0]?.id ?? "");

  const shuffledNodes = useMemo(() => {
    return [...labyrinthNodes].sort(() => Math.random() - 0.5);
  }, [activeNodeId]);

  const activeNode = labyrinthNodes.find((node) => node.id === activeNodeId) ?? labyrinthNodes[0];

  const traverse = (targetId) => {
    setActiveNodeId(targetId);
    document.getElementById(`node-${targetId}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="labyrinth" aria-label="Non-linear dossier">
      <header className="labyrinth__header">
        <p className="eyebrow">Labyrinthine Brief</p>
        <h2>Choose a fragment. Lose the map.</h2>
        <p>
          There is no linear path anymore. Each fragment contradicts the last. Some were typed by Julian, some by a
          masked intruder, and the rest by the stonefoot mystics who pretend to be glitching servers.
        </p>
      </header>
      <div className="labyrinth__grid">
        {shuffledNodes.map((node) => (
          <article
            key={node.id}
            id={`node-${node.id}`}
            className={`labyrinth-card${node.id === activeNodeId ? " active" : ""}`}
            onClick={() => setActiveNodeId(node.id)}
          >
            <header>
              <h3>{node.title}</h3>
            </header>
            <p>{node.body}</p>
            <ul>
              {node.suspicions.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="labyrinth-card__links">
              {node.references.map((refId) => (
                <button key={refId} type="button" onClick={() => traverse(refId)}>
                  {refId}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
      <aside className="labyrinth__aside">
        <p className="eyebrow">Currently Echoing</p>
        <h3>{activeNode.title}</h3>
        <p>{activeNode.body}</p>
        <p className="labyrinth__aside-note">Suspicions:</p>
        <ul>
          {activeNode.suspicions.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default Labyrinth;
