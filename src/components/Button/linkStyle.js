import styled from "styled-components";

const handleBackground = ({ theme }) => {
  if (theme === "dark") return "#435453";
  if (theme === "danger") return "#F15045";
  if (theme === "singer")
    return `linear-gradient(180deg, #fddb92 0%, #d1fdff 100%),
      linear-gradient(0deg, #4eedf9, #4eedf9)`;
  if (theme === "entrepreneur")
    return `linear-gradient(180deg, #84fab0 0%, #8fd3f4 100%),
      linear-gradient(0deg, #4eedf9, #4eedf9)`;
  if (theme === "fighter")
    return `linear-gradient(180deg, #667eea 0%, #5c4ba2 100%),
      linear-gradient(0deg, #4eedf9, #4eedf9);`;
  return "#7023f0";
};

const handleColor = ({ theme }) => {
  if (theme === "singer") return "#000";
  if (theme === "entrepreneur") return "#000";
  return "#fff";
};

const LinkStyle = styled.a`
  background: ${handleBackground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  min-width: 120px;
  padding: 12px 8px;
  text-align: center;
  text-transform: uppercase;
  color: ${handleColor};
  border: none;
  transition: all 0.5s;
  cursor: pointer;
  width: min-content;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 41px;

  span {
    margin-bottom: -8px;
  }

  &.md {
    padding: 20px;
    width: max-content;
  }

  :hover {
    transform: scale(0.97);
  }

  :focus {
    transform: scale(0.97);
    filter: grayscale(0.5);
    outline: none;
  }
`;

export default LinkStyle;
