import React, { Component } from "react";
import PasswordChangeForm from "../../components/password-change/password-change.component";

import { Container } from "./password-change.styles";

const PasswordChange = (props) => {
  const { token } = props.match.params;
  return (
    <Container>
      <h1 className="title">Welcome Pewpogger!</h1>
      <div className="forms">
        <PasswordChangeForm token={token} />
      </div>
    </Container>
  );
};

export default PasswordChange;
