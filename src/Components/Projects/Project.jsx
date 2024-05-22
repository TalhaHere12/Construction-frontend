import React from "react";
import bg from "/Construction Site/my-app/src/Images/bg-2.jpg";
import img1 from "/Construction Site/my-app/src/Images/img-1.jpg";
import img2 from "/Construction Site/my-app/src/Images/img-2.jpg";
import img3 from "/Construction Site/my-app/src/Images/img-3.jpg";
import "./Project.css";
function Project() {
  return (
    <div className="Project">
      <div className="bg-img">
        <img src={bg}></img>
        <p className="Project-title">Our Work</p>
        <p className="Project-heading">Explore our recent projects </p>

        <div className="button-grid">
            <button>View all Projects</button>
        </div>

        <div className="project-grid">
          <img src={img1} className="project-image1" />
        </div>

        <div className="project-grid2">
          <img src={img2} className="project-image2" />
        </div>

        <div className="project-grid3">
          <img src={img3} className="project-image3" />
        </div>
      </div>
    </div>
  );
}

export default Project;
