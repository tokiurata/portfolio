import "./Project.scss";

function Project(props) {
  return (
    <div className="project">
      <div className="project__copy">
        <h4 className="project__header">
          {props.title}
        </h4>
        <p className="project__body">
          {props.description}
        </p>
      </div>
      <div className="project__image-container">
        <img className="project__image" src={props.image} alt={props.title} />
        <img className="project__image--small" src={props.imageSmall} alt={props.title} />
      </div>
    </div>
  );
}

export default Project;
