import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    console.log("Text converted to uppercase:", newText);
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    console.log("Text converted to lowercase:", newText);
  };

  const handleClearClick = () => {
    setText("");
    console.log("Text cleared");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard:", text);
  };

  const handleRemoveSpacesClick = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    console.log("Extra spaces removed:", newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text here");

  return (
    <>
      <div
        className="container mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="myBox"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "dark" ? "white" : "black",
          }}
          rows="8"
        ></textarea>
        <button
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
          type="button"
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleLoClick}
          type="button"
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleClearClick}
          type="button"
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCopyClick}
          type="button"
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleRemoveSpacesClick}
          type="button"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <p>
          Words: {text.split(/\s+/).filter((word) => word).length}, Characters:{" "}
          {text.length}
        </p>
        <p>{text}</p>
      </div>
      <div className="container my-3">
        {/* Commented out navigation buttons */}
        {/* <Link to="/" className="btn btn-secondary mx-2">
          Go to Home
        </Link>
        <Link to="/about" className="btn btn-secondary mx-2">
          About Us
        </Link> */}
      </div>
    </>
  );
}
