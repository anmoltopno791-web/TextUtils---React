import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
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
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyse below"
          mode={mode}
        />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
