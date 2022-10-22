import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Button, Container, InputContainer } from "./SoloModal.styles";
const style = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "368px",
  outline: "none",
  padding: "32px 24px",
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: " 0px 3px 10px #0000001F",
  borderRadius: "15px",
};
const DOBModal = ({ open, setOpen, onClose, onChange, handleSubmmit }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container>
          <div className="colu">
            <div>
              <h4 className="title">Change Date Of Birth</h4>

              <button className="close" onClick={onClose}>
                X
              </button>
              <InputContainer>
                <p className="input-title">New Date Of Birth *</p>
                <div className="short-field-container">
                  <input
                    type="date"
                    className="input__second"
                    name="DoB"
                    onChange={onChange}
                  />
                </div>
              </InputContainer>
            </div>

            <div>
              <Button onClick={handleSubmmit}>Save</Button>
            </div>
          </div>
        </Container>
      </Box>
    </Modal>
  );
};

export default DOBModal;
