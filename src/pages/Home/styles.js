import styled from "styled-components";

const HomeStyle = styled.section`
  min-height: 100vh;
  color: #ffffff;
  padding: 120px 0;
  background: linear-gradient(270deg, #138769, #272d2c);
  background-size: 400% 400%;
  -webkit-animation: MovingBackground 6s ease infinite;
  -moz-animation: MovingBackground 6s ease infinite;
  animation: MovingBackground 6s ease infinite;
  text-align: center;

  h1 {
    font-size: 34px;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }

  p {
    font-size: 28px;
    text-align: center;
    line-height: 1.7;
    margin-bottom: 48px;
  }

  article {
  }

  .Home__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin: 0 auto;

    button {
      margin-bottom: 16px;
    }

    @media only screen and (min-width: 430px) {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }

  .Home__cta {
    margin-top: 80px;
    justify-content: center;
  }
`;

export default HomeStyle;
