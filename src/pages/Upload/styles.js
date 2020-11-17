import styled from "styled-components";

const UploadStyle = styled.section`
  min-height: 100vh;
  color: #000;
  padding-top: 48px;
  animation-name: fadeColor;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-duration: 1s;

  h1 {
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #7023f0;
    padding-bottom: 56px;
  }

  h2 {
    font-size: 32px;
    line-height: 31px;
    text-align: center;
    color: #000;
    margin-bottom: 40px;
  }

  .Upload__header-text {
    width: 180px;
    text-align: center;
    margin: 0 auto 24px auto;
  }

  button {
    display: block;
    margin: 0 auto;
  }

  @keyframes fadeColor {
    from {
      background-color: #000;
    }
    to {
      background-color: #fff;
    }
  }
`;

export default UploadStyle;
