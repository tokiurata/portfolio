import "./HeaderNav.scss";

function HeaderNav() {
  return (
    <nav className="headernav">
      <h1 className="logo">Toki Urata</h1>
      <ul className="headernav__nav">
        <li>Projects</li>
        <li>Tech Stack</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
