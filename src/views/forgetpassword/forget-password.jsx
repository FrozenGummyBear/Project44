import React, { Component } from "react";
import ForgetPasswordForm from "../../components/forgetpassword/forget-password.component";

import { Container } from "./forget-password.styles";

class ForgetPassword extends Component {
  render() {
    return (
      <Container>
        <h1 className="title">Welcome Pewpogger!</h1>
        <div className="forms">
          <ForgetPasswordForm />
        </div>
      </Container>
    );
  }
}

export default ForgetPassword;
