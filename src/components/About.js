import React from "react";

export default function About(props) {
  let mystyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };
  return (
    <div className="container">
      <h1
        className="my-3 "
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              <strong>What is TextUtils?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>TextUtils is a powerful text manipulation tool.</strong>{" "}
              It helps you perform various operations on your text such as
              converting to uppercase, lowercase, removing extra spaces, and
              much more. Our application is designed to make text processing
              quick, easy, and efficient for everyone.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              <strong>Key Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>TextUtils comes with multiple useful features:</strong>
              <ul>
                <li>Convert text to UPPERCASE or lowercase</li>
                <li>Remove extra spaces between words</li>
                <li>Copy text to clipboard with one click</li>
                <li>Toggle between dark and light mode</li>
                <li>Real-time character and word count</li>
                <li>Reverse text functionality</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              <strong>How to Use</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>Getting started with TextUtils is simple:</strong>
              <ol>
                <li>Enter or paste your text in the text area</li>
                <li>
                  Use the buttons below the text area to apply transformations
                </li>
                <li>
                  View real-time statistics including character count and word
                  count
                </li>
                <li>
                  Use the Dark Mode toggle button for a comfortable viewing
                  experience
                </li>
                <li>
                  Copy your edited text using the copy button and paste it
                  anywhere you need
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
