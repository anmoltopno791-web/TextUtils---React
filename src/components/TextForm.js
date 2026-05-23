import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };

  const handleClearClick = () => {
    let clear = "";
    setText(clear);
  };

  const handleCaptalizeClick = () => {
    let captialize = text.charAt(0).toUpperCase() + text.slice(1);
    setText(captialize);
  }

  const handleCopyClick = () => {
    let copyText = text
    navigator.clipboard.writeText(copyText)
  }

  const handleExtraSpacesClick = () => {
    let removeSpace = text.split(/[ ]+/)
    setText(removeSpace.join(""))
  }

  const handleReplaceClick = () => {
    let wordToReplace = prompt("Enter the word you want to replace");
    let replacementWord = prompt("Enter the replacement word");
    let newText = text.replaceAll(wordToReplace, replacementWord);
    setText(newText);
  }

  const handleTrimClick = () => {
    let trimmedText = text.trim();
    setText(trimmedText);
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert UpperCase
      </button>
      <button className="btn btn-success m-2" onClick={handleLowClick}>
        Convert LowerCase
      </button>
      <button className="btn btn-secondary m-2" onClick={handleClearClick}>
        Clear
      </button>
      <button className="btn btn-danger m-2" onClick={handleCaptalizeClick}>
        Capitalize
      </button>
      <button className="btn btn-info m-2" onClick={handleCopyClick}>
        Copy Text
      </button>
      <button className="btn btn-warning m-2" onClick={handleExtraSpacesClick}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-dark m-2" onClick={handleReplaceClick}>
        Replace Text
      </button>
      <button className="btn btn-light m-2" onClick={handleTrimClick}>
        Trim Text
      </button>
    </div>
    <div className="container my-3">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
