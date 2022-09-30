import HeaderNav from "./components/HeaderNav/HeaderNav";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <HeaderNav />
      <Hero />
      <Projects />
      <TechStack />
    </div>
  );
}

export default App;
