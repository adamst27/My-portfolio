import { Route, Routes } from "react-router";
import HomePage from "./components/pages/home";
import About from "./components/sections/About";
import Navigation from "./components/navigation/Navigation";
import { Analytics } from "@vercel/analytics/react";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const App = () => {
  return (
    <>
      <Analytics />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
