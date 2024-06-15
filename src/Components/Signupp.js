import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Signupp = (props) => {
  const { showAlert } = props;
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    passcode: "",
    cpasscode: "",
  });
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, passcode, cpasscode } = credential;
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        passcode,
      }),
    });
    if (passcode !== cpasscode) {
      showAlert("Confirm password and password should be same...", "danger");
    } else {
      showAlert("Account created Successully", "success");
      const json = await response.json();
      console.log(json);
      localStorage.setItem("token", json.authToken);
      history("/notes");
    }
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7rem",
    height: "35rem",
    width: "40rem",
    backgroundColor: "#fcffb39e",
    transition: "box-shadow 0.3s",
    boxShadow: "5px 5px 10px grey",
  };
  const containerHoverStyles = {};

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className=" d-flex"
      style={{
        justifyContent: "center",
        backgroundColor: "#fdfbef6e",
        height: "100vh",
      }}
    >
      <div className="card" style={containerStyles}>
        <h1
          style={{ fontFamily: "'Lucida Console', 'Courier New', monospace" }}
        >
          Create new Account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"></label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              placeholder="Enter Email"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="passcode" className="form-label"></label>
            <input
              type="password"
              className="form-control"
              id="passcode"
              name="passcode"
              placeholder="Enter Password"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpasscode" className="form-label"></label>
            <input
              type="password"
              className="form-control"
              id="cpasscode"
              name="cpasscode"
              placeholder="Confirm Password"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "#10A37F" }}
          >
            Let's Go
          </button>
        </form>
        <div className="my-1">
          Already have an account?
          <NavLink className="mx-1 " to="/login">
            Login
          </NavLink>
        </div>
        <div>
          Back to
          <NavLink className="mx-1 " to="/">
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signupp;
