import styled from "styled-components";

const DropContainerStyle = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 40px;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  .DragContainer__inside {
    display: flex;
    padding: 32px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .DragContainer__fileName {
    font-size: 24px;
    padding: 30px 0px 10px 0px;
    display: flex;
    align-items: center;

    img {
      margin-right: 24px;
      width: 50px;
      margin-top: -9px;
    }
  }

  &.isDragging {
    background-color: #4eedf95c;
    transform: scale(1.03);
  }

  &.hasError {
    background-color: #db019c87;
    animation-name: shake;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
    animation-timing-function: linear;
  }

  &:before {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    background-color: #4eedf95e;
    z-index: 0;
    left: 0;
    transition: width 10s;
  }

  &.isUploading {
    &:before {
      width: 100%;
    }
  }

  img {
    display: block;
    margin-bottom: 8px;
  }

  .DropContainer__text {
    text-align: center;
    margin-top: 32px;
  }

  @keyframes shake {
    0% {
      transform: translateX(5px);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

export default DropContainerStyle;
