import { useState, useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server';

function BoldResult (props){



  //  var str =props.allofthetext
  var str= "hello world 123"
    //var query = props.query
var query = "123"
var txtFinal = str
const testResults =<b>{query}</b>
const options2 =testResults

var results= txtFinal.replaceAll(query , '<em>'+query+'</em>');
let  fullstring=  results

return(
<div style={{fontSize:"24px"}}>

{fullstring}
</div>

)

}
export default BoldResult
