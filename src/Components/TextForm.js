import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  function handleClear() {
    setText("");
    props.showAlert("Text Has Been Cleared", "success");
  }
  function handleUpText() {
    setText(text.toUpperCase());
    props.showAlert("Text Has Been Converted To Uppercase", "success");
  }
  const handleLoText = () => {
    setText(text.toLowerCase());
    props.showAlert("Text Has Been Converted To Lowercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value); //this is value+usertyping
  };
  const [text, setText] = useState("");
  // text = 'hello'; //wrong way to change the state
  // setText('dhsh'); //correct way to change the text
  function replaceText() {
    let word = prompt("enter word you want to replace:");
    let rword = prompt("enter new word");
    /*first we are splitting it into an array and then joining with new word .*/
    let arr = text.split(word);
    console.log(arr);
    arr = arr.join(rword);
    console.log(arr);
    setText(arr);
    // setText(text.replace(word,rword));
    props.showAlert("Text Has Been Replaced", "success");
  }
  function handleWhiteSpace() {
    let space = text.split(/[ ]+/).join(" ");
    setText(space);
    props.showAlert("White Space Has Been Removed From Text", "success");
  }
  function handleCopy() {
    let copy = document.getElementById("content");
    //step-1 : select the text
    copy.select();
    //step-2 : copying the text
    document.execCommand("copy");
    document.getSelection().removeAllRanges(); //it will remove selected portion
    props.showAlert("Text Has Been Copied To Clipboard", "success");
    //navigator.clipboard.writeText(text); can be used alone in place of 43,45,46
  }
  function handleCapitalize() {
    const lower = text.toLowerCase();
    setText(lower.charAt(0).toUpperCase() + lower.slice(1));
    props.showAlert("Text Has Been Capitalized", "success");
  }
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 className={`text-${props.textColor}`}>{props.heading}</h1>
          <textarea
            className={`form-control text-${props.textColor} bg-${
              props.textAreaColor
            } bg-opacity-${100}`}
            value={text}
            id="content"
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        {/* //mx 2 gives margin to button */}
        <button
          disabled={text.length===0}
          className={`btn btn-${props.btnColor} text-${props.textColor} mx-2 my-2`}
          onClick={handleUpText}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length===0}
          className={`btn btn-${props.btnColor} text-${props.textColor} mx-2 my-2`}
          onClick={handleLoText}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length===0}
          className={`btn btn-${props.btnColor} text-${props.textColor} mx-2 my-2`}
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length===0}
          className={`btn btn-${props.btnColor} text-${props.textColor} mx-2 my-2`}
          onClick={replaceText}
        >
          Replace Text
        </button>
        <button
          disabled={text.length===0}
          className={`btn btn-${props.btnColor} text-${props.textColor} mx-2 my-2`}
          onClick={handleWhiteSpace}
        >
          Remove Extra White Space
        </button>
        <button
          disabled={text.length===0}
          className={`btn btn-${props.btnColor} text-${props.textColor} mx-2 my-2`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length===0}
          className={`btn btn-${props.btnColor} text-${props.textColor} mx-2 my-2`}
          onClick={handleCapitalize}
        >
          Capitalize Text
        </button>
      </div>
      <div className={`container text-${props.textColor}`}>
        <h1>Your Text Summary</h1>
        {/* we can also use filter method which returns if it is true else not */}
        <h3>{text.length > 0 ? text.trim().split(/\s+/).length : "0"}:words</h3>
        <h3>{text.length ? text.trim().length : "0"}:letters</h3>
        <h3>
          {text.length > 0 ? 0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length : "0"}
          :minutes
        </h3>
        <h1>preview:</h1>
        <p>
          {text.length > 0
            ? text
            : "enter the text in above textbox to view in preview"}
        </p>
      </div>
    </>
  );
}
TextForm.propTypes = { heading: PropTypes.string.isRequired };
