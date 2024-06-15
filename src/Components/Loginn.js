import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Loginn = (props) => {
  const { showAlert } = props;
  const [credential, setCredential] = useState({ email: "", passcode: "" });
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        passcode: credential.passcode,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // we will get our notes....
      localStorage.setItem("token", json.authToken);
      history("/notes");
    } else {
      showAlert("Invalid Credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10rem",
    height: "25rem",
    width: "40rem",
    backgroundColor: "#fcffb39e",
    transition: "box-shadow 0.3s", // Adding a transition for a smooth hover effect
    boxShadow: "5px 5px 10px grey", // Box shadow on hover
  };

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
          Login to access your Notes
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={credential.email}
              onChange={onChange}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passcode"
              name="passcode"
              value={credential.passcode}
              onChange={onChange}
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
          Don't have Account?
          <NavLink className="mx-1 " to="/signup">
            Signup
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

export default Loginn;
