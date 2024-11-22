import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";

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

        <div className="project">
          <a
            href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Transfer Evaluation Matrix</h2>
          </a>
          <p>
            Created an interactive CSV table generator with Java, Handlebars,
            and LESS. This project helps transfer students to quickly identify
            eligible credits.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/yujisatojr/submeowrine"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/yujisatojr/submeowrine"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Submeowrine</h2>
          </a>
          <p>
            Developed and released an Android mobile application using Java and
            Android Studio that runs a 2D shooting game.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
