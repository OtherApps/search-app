import { useState, useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server';

function BoldResult (props){
  var str =props.allofthetext
  var query = props.query
  var txtFinal = str
  const testResults =<b>{query}</b>
  const options2 =testResults
  var results= txtFinal.replaceAll(query , '<b>'+query+'</b>');



return(
<p dangerouslySetInnerHTML={{__html:results}} />
// must return something  with clean html 
)

}
export default BoldResult


// Just bold  and highlights   words  that are found