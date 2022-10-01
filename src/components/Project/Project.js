import "./Project.scss";

function Project(props) {
  return (
    <div className="project">
      <div className="project__copy">
        <h4 className="project__header">Project Title</h4>
        <p className="project__body">
          {props.description}
        </p>
      </div>
      <div className="project__image-container">
        {props.image}
      </div>
    </div>
  );
}

export default Project;
