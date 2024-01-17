import React, { useState } from "react";

const ButtonComponent = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <button onClick={handleClick}>{clicked ? "Clicked" : "Click Me"}</button>
  );
};

export default ButtonComponent;
