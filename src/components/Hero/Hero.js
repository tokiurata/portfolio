import "./Hero.scss";
// import avatar from "../../assets/avatar.webp";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__copy">
        <h2 className="hero__header">
          Hi! My name is <span className="hero__header--span">Toki</span>. I'm a 
        </h2>
        <h2 className="hero__header hero__header--big">
          Front End Developer
        </h2>
        <h2 className="hero__header">
          based in Canada. 🇨🇦
        </h2>
        <p className="hero__body">
          I'm a lifelong learner, committed to quality and accessible code. I strongly believe in teamwork and love collaborating with a diverse, multicultural team. I'm currently focusing on <span className="hero__body--span">React</span>, <span className="hero__body--span">Redux</span>, and <span className="hero__body--span">TypeScript</span>.
        </p>
      </div>
      {/* <img className="avatar" src={avatar} alt="Toki Urata"></img> */}
    </div>
  );
}

export default Hero;
