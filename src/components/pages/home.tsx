import About from "../sections/About";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
    </main>
  );
};
export default HomePage;
