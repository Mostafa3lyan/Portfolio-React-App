import React from "react";

const Contact = () => {
  return (
    <div className="container-fluid mx-auto mt-5 p-5 bg-white">
      <div className="portfolioComponent d-flex justify-content-center align-items-center flex-column mt-5">
        <h3 className="text-uppercase bg-grey fs-1 fw-bold">contact section</h3>

        <div className="star my-3">
          <i className="fa-solid fa-star bg-grey"></i>
        </div>

        <form
          action=""
          className="w-100 d-flex flex-column align-items-center p-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-3 w-50">
            <label htmlFor="username" className="form-label"></label>
            <input
              type="text"
              className="form-control border-0 border-bottom"
              id="username"
              placeholder="userName"
            />
          </div>

          <div className="mb-3 w-50">
            <label htmlFor="age" className="form-label"></label>
            <input
              type="text"
              className="form-control border-0 border-bottom"
              id="age"
              placeholder="userAge"
            />
          </div>

          <div className="mb-3 w-50">
            <label htmlFor="email" className="form-label"></label>
            <input
              type="email"
              className="form-control border-0 border-bottom"
              id="email"
              placeholder="userEmail"
            />
          </div>

          <div className="mb-3 w-50">
            <label htmlFor="password" className="form-label"></label>
            <input
              type="password"
              className="form-control border-0 border-bottom"
              id="password"
              placeholder="userPassword"
            />
          </div>

          <div className="mb-3 w-50">
            <button type="submit" className="btn w-25">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
