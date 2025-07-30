import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import "./ContactMedia.css"
export default function Contact() {
  return (
    <>
    <section className='mt-5 bg-white d-flex justify-content-center align-items-center p-5'>
      <div className="container">
        <div className="heading">
          <h1 className="text-dark fw-bolder fs-1 mt-5 text-center">
            CONTACT COMPONENT
          </h1>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-2">
          <div className="line-L bg-dark"></div>
          <div className="star">
            <FontAwesomeIcon icon={faStar} className="text-dark" />
          </div>
          <div className="line-R bg-dark"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="form-body d-flex align-items-center flex-column position-relative my-5">
              <input type="text" className="form-control mb-3 my-3 borderless-input" placeholder="userName" />
              <input type="number" className="form-control mb-3 my-3 borderless-input" placeholder="userAge" />
              <input type="email" className="form-control mb-3 my-3 borderless-input" placeholder="userEmail" />
              <input type="password" className="form-control mb-3 my-3 borderless-input" placeholder="userPassword"/>
              <button type="submit" className="btn btn-success w-100 mt-3">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}


    