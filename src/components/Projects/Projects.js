import Project from '../Project/Project';
import mdjsnotes from '../../assets/images/mdjsnotes.png';
import mdjsnotesSmall from '../../assets/images/mdjsnotes-small.png';
import npmPackageSearch from '../../assets/images/npm-package-search.png';
import npmPackageSearchSmall from '../../assets/images/npm-package-search-small.png';
import bandsite from '../../assets/images/bandsite-shows.png';
import bandsiteSmall from '../../assets/images/bandsite-shows-small.png';
import brainflix from '../../assets/images/brainflix.png';
import brainflixSmall from '../../assets/images/brainflix-small.png';

import './Projects.scss';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__ref" id="projects"></div>
      <h3 className="projects__title">Projects</h3>
      <Project
        title="MDJS Notes"
        description="MDJS Notes in a Markdown and JavaScript in-browser code preview app using React, Redux, TypeScript, ESBuild, UNPKG, and localForage."
        image={mdjsnotes}
        imageSmall={mdjsnotesSmall}
        liveSiteUrl="https://mdjsnotes.netlify.app/"
        codeUrl="https://github.com/TokiUrata/mdjsnotes-app"
      />
      <Project
        title="NPM Package Search"
        description="Search App created with React, Redux, and TypeScript."
        image={npmPackageSearch}
        imageSmall={npmPackageSearchSmall}
        liveSiteUrl="https://npm-package-search.netlify.app/"
        codeUrl="https://github.com/TokiUrata/npm-package-search"
      />
      <Project
        title="Bandsite"
        description="Fully responsive website for a band using JavaScript, DOM manipulation, Sass, BEM methodology, and SoundCloud integration."
        image={bandsite}
        imageSmall={bandsiteSmall}
        liveSiteUrl="https://toki-urata-bandsite.netlify.app/"
        codeUrl="https://github.com/TokiUrata/toki-urata-bandsite"
      />
      <Project
        title="BrainFlix"
        description="Fully responsive SPA for a social video network created with React, REST API, and Axios."
        image={brainflix}
        imageSmall={brainflixSmall}
        liveSiteUrl="https://toki-urata-brainflix.netlify.app/"
        codeUrl="https://github.com/TokiUrata/toki-urata-brainflix"
      />
    </div>
  );
};

export default Projects;
