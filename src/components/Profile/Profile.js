import React, { useState } from 'react';
import './Profile.css'
import Bookmarks from './Bookmarks';
import Edit from './EditProfile';
import { Link, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router';
import { AiFillHeart } from "react-icons/ai"
import {BiComment} from "react-icons/bi"

function Profile() {
  const [activeTab, setActiveTab] = useState('illustrations');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'bookmarks') {
      <Bookmarks/>
    }
  };

  return (
    <header>
      <div className="container">
        <div className="profile">
          <div className="profile-image">
            <img
              src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
              alt=""
            />
          </div>
          <div className="profile-user-settings">
            <h1 className="profile-user-name">janedoe_</h1>
            <button className="btn profile-edit-btn">Edit Profile </button>
            <button
              className="btn profile-settings-btn"
              aria-label="profile settings"
            >
              <i className="fas fa-cog" aria-hidden="true"></i>
            </button>
          </div>
          <div className="profile-stats">
            <ul>
              <li>
                <span className="profile-stat-count">164</span> posts
              </li>
              <li>
                <span className="profile-stat-count">188</span> followers
              </li>
              <li>
                <span className="profile-stat-count">206</span> following
              </li>
            </ul>
          </div>
        </div>
        {/* End of profile section */}
        </div>
        <div className="profile-links">
        <div
          className={`profile-linksatLine ${activeTab === 'illustrations' ? 'active' : ''}`}
          onClick={() => handleTabClick('illustrations')}
        >
          Illustrations
        </div>
        <div
          className={`profile-linksatLine ${activeTab === 'bookmarks' ? 'active' : ''}`}
          onClick={() => handleTabClick('bookmarks')} 
        > 
          Bookmarks
        </div>
      
      </div>
      {/* End of container */}
      
    </header>
    
  )
}
export default Profile