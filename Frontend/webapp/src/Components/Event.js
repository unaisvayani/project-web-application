import React from "react";

const Event = () => {
  const handleClick = () => {
    alert("Alert message");
  };

  return <button onClick={handleClick}>Click for alert</button>;
};

export default Event;
