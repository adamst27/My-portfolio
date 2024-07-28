import { Route, Routes } from "react-router";
import HomePage from "./components/pages/home";
import About from "./components/sections/About";
import Navigation from "./components/navigation/Navigation";
import Projects from "./components/sections/Projects";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
