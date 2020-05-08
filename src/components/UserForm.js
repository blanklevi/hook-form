import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [confirmPWError, setConfirmPWError] = useState("");
  const [matchingPWError, setMatchingPWError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPW };
    console.log("Welcome", newUser);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameError("First name must be at least 2 characters!");
    } else {
      setFirstNameError("");
    }
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("Last name must be at least 2 characters!");
    } else {
      setLastNameError("");
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setEmailError("Email must be at least 5 characters!");
    } else {
      setEmailError("");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters!");
    } else {
      setPasswordError("");
    }
  };
  const handleConfirmPW = (e) => {
    setConfirmPW(e.target.value);
    if (e.target.value.length < 8) {
      setConfirmPWError("Password must be at least 8 characters!");
    } else {
      setConfirmPWError("");
    }
    if (confirmPW !== password) {
      setMatchingPWError("Passwords must match!");
    } else if (confirmPW === password) {
      setMatchingPWError("");
    }
    console.log("password", password);
    console.log("confirm", confirmPW);
  };
  // const handleMatchingPW = (e) => {
  //   if (confirmPW !== password) {
  //     setMatchingPWError("Passwords must match!");
  //   } else if (confirmPW === password) {
  //     setMatchingPWError("");
  //   }
  //   console.log("password", password);
  //   console.log("confirm", confirmPW);
  // };

  return (
    <div>
      <form onSubmit={createUser}>
        <div>
          <label>First Name: </label>
          <input type="text" onChange={handleFirstName} />
          {firstNameError ? (
            <p style={{ color: "red" }}>{firstNameError}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" onChange={handleLastName} />
          {lastNameError ? <p style={{ color: "red" }}>{lastNameError}</p> : ""}
        </div>
        <div>
          <label>Email Address: </label>
          <input type="text" onChange={handleEmail} />
          {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
        </div>
        <div>
          <label>Password: </label>
          <input type="text" onChange={handlePassword} />
          {passwordError ? <p style={{ color: "red" }}>{passwordError}</p> : ""}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="text" onChange={handleConfirmPW} />
          {confirmPWError ? (
            <p style={{ color: "red" }}>{confirmPWError}</p>
          ) : (
            ""
          )}
          {matchingPWError ? (
            <p style={{ color: "red" }}>{matchingPWError}</p>
          ) : (
            ""
          )}
        </div>
      </form>
      <div>
        <p>Your Form Data</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email Address: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPW}</p>
      </div>
    </div>
  );
};

export default UserForm;
