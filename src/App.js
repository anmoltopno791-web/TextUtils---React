import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [redMode, setRedMode] = useState("light");
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
  const toggleRedMode = () => {
    if (redMode === "light") {
      setRedMode("dark");
      document.body.style.backgroundColor = "#f40d0d";
      showAlert("Red Dark mode has been enabled", "success");
    } else {
      setRedMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f1d3f";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          toggleMode={toggleMode}
          redMode={redMode}
          toggleRedMode={toggleRedMode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyse below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
