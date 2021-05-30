import { useState, useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server';

function Message (props){

let stylesMsg = {
backgroundColor:"white",
Textcolor:"black",
fontFamily: "Pangolin, cursive;",
boxShadow:"10px 4px 8px 0 rgba(0, 0, 0, 0.2), 10px 6px 20px 0 rgba(0, 0, 0, 0.19);",
borderShadow:"20px 20px black",
borderRadius: "40px;",
zIndex: "1",
width:"100%",

height:"100%",
padding:"10px",
top:"0",
left:"0",
position: "absolute"
}
function hidethis(){
const messageB = document.getElementById("mymessage")
messageB.style.display= "none" 
}
return (
<div id="mymessage" style={stylesMsg}>
<h1>Something went wrong!</h1>
<span>{props.msg}</span>
<button onClick={hidethis}>Close</button>
</div>


)
}

export default Message
