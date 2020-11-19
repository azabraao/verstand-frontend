import styled from "styled-components";

const ProfileStyle = styled.section`
  background: #000;
  min-height: 100vh;
  color: #ffffff;
  padding-top: 48px;
  padding-bottom: 120px;

  &.singer {
    background: linear-gradient(180deg, #fddb92 0%, #d1fdff 100%),
      linear-gradient(0deg, #4eedf9, #4eedf9);
    color: #000;
  }

  &.fighter {
    background: linear-gradient(180deg, #667eea 0%, #5c4ba2 100%),
      linear-gradient(0deg, #4eedf9, #4eedf9);
    color: #fff;
  }

  &.entrepreneur {
    background: linear-gradient(180deg, #84fab0 0%, #8fd3f4 100%),
      linear-gradient(0deg, #4eedf9, #4eedf9);
    color: #000;
  }

  h1 {
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    padding-bottom: 24px;
  }

  .Profile__image {
    text-align: center;
    margin-bottom: 24px;
    margin: 0 auto 24px auto;
    display: block;
  }

  .Profile__name {
    text-align: center;
    font-family: Gotham;
    margin-bottom: 24px;
    font-family: Gotham;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
  }

  .Profile__highlights {
    font-family: Gotham;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0em;
    margin-bottom: 40px;
  }

  .Profile__overview {
    margin-bottom: 40px;

    h3 {
      font-family: Gotham;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
    }
  }

  .Profile__btn {
    margin: 0 auto;
    display: block;
  }
`;

export default ProfileStyle;
