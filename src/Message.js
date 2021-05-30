import { useState, useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server';

function Message (props){

let stylesMsg = {
backgroundColor:"purple",
Textcolor:"white",
fontFamily: "Pangolin, cursive;",
boxShadow:"10px 4px 8px 0 rgba(0, 0, 0, 0.2), 10px 6px 20px 0 rgba(0, 0, 0, 0.19);",
borderShadow:"20px 20px black",
borderRadius: "40px;",
zIndex: "1",
width:"100%",
textAligh:"center",
itemAlign:"center",
padding:"10px",
top:"0",
left:"0",
position: "absolute"
}
return (
<div style={stylesMsg}>
<h1>Something went wrong!</h1>
<span>{props.msg}</span>
</div>


)
}

export default Message
