import styled from "styled-components";

const LoginStyle = styled.section`
  background: #000;
  min-height: 100vh;
  color: #ffffff;
  padding-top: 48px;

  h1 {
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #ffffff;
    padding-bottom: 56px;
  }

  h2 {
    font-size: 32px;
    line-height: 31px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
  }

  footer {
    text-align: center;
    padding-top: 80px;

    a {
      color: #ffffff;
      text-decoration: none;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: fit-content;
      margin: 0 auto;
      
      :hover {
        text-decoration: underline;
      }

      div {
        line-height: 20px;
      }
    }
  }
`;

export default LoginStyle;
