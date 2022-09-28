import "./Hero.scss";
import avatar from "../../assets/avatar.webp";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__copy-container">
        <h2 className="hero__copy">
          Hello! My name is Toki. I'm a <br/><span className="hero__copy-big">Front End Developer</span><br/>currently focusing on <span className="underline">React</span>, <span className="underline">Redux</span>, and <span className="underline">TypeScript</span>.
        </h2>
      </div>
      <img className="avatar" src={avatar} alt="Toki Urata"></img>
    </div>
  );
}

export default Hero;
