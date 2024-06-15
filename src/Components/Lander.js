import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Lander = () => {
  const [text] = useTypewriter({
    words: [
      "1. Create your notes...",
      "2. Enhance you efficiency...",
      "3. Remember upcoming events...",
    ],
    loop: {},
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  const pageStyle = {
    display: "flex",
    height: "100%",
    position: "relative",
    fontFamily: "'Lucida Console', 'Courier New', monospace",
    padding: "0",
    overflow: "auto",
  };

  const leftHalfStyle = {
    flex: 5,
    display: "flex",
    paddingTop: "7rem",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(255, 255, 219)",
  };

  const rightHalfStyle = {
    flex: 3,
    display: "flex",
    justifyContent:"center",
    height: "100vh",
    width: "100vw",
  };
  const container = {
    display:"flex",
    marginTop:"10rem",
    marginBottom:"10rem",
    width:"20rem",
    justifyContent:"center",
    alignItems:"center",
    border:"none"
  };
  return (
    <div style={pageStyle}>
      <div className="row" style={leftHalfStyle}>
        <div className="col d-flex" style={{ justifyContent: "center" }}>
          <h1>Welcome to myNotebook </h1>
        </div>
        <div
          className="autotype d-flex"
          style={{ justifyContent: "center", marginTop: "-6rem" }}
        >
          <h1>
            <span style={{ fontWeight: "bold", color: "green" }}>{text}</span>
            <Cursor />
          </h1>
        </div>
      </div>
      <div style={rightHalfStyle}>
        <div className="card" style={container}>
          <h1>Get Started</h1>
          <div className="row">
            <div className="col">
              <NavLink
                className="btn btn-primary "
                style={{ marginRight: "5rem" }}
                to="/login"
                role="button"
              >
                Login
              </NavLink>
            </div>
            <div className="col">
              <NavLink
                className="btn btn-primary mx-2"
                to="/signup"
                role="button"
              >
                Signup
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lander;
