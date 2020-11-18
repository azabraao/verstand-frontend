import styled from "styled-components";

const ProfileStyle = styled.section`
  background: #000;
  min-height: 100vh;
  color: #ffffff;
  padding-top: 120px;
  padding-bottom: 120px;
  font-size: 28px;
  text-align: center;
  line-height: 1.7;
  background: linear-gradient(270deg, #138769, #272d2c);
  background-size: 400% 400%;
  -webkit-animation: MovingBackground 6s ease infinite;
  -moz-animation: MovingBackground 6s ease infinite;
  animation: MovingBackground 6s ease infinite;

  a {
    color: #ffffff;
    display: block;
    margin-top: 24px;
  }

  @-webkit-keyframes MovingBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes MovingBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes MovingBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default ProfileStyle;