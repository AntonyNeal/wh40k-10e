import Hero from "../components/Hero.jsx";

const HomePage = ({ onCycle }) => {
  return (
    <main className="page page--home" aria-label="Neon sect invitation">
      <Hero onCycle={onCycle} />
    </main>
  );
};

export default HomePage;
