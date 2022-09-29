import "./HeaderNav.scss";

function HeaderNav() {
  return (
    <nav className="headernav">
      <h1 className="logo-name">Toki Urata</h1>
      <ul className="headernav__nav">
        <li className="headernav__nav-item">Home</li>
        <li className="headernav__nav-item">Tech Stack</li>
        <li className="headernav__nav-item">Projects</li>
        <li className="headernav__nav-item">Contact</li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
