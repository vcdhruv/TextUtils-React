import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textColor, setTextColor] = useState("dark");
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("info");
  const [textAreaColor, setTextAreaColor] = useState("light");
  const [aboutBtnColor, setAboutBtnColor] = useState("light");
  function toggleDarkMode() {
    if (mode === "light") {
      setMode("dark");
      setTextColor("light");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Has Been Enabled", "success");
      setBtnColor("dark");
      setTextAreaColor("dark");
      setAboutBtnColor("dark");
    } else {
      setMode("light");
      setTextColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      setBtnColor("info");
      setTextAreaColor("light");
      setAboutBtnColor("light");
    }
  }

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  function toggleYellowMode() {
    if (mode === "light") {
      setMode("warning");
      document.body.style.backgroundColor = "black";
      setBtnColor("warning");
      setTextColor("light");
      showAlert("Yellow Mode Has Been Enabled", "success");
      setTextAreaColor("warning");
      setAboutBtnColor("warning");
    } else {
      setMode("light");
      setBtnColor("info");
      document.body.style.backgroundColor = "white";
      setTextColor("dark");
      showAlert("Yellow Mode Has Been Disabled", "success");
      setTextAreaColor("light");
      setAboutBtnColor("light");
    }
  }

  function toggleBlueMode() {
    if (mode === "light") {
      setMode("primary");
      document.body.style.backgroundColor = "pink";
      setTextColor("white");
      setBtnColor("primary");
      setTextAreaColor("primary");
      showAlert("Blue Mode Has Been Enabled", "success");
      setAboutBtnColor("primary");
    } else {
      setMode("light");
      setBtnColor("info");
      document.body.style.backgroundColor = "white";
      setTextColor("dark");
      showAlert("Blue Mode Has Been Disabled", "success");
      setTextAreaColor("light");
      setAboutBtnColor("light");
    }
  }

  function toggleRedMode() {
    if (mode === "light") {
      setMode("danger");
      document.body.style.backgroundColor = "black";
      setBtnColor("danger");
      setTextColor("light");
      showAlert("Red Mode Has Been Enabled", "success");
      setTextAreaColor("danger");
      setAboutBtnColor("danger");
    } else {
      setMode("light");
      setBtnColor("info");
      document.body.style.backgroundColor = "white";
      setTextColor("dark");
      showAlert("Red Mode Has Been Disabled", "success");
      setTextAreaColor("light");
      setAboutBtnColor("light");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="about"
          mode={mode}
          toggleDarkMode={toggleDarkMode}
          toggleYellowMode={toggleYellowMode}
          textColor={textColor}
          toggleBlueMode={toggleBlueMode}
          toggleRedMode={toggleRedMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze:"
                textColor={textColor}
                mode={mode}
                showAlert={showAlert}
                btnColor={btnColor}
                textAreaColor={textAreaColor}
              />
            }
          ></Route>
          <Route
            path="/About"
            element={
              <About aboutBtnColor={aboutBtnColor} textColor={textColor} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar/> //when props is not set the defaulProps is applied  */}
    </>
  );
}
export default App;

