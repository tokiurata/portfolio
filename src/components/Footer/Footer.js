import './Footer.scss';

const displayYear = () => {
  const year = new Date().getFullYear();
  return year;
};

const Footer = () => {
  return (
    <div className="footer">
      <small className="footer__author">
        <span className="footer__copyright">©</span> {displayYear()} Toki Urata
      </small>
    </div>
  );
};

export default Footer;
