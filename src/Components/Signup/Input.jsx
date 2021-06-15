import React, { useState } from "react";

const Input = ({ type, placeholder, className }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const getInput = e.target.value;
    setValue(getInput);
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
