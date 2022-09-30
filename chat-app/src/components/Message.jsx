import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://i.pinimg.com/236x/c5/d5/44/c5d54481b5094dbc7d84f7ce1b0c0f18.jpg"
          alt="dp"
        />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello..!</p>
        <img src="https://i.pinimg.com/236x/c5/d5/44/c5d54481b5094dbc7d84f7ce1b0c0f18.jpg"
        alt="dp" />
      </div>
    </div>
  );
};

export default Message;
