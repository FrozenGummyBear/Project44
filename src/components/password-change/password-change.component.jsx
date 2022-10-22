import {
  Container,
  InputContainer,
  Button,
  DispalyError,
} from "./password-change";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiCall } from "../../api/ApiCall";
const PasswordChangeForm = (props) => {
  const [user, setUser] = useState({});
  const [err, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handelSubmmit = (e) => {
    e.preventDefault();
    console.log(user);
    apiCall(
      "post",
      user,
      `auth/reset-password?token=${props.token}`,
      onSuccess,
      onFailure
    );
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
    alert(`successfully changed`);
  };
  return (
    <Container>
      <h4>Change Password</h4>
      <p className="sub-title">
        New user ?{" "}
        <Link to="sign-up" className="red">
          Create an account
        </Link>
      </p>
      <div className="top">
        <div>
          <InputContainer>
            <p className="input-title">New Password *</p>
            <input
              type="password"
              className="input"
              name="password"
              onChange={handleChange}
            />
            <DispalyError>{err["password"]}</DispalyError>
          </InputContainer>
        </div>
        <div>
          <Button onClick={handelSubmmit}>Submit</Button>
        </div>
      </div>
    </Container>
  );
};

export default PasswordChangeForm;
