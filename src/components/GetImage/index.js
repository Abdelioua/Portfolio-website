import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GetImage = ({ project }) => {
  const [img, setImg] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await import(`../../assets/images/${project.name}.png`);
        setImg(res.default);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImage();
  }, [project.name]);
  return (
    <div
      className="project-box"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="content">
        <h2 className="text">{project.name}</h2>
        <div className="icons">
          <a href={project.html_url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={`https://abdelioua.github.io/${project.name}/`}
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEye} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetImage;
