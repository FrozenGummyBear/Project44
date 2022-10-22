import React from "react";
import ModalContainer from "../Modal/Modal.component";
import { Button, Container } from "./PaymentModal.styles";

import payment from "../../assets/pay.png";

const PaymentModal = ({ open, handleClose, handleOpen, pog }) => {
  console.log(pog);
  return (
    <ModalContainer
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <Container>
        <h4 className="title">Payment</h4>
        <p className="sub-title">
          <h1>{pog.pog} pogs</h1>
          <h1>${pog.price}</h1>
        </p>

        {/* <img src={payment} alt="" className="payment" /> */}

        <Button onClick={handleClose}>Submit</Button>
      </Container>
    </ModalContainer>
  );
};

export default PaymentModal;
