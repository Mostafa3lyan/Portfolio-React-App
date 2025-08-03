import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-5 p-5">
      <div className="d-flex justify-content-center align-items-center flex-column mt-5 p-5">
        <h3 className="text-uppercase text-white mt-5 pt-5 fs-1 fw-bold">
          about component
        </h3>
        <div className="star my-3">
          <i className=" fa-solid fa-star text-white "></i>
        </div>
        <div className="row mb-5 pb-5">
          <div className="col-md-6">
            <p className="text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
