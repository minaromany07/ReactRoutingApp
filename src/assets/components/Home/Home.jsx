import React from 'react'
import programmer from "../../images/avataaars.svg"
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <section className='mt-5 d-flex justify-content-center align-items-center'>
        <div className='container w-75 mx-auto d-flex flex-column align-items-center justify-content-center text-center py-5 mt-5'>
            <div className="img-home w-25 mx-auto">
              <img src={programmer} alt="Programmer" className='w-100 d-block' />
            </div>
            <div className="heading">
              <h1 className='text-white fw-bolder fs-1 mt-5'>START FRAMEWORK</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-2">
                <div className="line-L bg-white"></div>
                <div className="star">
                  <FontAwesomeIcon icon={faStar} className="text-white" />
                </div>
                <div className="line-R bg-white"></div>
            </div>
            <div className="description text-center text-white p-1">
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </section>
  )
}
