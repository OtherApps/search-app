
import {useState, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';

import React from 'react';
import ReactDOM from 'react-dom'
import Temainfo from './info.json'
import SpecialDiv from './SpecialDiv'
const fs = require('fs');
const cache = {};
var infoData =""
var TemaLength=0;

            
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


function Temas()  {



const[playing,setPlaying,count,setSate] = React.useState(false)
const [progress, setProgress] = React.useState(0);
const [maxdur, setMaxdur] = React.useState(0);
const audioRef = React.useRef(null)
var check = null;

 const togglePlaying=() =>setPlaying(prev => ! prev )


function loadinfo(){
var i =0;

while(i < Temainfo.length)
{

var temaTitle= Temainfo[i].title 
var n = temaTitle.indexOf(fixname3)

if(n!=-1)
{

setMaxdur(Temainfo[i].Tema_length)


break;

}
else
{

}
    i++;
}
}

        

importAll(require.context("J:/cc_projects/temasAudio/", false, /\.(mp3)$/));
 const audioFiles = Object.entries(cache).map(module => module[1].default);

        function importAll(r) {
            r.keys().forEach((key) => (cache[key] = r(key)
            ));
        }

 const fixname=audioFiles[0].split("/media/")
 const fixname2= fixname[1].split(".mp3")
var fixname3= fixname2[0].split(".")
fixname3 = fixname3[0]
function formatTime(s){
  var e = parseInt(s, 10),
                n = Math.floor(e / 3600),
                r = Math.floor((e - 3600 * n) / 60),
                i = e - 3600 * n - 60 * r;
            return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), ("00" !== n ? n + ":" : "") + r + ":" + i;

} 

useInterval(() => {
loadinfo();

if (audioRef && audioRef.current) {
    if(playing){
      audioRef.current.play();

setProgress(audioRef.current.currentTime )

      }
      else{
      audioRef.current.pause();
//finishCount();


      }
   }
   else{

    console.log("Something wrong")
   }
});

var mytimer=null; 


function startCount(){


setProgress(audioRef.current.currentTime)


}

function finishCount(){

clearInterval(mytimer);
}




    return (

 <div className="temaPlayer">
      <audio src={audioFiles[0]} id="tema1" ref={audioRef} />

  <SpecialDiv nameofstyle="temaTitle" displayText={fixname3}/> <hr/>

  <SpecialDiv nameofstyle="temaLength"  displayText={formatTime(maxdur)  } />  <hr/>

<div className="temaBar"> 
<progress max={maxdur} value={progress.toFixed()/100} />
{progress.toFixed() /100 }
</div>


<div className="temaControls">

     {playing ? (
      <button  style={{background:"transparent"}} onClick={togglePlaying}  > <i style={{color:"gold",fontSize:"30px"}}className="far fa-stop-circle" /> </button>


          ) : (
          <button style={{background:"transparent"}} onClick={togglePlaying}> <i style={{color:"white",fontSize:"30px"}}className="far fa-play-circle" /></button> 

          )}

</div>




      </div>
    )
  }

export default Temas