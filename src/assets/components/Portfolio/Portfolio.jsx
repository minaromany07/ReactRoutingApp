import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import house from "../../images/poert1.png";
import candy from "../../images/port2.png";
import funnyTene from "../../images/port3.png";
import "./Portfolio.css";
export default function Portfolio() {
  return (
    <>
      <section className="portfolio-section mt-5 d-flex justify-content-center bg-white p-5">
        <div className="container">
          <div className="heading">
            <h1 className="text-dark fw-bolder fs-1 mt-5 text-center">
              PORTFOLIO COMPONENT
            </h1>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-2">
            <div className="line-L bg-dark"></div>
            <div className="star">
              <FontAwesomeIcon icon={faStar} className="text-dark" />
            </div>
            <div className="line-R bg-dark"></div>
          </div>



          <div className="row g-3">
            <div className="col-12 col-lg-4">
              <div className="img-port  position-relative"> 
                <img src={house} alt="House" className="w-100 d-block rounded"/>
                <div className="layer-hover position-absolute opacity-0 d-flex justify-content-center align-items-center rounded">
                   <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPlus} className="text-white fs-1 fw-bolder"/>
                  </div> 
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="img-port  position-relative"> 
                <img src={candy} alt="Candy" className="w-100 d-block rounded" />
               <div className="layer-hover position-absolute opacity-0 d-flex justify-content-center align-items-center rounded">
                <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faPlus} className="text-white fs-1" />
                </div>
              </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="img-port  position-relative"> 
                <img
                  src={funnyTene}
                  alt="Funny Tene"
                  className="w-100 d-block rounded"
                />
                <div className="layer-hover position-absolute opacity-0 d-flex justify-content-center align-items-center rounded">
                  <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPlus} className="text-white fs-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="img-port  position-relative"> 
                <img src={house} alt="House" className="w-100 d-block rounded" />
                <div className="layer-hover position-absolute opacity-0 d-flex justify-content-center align-items-center rounded">
                  <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPlus} className="text-white fs-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="img-port  position-relative"> 
                <img src={candy} alt="Candy" className="w-100 d-block rounded" />
                <div className="layer-hover position-absolute opacity-0 d-flex justify-content-center align-items-center rounded">
                  <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPlus} className="text-white fs-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="img-port  position-relative"> 
                <img
                  src={funnyTene}
                  alt="Funny Tene"
                  className="w-100 d-block rounded"
                />
                <div className="layer-hover position-absolute opacity-0 d-flex justify-content-center align-items-center rounded">
                  <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPlus} className="text-white fs-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="img-port  position-relative"> 
                <img src={house} alt="House" className="w-100 d-block rounded" />
                <div className="layer-hover position-absolute opacity-0 d-flex justify-content-center align-items-center rounded">
                  <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPlus} className="text-white fs-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="img-port  position-relative"> 
                <img src={candy} alt="Candy" className="w-100 d-block rounded" />
                <div className="layer-hover position-absolute opacity-0 d-flex justify-content-center align-items-center rounded">
                  <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPlus} className="text-white fs-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="img-port  position-relative"> 
                <img
                  src={funnyTene}
                  alt="Funny Tene"
                  className="w-100 d-block rounded"
                />
                <div className="layer-hover position-absolute opacity-0 d-flex justify-content-center align-items-center rounded">
                  <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPlus} className="text-white fs-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
