import React, { useState } from 'react';
import './Home.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function Home() {
  const [likedImages, setLikedImages] = useState([]);
  const [likesCount, setLikesCount] = useState({});
  const [enlargedImages, setEnlargedImages] = useState({});

  const handleLikeClick = (imageId) => {
    setLikedImages((prevLikedImages) => {
      if (prevLikedImages.includes(imageId)) {
        return prevLikedImages.filter((id) => id !== imageId);
      } else {
        return [...prevLikedImages, imageId];
      }
    });

    setLikesCount((prevLikesCount) => {
      if (prevLikesCount.hasOwnProperty(imageId)) {
        if (likedImages.includes(imageId)) {
          return { ...prevLikesCount, [imageId]: prevLikesCount[imageId] - 1 };
        } else {
          return { ...prevLikesCount, [imageId]: prevLikesCount[imageId] + 1 };
        }
      } else {
        return { ...prevLikesCount, [imageId]: 1 };
      }
    });
  };
  

  const handleImageClick = (imageId) => {
    setEnlargedImages((prevEnlargedImages) => {
      return { ...prevEnlargedImages, [imageId]: !prevEnlargedImages[imageId] };
    });
  };

  return (
    <div className="container">
      <div className="image-row">
        <div className={`image-card ${enlargedImages['image1'] ? 'enlarged' : ''}`}>
          <img
            src="https://i.ibb.co/tHbw3wK/7117bad2-a7cd-464c-88f4-823981a7ca00.jpg"
            alt="Image 1"
            className="image"
            onClick={() => handleImageClick('image1')}
          />
          <div className="image-title">Image 1</div>
          <div className="profile-info">
            <img
              src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
              alt="Profile"
              className="profile-picture"
            />
            <div className="username">User1</div>
          </div>
          <button
            className={`heart-emoji ${likedImages.includes('image1') ? 'active' : ''}`}
            onClick={() => handleLikeClick('image1')}
          >
            {likedImages.includes('image1') ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
          <div className="likes-count">{likesCount['image1'] || 0} likes</div>
        </div>
        <div className={`image-card ${enlargedImages['image2'] ? 'enlarged' : ''}`}>
          <img
            src="https://i.ibb.co/tcTPRkL/Whats-App-Image-2022-04-03-at-12-10-49-AM-1.jpg"
            alt="Image 2"
            className="image"
            onClick={() => handleImageClick('image2')}
          />
          <div className="image-title">Image 2</div>
          <div className="profile-info">
            <img
              src="https://i.ibb.co/tHbw3wK/7117bad2-a7cd-464c-88f4-823981a7ca00.jpg"
              alt="Profile"
              className="profile-picture"
            />
            <div className="username">User2</div>
            
          </div>
          <button
            className={`heart-emoji ${likedImages.includes('image2') ? 'active' : ''}`}
            onClick={() => handleLikeClick('image2')}
          >
            {likedImages.includes('image2') ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
          <div className="likes-count">{likesCount['image2'] || 0} likes</div>
        </div>
        {/* Add more image cards */}
      </div>
    </div>
  );
}

export default Home;
