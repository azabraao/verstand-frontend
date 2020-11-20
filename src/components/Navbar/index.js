import React, { memo, useEffect, useState, useCallback } from "react";
import Button from "../Button";
import NavbarStyle from "./styles";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import authService from "../../services/auth.service";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);

  const openedMenuCleanup = useCallback(() => {
    document.body.classList.remove("body-no-scroll");
    const scrollY = document.body.style.top;
    document.body.style.position = "inherit";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);

    document.body.scrollBehavior = "smooth";
    document.body.parentElement.style.scrollBehavior = "smooth";
  }, []);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("body-no-scroll");
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.scrollBehavior = "auto";
      document.body.parentElement.style.scrollBehavior = "auto";
    }

    return openedMenuCleanup;
  }, [isActive]);

  const logout = () => {
    authService.logout();
  };

  return (
    <NavbarStyle>
      <div className={classNames("Navbar__menu", { isActive })}>
        <ul>
          <li className="Navbar__menu-item">
            <NavLink to="/sleeve" activeClassName="active">
              Sleeve
            </NavLink>
          </li>
          <li className="Navbar__menu-item">
            <NavLink to="/download" activeClassName="active">
              Download
            </NavLink>
          </li>
          <li className="Navbar__menu-button">
            <Button theme="danger" onClick={logout}>
              Exit
            </Button>
          </li>
        </ul>
      </div>
      <div
        onClick={toggleMenu}
        className={classNames("Navbar__hamburguer", { isActive })}
      >
        <span />
      </div>
      <div className="Navbar__logo">
        <h2>Verstand</h2>
      </div>
      <div className="Navbar__hamburguer-width"></div>
    </NavbarStyle>
  );
};

export default memo(Navbar);
