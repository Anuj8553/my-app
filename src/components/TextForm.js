import React, { useState } from 'react'



export default function TextFrom(props) {

  const [text, setText] = useState("Enter your text here")

  const handleUpCLick = () => {
    console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase")
   
  }

  const handleLoCLick = () => {
    console.log("Lowercase was clicked" + text)
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowerCase")
  }

  const handleOnChange = (event) => {//takes value input and changes the state
    //the event = on change
    // console.log("On change")
    setText(event.target.value)
  }

  const handleCopy = () => {//takes value input and changes the state
    //the event = on change
    // console.log("On change")
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to your clipboard")
  }

  const handleRemove = () => {//takes value input and changes the state
    //the event = on change
    // console.log("On change")
 let newtext = text.split(/[ ]+/)
  setText(newtext.join(" "))
  props.showAlert("Extra spaces removed")
  }


  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">

        <textarea id="myBox" rows="8" className="form-control" value={text}  onChange={handleOnChange}></textarea  >
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpCLick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoCLick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
      <button className="btn btn-primary mx-2" onClick={handleRemove}>Remove Extra Spaces</button>
    
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length}characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
