import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <>
      <section className="about-section mt-5 d-flex justify-content-center align-items-center">
        <div className="container mt-5">
          <div className="heading">
            <h1 className="text-white fs-1 fw-bolder text-center">ABOUT COMPONENT</h1>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-2">
            <div className="line-L bg-white"></div>
            <div className="star">
              <FontAwesomeIcon icon={faStar} className="text-white" />
            </div>
            <div className="line-R bg-white"></div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-6">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
