import avatar from "../../assets/images/avatar.webp";
import githubIcon from "../../assets/icons/github-light.svg";

import "./Contact.scss";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h3 className="contact__title">Contact</h3>
      <div className="contact__content">
        <img className="contact__image" src={avatar} alt="Toki Urata" />
        <address className="contact__copy-container">
          <div className="contact__copy">
            <h4 className="contact__header">Email</h4>
            <a 
              className="contact__body" 
              href="mailto:tokiurata@outlook.com"
            >tokiurata@outlook.com
            </a>
          </div>
          <div className="contact__copy">
            <h4 className="contact__header">GitHub</h4>
            <a 
              className="contact__body" 
              href="https://github.com/TokiUrata"
            >
              <img 
                src={githubIcon} 
                className="contact__icon" 
                alt="GitHub"
              />
            </a>
          </div>
        </address>
      </div>
    </div>
  );
}

export default Contact;
