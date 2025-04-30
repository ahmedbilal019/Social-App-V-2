import React from "react";

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <>
      <center className="welcome_msg">
        <h1>Nothing will be posted yet!</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onGetPostsClick}
        >
          GET POSTS FROM SERVER
        </button>
      </center>
      ;
    </>
  );
};

export default WelcomeMessage;
