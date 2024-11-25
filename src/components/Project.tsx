import "../assets/styles/Project.scss";
import { projects } from "../data/projectData";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects?.map((project, index) => (
          <div className="project" key={index}>
            <a href={project?.link} target="_blank" rel="noreferrer">
              <img
                src={project?.img}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </a>
            <a href={project?.link} target="_blank" rel="noreferrer">
              <h2>{project?.name}</h2>
            </a>
            <p>{project?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
