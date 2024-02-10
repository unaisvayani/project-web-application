import React from "react";

const Event = () => {
  const handleClick = () => {
    alert("Alert message");
  };

  return (
    <div className="button-container">
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default Event;
