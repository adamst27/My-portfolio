import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};
export default HomePage;
