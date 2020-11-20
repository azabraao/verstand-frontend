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

  header {
    margin-bottom: 24px;
  }

  a {
    color: #ffffff;
    display: block;
    margin-top: 24px;
  }

  article {
    p:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export default ProfileStyle;
