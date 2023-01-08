import "./index.scss";

import React from "react";
import GetImage from "../../components/GetImage";

const Projects = ({ projectArr }) => {
  return (
    <div className="projects">
      {projectArr.map((project) => {
        return <GetImage key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
