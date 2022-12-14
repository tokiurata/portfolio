import reactIcon from '../../assets/icons/react.svg';
import reduxIcon from '../../assets/icons/redux.svg';
import javascriptIcon from '../../assets/icons/javascript.svg';
import typescriptIcon from '../../assets/icons/typescript.svg';
import htmlIcon from '../../assets/icons/html.svg';
import cssIcon from '../../assets/icons/css3.svg';
import sassIcon from '../../assets/icons/sass.svg';
import npmIcon from '../../assets/icons/npm.svg';
import nodeIcon from '../../assets/icons/nodejs.svg';
import expressIcon from '../../assets/icons/express.svg';
import axiosIcon from '../../assets/icons/axios.svg';
import reactrouterIcon from '../../assets/icons/react-router.svg';

import './TechStack.scss';

const TechStack = () => {
  return (
    <div className="techstack">
      <div className="techstack__ref" id="techstack"></div>
      <div className="techstack__container">
        <h3 className="techstack__title">Tech Stack</h3>
        <div className="techs">
          <figure className="tech">
            <img
              className="tech__image tech__image--react"
              src={reactIcon}
              alt="React"
            />
            <figcaption className="tech__image-caption">React</figcaption>
          </figure>
          <figure className="tech">
            <img
              className="tech__image tech__image--redux"
              src={reduxIcon}
              alt="Redux"
            />
            <figcaption className="tech__image-caption">Redux</figcaption>
          </figure>
          <figure className="tech">
            <img
              className="tech__image tech__image--javascript"
              src={javascriptIcon}
              alt="JavaScript"
            />
            <figcaption className="tech__image-caption">TypeScript</figcaption>
          </figure>
          <figure className="tech">
            <img
              className="tech__image tech__image--html"
              src={htmlIcon}
              alt="HTML"
            />
            <figcaption className="tech__image-caption">JavaScript</figcaption>
          </figure>
          <figure className="tech">
            <img
              className="tech__image tech__image--typescript"
              src={typescriptIcon}
              alt="TypeScript"
            />
            <figcaption className="tech__image-caption">HTML</figcaption>
          </figure>
          <figure className="tech">
            <img
              className="tech__image tech__image--css"
              src={cssIcon}
              alt="CSS"
            />
            <figcaption className="tech__image-caption">CSS</figcaption>
          </figure>
          <figure className="tech">
            <img
              className="tech__image tech__image--npm"
              src={npmIcon}
              alt="Node Package Manager"
            />
            <figcaption className="tech__image-caption">
              Node Package Manager
            </figcaption>
          </figure>
          <figure className="tech">
            <img
              className="tech__image tech__image--sass"
              src={sassIcon}
              alt="Sass"
            />
            <figcaption className="tech__image-caption">Sass</figcaption>
          </figure>
          <figure className="tech">
            <img
              className="tech__image tech__image--node"
              src={nodeIcon}
              alt="Node"
            />
            <figcaption className="tech__image-caption">Node</figcaption>
          </figure>
          <figure className="tech">
            <img
              className="tech__image tech__image--express"
              src={expressIcon}
              alt="Express"
            />
            <figcaption className="tech__image-caption">Express</figcaption>
          </figure>
          <figure className="tech">
            <img
              className="tech__image tech__image--axios"
              src={axiosIcon}
              alt="Axios"
            />
            <figcaption className="tech__image-caption">Axios</figcaption>
          </figure>
          <figure className="tech">
            <img
              className="tech__image tech__image--reactrouter"
              src={reactrouterIcon}
              alt="React Router"
            />
            <figcaption className="tech__image-caption">
              React Router
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
