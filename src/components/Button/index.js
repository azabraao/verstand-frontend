import React, { memo } from "react";
import LinkStyle from "./linkStyle";
import ButtonStyle from "./styles";

const Button = ({ isLoading, href, size, children, ...props }) => {
  if (href) {
    return (
      <LinkStyle {...props} href={href}>
        {children}
      </LinkStyle>
    );
  }

  return (
    <ButtonStyle {...props} className={size}>
      {isLoading ? "Loading..." : children}
    </ButtonStyle>
  );
};

export default memo(Button);
