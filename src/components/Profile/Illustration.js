import React from 'react'
import Profile from './Profile';
import './Illustration.css'
import { AiFillHeart } from "react-icons/ai"
import {BiComment} from "react-icons/bi"


function Illustration() {
    return (
        <header>
        <Profile />
<div className="container">
          <div className="gallery">
            <div className="gallery-item" tabIndex="0">
              <img
                src="https://i.ibb.co/tcTPRkL/Whats-App-Image-2022-04-03-at-12-10-49-AM-1.jpg"
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> <AiFillHeart/>56 
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> <BiComment/>2
                  </li>
                </ul>
              </div>
            </div>
            <div className="gallery-item" tabIndex="0">
              <img
                src="https://i.ibb.co/tHbw3wK/7117bad2-a7cd-464c-88f4-823981a7ca00.jpg"
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> <AiFillHeart/>5
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> <BiComment/>20
                  </li>
                </ul>
              </div>
            </div>
            {/* Add more gallery items following the same structure */}
          </div>
          {/* End of gallery */}
          <div className="loader"></div>
        </div>
        </header>
        )
    }

export default Illustration