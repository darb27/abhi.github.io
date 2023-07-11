import React, { useState } from 'react'


export default function Textform(props) {
  
    //set value to text when textform changes the values
    const handelOnChange = (event) => {
       setText(event.target.value)

    }

    //change the values to upper case when you click on button
    const handelOnClickButtonUpper = () => {
        const newText = text.toUpperCase()
        setSummaryText(newText)
    }

    //change the values to upper case when you click on button
    const handelOnClickButtonLower = () => {
       const newText = text.toLowerCase()
       setSummaryText(newText)
       
    }
    //change the values to upper case when you click on button
    const handelOnClickButtonFilterNumber = () => {
       const newText = text.match(/[\d]/g);
       setSummaryText(newText)
       
    }
    const handelOnClickButtonFilterString = () => {
       const newText = text.match(/[\D]/g);
       setSummaryText(newText)
       
    }

    // this is use of useState hook.
    const [text, setText] = useState('');
    //this is use to set values to pragraph values when you click on button
    const [summaryText, setSummaryText] = useState('');

    return (
        <>
            <div className="container my-3 t" style={{color: props.mode==="dark"?"white":"black"}} >
                <h1> Text Summary</h1>
                <p> {text.split(" ").filter(Boolean).length} word and {text.trim().length} characters</p>
                <p> {0.008 * text.split(" ").filter(Boolean).length} Minutes To Read</p>

            </div>
            <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>

                    <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==="light"?"white":"#A7C0C6",color: props.mode==="dark"?"white":"black"}} onChange={handelOnChange} placeholder="Enter Text Here" rows="8"></textarea>
                </div>
                <button className="btn btn-primary " onClick={handelOnClickButtonUpper}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handelOnClickButtonLower}>Convert To Lowercase</button>
                <button className="btn btn-primary " onClick={handelOnClickButtonFilterNumber}>Convert To Number</button>
                <button className="btn btn-primary mx-2" onClick={handelOnClickButtonFilterString}>Convert To Stirng</button>
            </div>
            <div  className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
                <h2>Summary</h2>
                <p>{summaryText}</p>
            </div>

        </>

    )
}
