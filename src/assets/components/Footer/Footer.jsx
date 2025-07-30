import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="upper-footer">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center flex-row w-100">
            <div className="col-12 col-lg-4 flex-column my-3">
              <h4 className="text-white text-center fs-5 fw-bold">LOCATION</h4>
              <p className="text-white text-center">
                2215 John Daniel Drive Clark, MO 65243
              </p>
            </div>
            <div className="col-12 col-lg-4 flex-column my-3">
              <div className="head-around">
                <h4 className="text-white text-center fs-5 fw-bold">
                  AROUND THE WEB
                </h4>
              </div>
              <div className="around-icons d-flex justify-content-center align-items-center gap-2">
                <div className="fb border border-white rounded-circle d-flex justify-content-center align-items-center p-2">
                  <FontAwesomeIcon icon={faFacebookF} className="text-white" />
                </div>
                <div className="twit border border-white rounded-circle d-flex justify-content-center align-items-center p-2">
                  <FontAwesomeIcon icon={faTwitter} className="text-white" />
                </div>
                <div className="Li border border-white rounded-circle d-flex justify-content-center align-items-center p-2">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
                </div>
                <div className="global border border-white rounded-circle d-flex justify-content-center align-items-center p-2">
                  <FontAwesomeIcon icon={faGlobe} className="text-white" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 flex-column my-3">
              <h4 className="text-white text-center fs-5 fw-bold">
                ABOUT FREELANCER
              </h4>
              <p className="text-white text-center">
                Freelance is a free to use, licensed Bootstrap theme created by
                Mina
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lower-footer py-3">
        <p className="text-white text-center">Copyright © Your Website 2025</p>
      </div>
    </>
  );
}
