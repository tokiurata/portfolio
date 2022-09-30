import "./Projects.scss";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h3 className="projects__title">Projects</h3>
      <div className="project">
        <div className="project__copy">
          <h4 className="project__header">Project Title</h4>
          <p className="project__body">
            Description of the project. Blah blah blah HTML, CSS, Sass, JavaScript
          </p>
        </div>
        <div className="project__image-container">
          -- here goes the image of the project --
        </div>
      </div>
      <div className="project">
        <div className="project__image-container">
          -- here goes the image of the project --
        </div>
        <div className="project__copy">
          <h4 className="project__header">Project Title</h4>
          <p className="project__body">
            Description of the project. Blah blah blah HTML, CSS, Sass, JavaScript
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
