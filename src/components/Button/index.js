import React, { memo } from "react";
import LinkStyle from "./linkStyle";
import ButtonStyle from "./styles";

const Button = ({ isLoading, href, className, size, children, ...props }) => {
  if (href) {
    return (
      <LinkStyle {...props} href={href}>
        {children}
      </LinkStyle>
    );
  }

  return (
    <ButtonStyle {...props} className={`${size} ${className}`}>
      {isLoading ? "Loading..." : children}
    </ButtonStyle>
  );
};

export default memo(Button);
