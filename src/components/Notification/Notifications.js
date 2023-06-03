import React, { useState } from 'react';
import './Notifications.css';

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  const handleLike = (imageId, username) => {
    const newNotification = {
      id: Date.now(),
      imageId,
      username,
    };

    setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="notifications-page">
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <>
          <div className="notifications-list">
            {notifications.map((notification) => (
              <div key={notification.id} className="notification-item">
                <span className="notification-text">
                  <strong>{notification.username}</strong> liked your image.
                </span>
                <span className="notification-image">{notification.imageId}</span>
              </div>
            ))}
          </div>
          <button className="clear-all-button" onClick={handleClearAll}>
            Clear All
          </button>
        </>
      )}
    </div>
  );
}

export default NotificationsPage;
