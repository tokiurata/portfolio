import "./Project.scss";

const Project = ({ title, description, image, imageSmall, liveSiteUrl, codeUrl }) => {
  return (
    <div className="project">
      <div className="project__copy">
        <h4 className="project__header">
          {title}
        </h4>
        <p className="project__body">
          {description}
        </p>
        <a className="project__link" href={liveSiteUrl}>
          View live site
        </a>
        <a className="project__link" href={codeUrl}>
          View code
        </a>
      </div>
      <div className="project__image-container">
        <img className="project__image" src={image} alt={title} />
        <img className="project__image--small" src={imageSmall} alt={title} />
      </div>
    </div>
  );
}

export default Project;
