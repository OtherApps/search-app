
import {useState, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';
import './temas.css'
import React from 'react';
import ReactDOM from 'react-dom'
const fs = require('fs');
const cache = {};



function Temas()  {




   const audioRef = React.useRef(null)

importAll(require.context("J:/cc_projects/temasAudio/", false, /\.(mp3)$/));
 const audioFiles = Object.entries(cache).map(module => module[1].default);

        function importAll(r) {
            r.keys().forEach((key) => (cache[key] = r(key)
            ));
        }

 const fixname=audioFiles[0].split("/media/")
 const fixname2= fixname[1].split(".mp3")
 const fixname3= fixname2[0].split(0)
 const audioP = document.getElementById("tema1")

function getDuration(src) {
    var audio = new Audio();
    var texthere = document.getElementById("temalength")
 
  return audio.duration
}



    return (
 

 <div className="temaPlayer">
      <audio src={audioFiles[0]} id="tema1" href={audioRef} preload="metadata"/>
<div classname="temaArt"><img src=""/></div>
   <div className="temaTitle">{fixname3[0]}</div>
   <div className="temaLenght" id="temalength">{audioRef.duration} </div>   
<div className="temaBar">Tema Bars </div> 
<div className="temaControls"><button>Play</button><button>Stop</button></div>




      </div>
    )
  }

export default Temas