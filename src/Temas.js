
import {useState, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';
import './temas.css'
import React from 'react';
import ReactDOM from 'react-dom'
import Temainfo from './info.json'
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



 const [progress, setProgress] = React.useState(0);
   const audioRef = React.useRef(null)

useInterval(() => {
loadinfo();


});


function loadinfo(){
var i =0;

while(i < Temainfo.length)
{

var temaTitle= Temainfo[i].title 
var n = temaTitle.indexOf(fixname3)
if(n!=-1)
{
console.log("Found it")
//setProgress(Temainfo[i].Tema_length);


break;

}
else
{

    //console.log("Is not equal " + temaTitle);
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
 const fixname3= fixname2[0].split(0)


if(fixname3.indexOf(".") >-1){
var newname =   fixname3.split(".");
fixname3= newname[0]

}

 const audioP = document.getElementById("tema1")

function getDuration(src) {
    var audio = new Audio();
    var texthere = document.getElementById("temalength")
 
  return audio.duration
}




    return (
 

 <div className="temaPlayer">
      <audio src={audioFiles[0]} id="tema1" href={audioRef} preload="metadata"/>
<div classname="temaArt">...</div>
   <div className="temaTitle">{audioFiles[0]}</div>
   <div className="temaLenght" id="data2">{progress}</div>   
<div className="temaBar">Tema Bars </div> 
<div className="temaControls"><button>Play</button><button>Stop</button></div>




      </div>
    )
  }

export default Temas