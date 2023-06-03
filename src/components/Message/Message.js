import React from 'react';
import './Message.css';

function Message() {
  return (
    <div className="MessagePage">
      <header className="MessageHeader">
        
      </header>
      <div className="MessageList">
        <div className="MessageItem">
          <div className="MessageAvatar">
            <img
              src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
              alt="User Avatar"
              className="AvatarImage"
            />
          </div>
          <div className="MessageContent">
            <h2 className="MessageUsername">john_doe</h2>
            <p className="MessageText">Hey, how are you?</p>
            <span className="MessageTimestamp">2h ago</span>
          </div>
        </div>
        <div className="MessageItem">
          <div className="MessageAvatar">
            <img
              src="https://i.ibb.co/tHbw3wK/7117bad2-a7cd-464c-88f4-823981a7ca00.jpg"
              alt="User Avatar"
              className="AvatarImage"
            />
          </div>
          <div className="MessageContent">
            <h2 className="MessageUsername">jane_smith</h2>
            <p className="MessageText">I'm good, thanks! How about you?</p>
            <span className="MessageTimestamp">1h ago</span>
          </div>
        </div>
        {/* Add more message items as needed */}
      </div>
    </div>
  );
}

export default Message;
