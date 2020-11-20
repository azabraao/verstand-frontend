import styled from "styled-components";

const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  padding: 16px;
  position: relative;

  .Navbar__menu {
    position: fixed;
    color: white;
    background: #232431;
    left: 0;
    top: 0;
    z-index: 2;
    padding-top: 80px;
    min-height: 100vh;
    transition: transform 0.3s;
    transform: translateX(-100%);

    &.isActive {
      transform: translateX(0%);
    }

    ul {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .Navbar__menu-item {
        padding: 16px 40px;
        font-family: Netron;

        a.active {
          text-decoration: underline;
        }

        :before {
          content: "";
        }
      }

      .Navbar__menu-item,
      a {
        color: #ffffff;
        text-decoration: none;
        font-family: Netron;
      }
    }

    .Navbar__menu-button {
      position: absolute;
      bottom: 120px;
      margin: 0 auto;
      left: 0;
      right: 0;
      padding: 0;

      :before {
        content: "";
      }
    }
  }
  .Navbar__hamburguer-width,
  .Navbar__hamburguer {
    width: 32px;
  }

  .Navbar__hamburguer {
    position: relative;
    z-index: 2;
    cursor: pointer;
    height: 21px;
    display: flex;
    align-items: center;

    &.isActive {
      span {
        background: rgba(0, 0, 0, 0);

        &:before {
          bottom: 0;
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(135deg);
          top: -2px;
        }
      }
    }

    span {
      background: #fff;
      width: inherit;
      height: 2px;
      border-radius: 5px;
      position: relative;
      transition: 0.3s;

      &:before {
        bottom: 5.5px;
      }

      &:after {
        top: 4px;
      }

      &:before,
      &:after {
        content: "";
        position: relative;
        height: 2px;
        width: 32px;
        background: #fff;
        width: 32px;
        height: 2px;
        border-radius: 5px;
        position: relative;
        display: block;
        transition: 0.3s;
      }
    }
  }
  .Navbar__logo {
    text-align: center;
    color: #ffffff;

    h2 {
      font-size: 18px;
    }
  }
`;

export default NavbarStyle;
