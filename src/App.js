import HeaderNav from "./components/HeaderNav/HeaderNav";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects"

import "./App.scss";

function App() {
  return (
    <div className="app">
      <HeaderNav />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
