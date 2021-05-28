import { useState, useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server';

function Message (props){

let stylesMsg = {
background:black,
color:white;
width:50%,
heigh:100%,


}
return (
<div style={stylesMsg}>
<h1>Something went wrong!</h1>
{props.msg}
</div>


)
}

export default Message
