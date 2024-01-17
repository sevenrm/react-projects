import React, { useState } from "react";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        aria-label="value"
      />
      <p>Value: {inputValue}</p>
    </div>
  );
};

export default InputForm;
