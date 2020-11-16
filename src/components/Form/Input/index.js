import React from "react";
import InputStyle from "./styles";

const Input = ({ label, type, error, ...props }) => {
  return (
    <InputStyle>
      <label>{label}</label>
      <input type={type} {...props} />
      <article>
        <p>{error}</p>
      </article>
    </InputStyle>
  );
};

export default Input;
