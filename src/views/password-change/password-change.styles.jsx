import styled from "styled-components";
import background from "../../assets/background.png";
export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 58px);
  background-image: url(${background});
  background-size: 100vw calc(100vh - 58px);
  padding: 0;
  padding-top: 50px;
  padding-bottom: 0;

  .title {
    width: 100%;
    text-align: center;
    text-align: center;
    font: normal normal 600 58px/87px Poppins;
    letter-spacing: -0.03px;
    color: #ffffff;
  }
  .forms {
    margin-left: 50%;
    transform: translateX(-50%);
    display: grid;

    grid-gap: 25px;
    width: fit-content;
    height: 57vh;
  }
  h4 {
    font-size: 23px;
  }
  @media screen and (max-width: 600px) {
    height: fit-content !important;
  }
`;
