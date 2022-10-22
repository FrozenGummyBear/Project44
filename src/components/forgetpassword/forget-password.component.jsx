import {
  Container,
  InputContainer,
  Button,
  DispalyError,
} from "./forget-password";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiCall } from "../../api/ApiCall";
const ForgetPasswordForm = (props) => {
  const [user, setUser] = useState({});
  const [err, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handelSubmmit = (e) => {
    e.preventDefault();

    apiCall("post", user, `auth/forgot-password`, onSuccess, onFailure);
  };

  const onFailure = (error) => {
    console.log(error);
    if (
      error.response.status == 400 &&
      error.response.data.type == "validation"
    )
      return setErrors({ ...JSON.parse(error.response.data.message) });
    //   console.log(JSON.parse(error.response.data.message));

    //   toast.error(error.response.data);
  };

  const onSuccess = (data) => {
    alert(`we sent link to this email :${user["email"]}`);
    console.log("  successfully loggedin!");
  };
  return (
    <Container>
      <h4>Forgot Password</h4>
      <p className="sub-title">
        New user ?{" "}
        <Link to="sign-up" className="red">
          Create an account
        </Link>
      </p>
      <div className="top">
        <div>
          <InputContainer>
            <p className="input-title">email *</p>
            <input
              type="text"
              className="input"
              name="email"
              onChange={handleChange}
            />
            <DispalyError>{err["email"]}</DispalyError>
          </InputContainer>
        </div>
        <div>
          <Button onClick={handelSubmmit}>Submit</Button>
        </div>
      </div>
    </Container>
  );
};

export default ForgetPasswordForm;
