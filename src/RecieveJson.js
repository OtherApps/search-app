import { useState, useEffect } from 'react'

var finalData =null;
var output; 

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
  saveData(data)

  });

}).on("error", (err) => {
  console.log("Error: " + err);
});

  function formatTime(s){
              var e = parseInt(s, 10),
                n = Math.floor(e / 3600),
                r = Math.floor((e - 3600 * n) / 60),
                i = e - 3600 * n - 60 * r;
                
                return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), ("00" !== n ? n + ":" : "") + r + ":" + i;

} 

function saveData(data){
finalData= JSON.parse(data)
console.log(finalData[0].maxTime)   
output ="Max time = " + finalData[0].maxTime + " Current :" + formatTime(finalData[0].cTime)

}

	return(

<>{output}</>

		)
}

export  default RecieveJson