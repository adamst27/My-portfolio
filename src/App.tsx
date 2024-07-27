import { Route, Routes } from "react-router";
import HomePage from "./components/pages/home";
import About from "./components/sections/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
