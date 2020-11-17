import styled from "styled-components";

const handleBackground = ({ theme }) => {
  if (theme === "dark") return "#435453";
  if (theme === "danger") return "#F15045";
  return "#7023f0";
};

const ButtonStyle = styled.button`
  background: ${handleBackground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  min-width: 120px;
  padding: 12px 8px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  transition: all 0.5s;
  cursor: pointer;
  width: min-content;
  
  :hover {
    transform: scale(0.97);
  }

  :focus {
    transform: scale(0.97);
    filter: grayscale(0.5);
    outline: none;
  }
`;

export default ButtonStyle;
