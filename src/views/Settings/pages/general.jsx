import React, { useState, useEffect } from "react";
import placeHolder from "../../../assets/1.png";
import AvatarModal from "../../../components/GeneralModals/Avatar.modal";
import DOBModal from "../../../components/GeneralModals/DOB.modal";
import EmailModal from "../../../components/GeneralModals/Email.modal";
import PasswordModal from "../../../components/GeneralModals/Password.modal";
import UserNameModal from "../../../components/GeneralModals/Username.modal";

import { apiCall2 } from "../../../api/ApiCall";
import { ImageENDPOINT } from "../../../api/Api";

const General = () => {
  const [avatar, setAvatar] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(false);
  const [user, setUser] = useState({});
  const [err, setErrors] = useState({});
  const openMail = () => {
    setEmail(true);
    setName(false);
    setAvatar(false);
    setPassword(false);
    setDateOfBirth(false);
  };
  const openAvatar = () => {
    setEmail(false);
    setName(false);
    setAvatar(true);
    setPassword(false);
    setDateOfBirth(false);
  };
  const openUserName = () => {
    setEmail(false);
    setName(true);
    setAvatar(false);
    setPassword(false);
    setDateOfBirth(false);
  };
  const openPassword = () => {
    setEmail(false);
    setName(false);
    setAvatar(false);
    setPassword(true);
    setDateOfBirth(false);
  };
  const openDateOfBirth = () => {
    setEmail(false);
    setName(false);
    setAvatar(false);
    setPassword(false);
    setDateOfBirth(true);
  };
  const onClose = () => {
    setEmail(false);
    setName(false);
    setAvatar(false);
    setPassword(false);
    setDateOfBirth(false);
  };

  useEffect(() => {
    getUser();
    return () => {};
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, ":", value);
    setUser({ ...user, [name]: value });
  };
  const getUser = () => {
    apiCall2(
      "get",
      {},
      `users/update`,
      (data) => {
        console.log(data);
        setUser({ ...data });
      },
      (err) => {}
    );
  };
  const handelSubmmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("profile", user["profile"]);
    formData.append("DoB", user["DoB"]);
    formData.append("username", user["username"]);
    formData.append("email", user["email"]);
    user["password"] && formData.append("password", user["password"]);
    formData.append("_id", user["_id"]);
    apiCall2("post", formData, `users/update`, onSuccess, onFailure);
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
    console.log(data);
    delete data["password"];
    setUser({ ...data });
    console.log("Registerd  successfully !");
    onClose();
    // toast.success("Registerd  successfully !");
    // setTimeout(() => {
    //   navigate("/");
    // }, 2000);
  };
  return (
    <>
      <AvatarModal
        open={avatar}
        setOpen={openAvatar}
        onClose={onClose}
        onSelect={(e) => {
          e.preventDefault();
          setUser({ ...user, profile: e.target.files[0] });
        }}
        handleSubmmit={handelSubmmit}
        user={user}
      />
      <UserNameModal
        open={name}
        setOpen={openUserName}
        onClose={onClose}
        onChange={handleChange}
        handleSubmmit={handelSubmmit}
      />
      <EmailModal
        open={email}
        setOpen={openMail}
        onClose={onClose}
        onChange={handleChange}
        handleSubmmit={handelSubmmit}
      />
      <PasswordModal
        open={password}
        setOpen={openPassword}
        onClose={onClose}
        onChange={handleChange}
        handleSubmmit={handelSubmmit}
      />
      <DOBModal
        open={dateOfBirth}
        setOpen={openDateOfBirth}
        onClose={onClose}
        onChange={handleChange}
        handleSubmmit={handelSubmmit}
      />
      <h1>General</h1>
      <div className="flex" style={{ display: "flex" }}>
        <div className="profile-container">
          <div className="general-icon">
            <img
              src={
                user["profile"]
                  ? typeof user["profile"] == "string"
                    ? ImageENDPOINT + "" + user["profile"]
                    : URL.createObjectURL(user["profile"])
                  : placeHolder
              }
              alt=""
              className="profile-image"
            />
          </div>
        </div>
        <span
          className="edit__link"
          style={{ marginTop: "50px", marginLeft: "50px" }}
          onClick={openAvatar}
        >
          Edit
        </span>
      </div>

      <div className="row-user">
        <span className="field-name">Username</span>
        <span className="field-value">{user["username"]}</span>
        <span className="edit-link" onClick={openUserName}>
          Edit
        </span>
      </div>
      <div className="row-user">
        <span className="field-name">Email</span>
        <span className="field-value">{user["email"]}</span>
        <span className="edit-link" onClick={openMail}>
          Edit
        </span>
      </div>
      <div className="row-user">
        <span className="field-name">Password</span>
        <span className="field-value">*************</span>
        <span className="edit-link" onClick={openPassword}>
          Edit
        </span>
      </div>
      <div className="row-user">
        <span className="field-name">DOB</span>
        <span className="field-value">
          {user && user["DoB"] && user["DoB"].toString().substring(0, 10)}
        </span>
        <span className="edit-link" onClick={openDateOfBirth}>
          Edit
        </span>
      </div>
    </>
  );
};
export default General;
