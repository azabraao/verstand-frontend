import React, { memo } from "react";
import ButtonStyle from "./styles";

const Button = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default memo(Button);
