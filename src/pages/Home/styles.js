import styled from "styled-components";
import iconJson from "../../assets/images/icon-json.svg";

const HomeStyle = styled.section`
  min-height: 100vh;
  color: #ffffff;
  padding: 80px 0;

  @media only screen and (min-width: 768px) {
    padding: 120px 0;
  }

  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 35%,
    rgba(106, 112, 113, 1) 100%
  );
  background-size: 200% 200%;
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

  article p:not(:last-child) {
    margin-bottom: 16px;
  }

  p {
    font-size: 28px;
    text-align: center;
    line-height: 1.7;
  }

  hr {
    margin: 48px 0;
  }

  .provocation {
    animation-name: fade;
    animation-timing-function: linear;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    margin-bottom: 24px;
  }

  .Home__sleeves {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-evenly;
    }

    .Home__sleeve {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-bottom: 32px;

      article {
      min-width: 187px;
        color: #7023f0;
        margin-bottom: 16px;
        background: #ffffff;
        box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 16px;

        &:before {
          content: "";
          display: block;
          width: 60px;
          height: 80px;
          background-image: url(${iconJson});
          background-repeat: no-repeat;
          background-position: center;
          margin-bottom: 16px;
        }

        p {
          font-family: Netron;
          font-size: 16px;
        }
      }
      button {
      }
    }
  }

  .Home__cta {
    margin-top: 80px;
    justify-content: center;
  }
`;

export default HomeStyle;
