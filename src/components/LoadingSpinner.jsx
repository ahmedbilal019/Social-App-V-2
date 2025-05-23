import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="loading_container">
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
