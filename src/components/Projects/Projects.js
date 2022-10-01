import Project from "../Project/Project";

import "./Projects.scss";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h3 className="projects__title">Projects</h3>
      <Project
        description="This is the project description"
        image="Hero goes the image"
      />
    </div>
  );
}

export default Projects;
