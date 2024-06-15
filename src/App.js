import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { About } from "./Components/About";
import { Homi } from "./Components/Homi";
import { NoteState } from "./context/notes/NoteState";
import Alert from "./Components/Alert";
import Loginn from "./Components/Loginn";
import Signupp from "./Components/Signupp";
import { useState } from "react";
import Lander from "./Components/Lander";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar showAlert={showAlert}/>
          <Alert alert={alert} />

          <Routes>
            <Route exact path="/" element={<Lander showAlert={showAlert} />} />
            <Route
              exact
              path="/notes"
              element={<Homi showAlert={showAlert} />}
            />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/login"
              element={<Loginn showAlert={showAlert} />}
            />
            <Route
              exact
              path="/signup"
              element={<Signupp showAlert={showAlert} />}
            ></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
