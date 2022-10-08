import Project from "../Project/Project";
import brainflix from "../../assets/images/brainflix.png";
import brainflixSmall from "../../assets/images/brainflix-small.png";
import bandsite from "../../assets/images/bandsite-shows.png";
import bandsiteSmall from "../../assets/images/bandsite-shows-small.png";

import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__ref" id="projects"></div>
      <h3 className="projects__title">Projects</h3>
      <Project
        title="BrainFlix"
        description="Fully responsive SPA for a social video network created with React, REST API, and Axios."
        image={brainflix}
        imageSmall={brainflixSmall}
        liveSiteUrl="https://toki-urata-brainflix.netlify.app/"
        codeUrl="https://github.com/TokiUrata/toki-urata-brainflix"
      />
      <Project
        title="Bandsite"
        description="Fully responsive website for a band using JavaScript, DOM manipulation, Sass, BEM methodology, and SoundCloud integration."
        image={bandsite}
        imageSmall={bandsiteSmall}
        liveSiteUrl="https://toki-urata-bandsite.netlify.app/"
        codeUrl="https://github.com/TokiUrata/toki-urata-bandsite"
      />
    </div>
  );
}

export default Projects;
