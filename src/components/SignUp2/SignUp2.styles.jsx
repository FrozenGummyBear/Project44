import styled from "styled-components";

export const Container = styled.div`
  width: 368px;
  height: 548px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 32px 24px;
  text-align: center;
  .red {
    color: #4e80ee;
  }
  h4 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600)
      var(--unnamed-font-size-19) / var(--unnamed-line-spacing-28)
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-3f3f46);
    text-align: center;
    font: normal normal 600 19px/28px Poppins;
    letter-spacing: 0px;
    color: #3f3f46;
  }
  .input {
    width: 320px !important;
    border: none;
    background-color: #f0f0f0;
    height: 40px;
    border-radius: 10px;
    padding-left: 10px;
    height: 32px;
    /* UI Properties */
    background: var(--unnamed-color-f4f4f5) 0% 0% no-repeat padding-box;
    background: #f4f4f5 0% 0% no-repeat padding-box;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
  .input-title {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-21) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0-01);
    color: var(--unnamed-color-3f3f46);
    text-align: left;
    font: normal normal medium 14px/21px Poppins;
    letter-spacing: 0.01px;
    color: #3f3f46;
  }
  .sub-title {
    font-size: 16px;
  }
  .top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
  }
  @media screen and (max-width: 600px) {
    max-width: 90vw;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 20px;
  text-align: left;
`;

export const Button = styled.div`
  width: 100%;
  height: 31px;
  background-color: #d44244;
  text-align: center;
  color: #a1a1aa;
  border-radius: 10px;
  padding-top: 5px;
  font-weight: bold;
  background: #f2f2f3 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  cursor: pointer !important;
`;
export const DispalyError = styled.span`
  color: red;
`;
