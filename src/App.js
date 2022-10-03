import HeaderNav from "./components/HeaderNav/HeaderNav";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"

import "./App.scss";

function App() {
  return (
    <div className="app">
      <HeaderNav />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
