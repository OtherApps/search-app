
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import CreateListItem from "./CreateListItem"
import  './advance.css'

function ThumView(props){
var output =""
const [response, setResponse] = useState("");

const https = require('https');

https.get('data.json', (resp) => {
  let data = '';


  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
  // displayStuff(data);
  SaveData(data)
   
   
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

function SaveData(dataJson){

	
	var start=0; 
	var newstuff = JSON.parse(dataJson); 	
while(start <newstuff.list.length){


//console.log( newstuff.list[start].Series+ " " + newstuff.list[start].Poster)
var newline='<img width=200px height=200px src='+ newstuff.list[start].Poster +' ></img>'
output =output+ newline

start++; 


}

setResponse(output)
}


return(

<div className="mainBody" >
<div dangerouslySetInnerHTML={{__html:response}} />
</div>

)
}

export default ThumView