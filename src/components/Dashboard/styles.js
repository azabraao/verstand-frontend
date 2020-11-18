import styled from "styled-components";

const DashboardStyle = styled.div`
  position: relative;
  padding-bottom: 24px;

  h3 {
    font-family: Gotham;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
  }

  [type="radar"] {
    margin: 0 auto;
    max-width: 310px;

    * {
      overflow: visible;
    }
  }

`;

export default DashboardStyle;
