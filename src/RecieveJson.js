import { useState, useEffect } from 'react'

var finalData =null;

function RecieveJson(props)
{


const https = require('http');

https.get(props.urlJson, (resp) => {
  let data = '';


  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
  // displayStuff(data);
  
finalData= JSON.parse(data)
   
  });

}).on("error", (err) => {
  console.log("Error: " + err);
});


console.log(finalData)
	return(

<></>

		)
}

export  default RecieveJson