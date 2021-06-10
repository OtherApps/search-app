import {useState, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';
import RecieveJson from './RecieveJson'
import React from 'react';

import socketIOClient from "socket.io-client";
            
function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Nowlive(){
  const [response, setResponse] = useState("");
const[playing,setPlaying,count,setSate] = React.useState(false)
const [progress, setProgress] = React.useState(0);
const [maxdur, setMaxdur] = React.useState(0);
const audioRef = React.useRef(null)
var check = null;

 const togglePlaying=() =>setPlaying(prev => ! prev )

useInterval(() => {

 //getJson('http://localhost:3003/api')
//funsocket();

});
funsocket();
function funsocket(){
 
    const socket = socketIOClient("http://127.0.0.1:4001/");
    socket.on("FromAPI", data => {
      setResponse(data);
    });


}
useInterval(() => {
//loadinfo();

if (audioRef && audioRef.current) {
    if(playing){
      


audioRef.current.play();


//setProgress(audioRef.current.currentTime )

      }
      else{
    audioRef.current.pause();




      }
   }
   else{

    console.log("Something wrong")
   }
});




function getJson(urlJson){



const https = require('http');

https.get(urlJson, (resp) => {
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

}
function saveData(data){

var finalData= JSON.parse(data)

setProgress(finalData[0].cTime)


}


  function formatTime(s){
              var e = parseInt(s, 10),
                n = Math.floor(e / 3600),
                r = Math.floor((e - 3600 * n) / 60),
                i = e - 3600 * n - 60 * r;
                
                return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), ("00" !== n ? n + ":" : "") + r + ":" + i;

} 




return (
	<div>

	<audio id="liveradio" src="http://localhost:3003/livenow" type="audio/mp3" ref={audioRef} controls preload="auto"/> 
    
   <div className="temaLength">
<progress  max="100" /> 
   </div>       

    <div className="temaControls">

         {playing ? (
          <button  style={{background:"transparent"}} onClick={togglePlaying}  > <i style={{color:"gold",fontSize:"30px"}}className="far fa-stop-circle" /> </button>


              ) : (
              <button style={{background:"transparent"}} onClick={togglePlaying}> <i style={{color:"white",fontSize:"30px"}}className="far fa-play-circle" /></button> 

              )}

    </div>

<div style={{color:"white"}}>{console.log(response)}</div>


          </div>
)
     
}

export default Nowlive