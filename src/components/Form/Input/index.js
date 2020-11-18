import React from "react";
import InputStyle from "./styles";

const Input = React.forwardRef(({ label, type, error, ...props }, ref) => {
  return (
    <InputStyle>
      <label>{label}</label>
      <input ref={ref} type={type} {...props} />
      <article>
        <p>{error}</p>
      </article>
    </InputStyle>
  );
});

export default Input;
