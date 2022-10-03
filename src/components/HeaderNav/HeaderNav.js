import "./HeaderNav.scss";

function HeaderNav() {
  return (
    <nav className="headernav">
      <h1 className="logo-name">Toki Urata</h1>
      <ul className="headernav__nav">
        <li className="headernav__nav-item">
          <a href="/">Home</a>
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
    </nav>
  );
}

export default HeaderNav;
