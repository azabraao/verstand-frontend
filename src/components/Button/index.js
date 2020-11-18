import React, { memo } from "react";
import ButtonStyle from "./styles";

const Button = ({ isLoading, children, ...props }) => {
  return (
    <ButtonStyle {...props}>{isLoading ? "Loading..." : children}</ButtonStyle>
  );
};

export default memo(Button);
