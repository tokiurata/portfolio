import "./Footer.scss";

function displayYear() {
  const year = new Date().getFullYear();
  return year;
}

function Footer() {
  return (
    <div className="footer">
      <small 
        className="footer__author"><span className="footer__copyright">©</span> Toki Urata {displayYear()}
      </small>
    </div>
  );
}

export default Footer;
