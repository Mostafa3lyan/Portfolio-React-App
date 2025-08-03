import React from "react";

const Footer = () => {
  return (
    <footer className="row m-0 text-white text-center flex-column d-flex justify-content-center align-content-center">
      <div className="col-md-6 w-100 p-5 footerContact">
        <div className="row">
          <div className="col-md-4 p-2">
            <h5>LOCATION</h5>
            <p>
              2215 John Daniel Drive <br />
              Clark, MO 65243
            </p>
          </div>
          <div className="col-md-4 p-2">
            <h5>AROUND THE WEB</h5>
            <div className="icons d-flex justify-content-center align-items-center gap-2">
              <div className="social-circle">
                <a href="#" title="Facebook">
                  <span>
                    <i className=" text-white fa-brands fa-facebook-f"></i>
                  </span>
                </a>
              </div>
              <div className="social-circle">
                <a href="#" title="Twitter">
                  <span>
                    <i className=" text-white fa-brands fa-twitter"></i>
                  </span>
                </a>
              </div>
              <div className="social-circle">
                <a href="#0" title="LinkedIn">
                  <span>
                    <i className=" text-white fa-brands fa-linkedin-in"></i>
                  </span>
                </a>
              </div>
              <div className="social-circle">
                <a href="#0" title="YouTube">
                  <span>
                    <i className=" text-white fa-brands fa-youtube"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-2">
            <h5>ABOUT FREELANCER</h5>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 w-100 p-3 copyWrite">
        <p>Copyright © Your Website 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
