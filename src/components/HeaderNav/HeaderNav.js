import "./HeaderNav.scss";

function HeaderNav() {
  return (
    <nav className="headernav">
      <div className="headernav__ref" id="home"></div>
      <div className="headernav__container">
        <a href="/">
          <h1 className="headernav__logo">Toki Urata</h1>
        </a>
        <ul className="headernav__nav">
          <li className="headernav__nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="headernav__nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="headernav__nav-item">
            <a href="#techstack">Tech Stack</a>
          </li>
          <li className="headernav__nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;
