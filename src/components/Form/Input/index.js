import React from "react";
import InputStyle from "./styles";

const Input = React.forwardRef(
  ({ name, label, type, error, ...props }, ref) => {
    return (
      <InputStyle>
        <label for={name}>{label}</label>
        <input ref={ref} id={name} name={name} type={type} {...props} />
        <article>
          <p>{error}</p>
        </article>
      </InputStyle>
    );
  }
);

export default Input;
