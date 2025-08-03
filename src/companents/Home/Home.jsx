import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto mt-5 p-5">
      <div className="d-flex justify-content-center align-items-center flex-column mt-5 p-5">
        <img
          className="mb-4 w-25"
          src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
          alt="profile-avatar"
        />
        <h3 className="text-uppercase text-white fs-1 fw-bold">
          start Framework
        </h3>
        <div className="star my-3">
          <i className=" fa-solid fa-star text-white "></i>
        </div>
        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
};

export default Home;
