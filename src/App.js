import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* Removed Router for now */}
      {/* <Router> */}
        <Navbar title="About Us" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          {/* Removed Routes for now */}
          {/* <Routes> */}
            {/* Only using TextForm for now */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter text below" mode={mode} />} /> */}
            <TextForm heading="Enter text below" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
 