import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let clear = "";
    setText(clear);
    props.showAlert("Text cleared!", "success");
  };

  const handleCaptalizeClick = () => {
    let captialize = text.charAt(0).toUpperCase() + text.slice(1);
    setText(captialize);
    props.showAlert("Text capitalized!", "success");
  };

  const handleCopyClick = () => {
    let copyText = text;
    navigator.clipboard.writeText(copyText);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpacesClick = () => {
    let removeSpace = text.split(/[ ]+/);
    setText(removeSpace.join(""));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleReplaceClick = () => {
    let wordToReplace = prompt("Enter the word you want to replace");
    let replacementWord = prompt("Enter the replacement word");
    let newText = text.replaceAll(wordToReplace, replacementWord);
    setText(newText);
    props.showAlert("Text replaced!", "success");
  };

  const handleTrimClick = () => {
    let trimmedText = text.trim();
    setText(trimmedText);
    props.showAlert("Text trimmed!", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#0f1d3f" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert UpperCase
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLowClick}>
          Convert LowerCase
        </button>
        <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleClearClick}>
          Clear
        </button>
        <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleCaptalizeClick}>
          Capitalize
        </button>
        <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          disabled={text.length === 0} 
          className="btn btn-warning mx-1 my-1"
          onClick={handleExtraSpacesClick}
        >
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} className="btn btn-dark mx-1 my-1" onClick={handleReplaceClick}>
          Replace Text
        </button>
        <button disabled={text.length === 0} className="btn btn-light mx-1 my-1" onClick={handleTrimClick}>
          Trim Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#0f1d3f" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : " Nothing to preview"}
        </p>
      </div>
    </>
  );
}
