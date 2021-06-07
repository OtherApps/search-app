
import {useState, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';

import React from 'react';
import ReactDOM from 'react-dom'
import Temainfo from './info.json'
import SpecialDiv from './SpecialDiv'
import SongList from './SongList'
const fs = require('fs');
var cache = {};
var infoData =""
var TemaLength=0;
var selectC; 
var fixname3;
var imagesoftemas=0;


            
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

function importAll2(r) {
  return r.keys().map(r);
}        


        function importAll(r) {
            r.keys().forEach((key) => (cache[key] = r(key)
            ));
        }


  function formatTime(s){
              var e = parseInt(s, 10),
                n = Math.floor(e / 3600),
                r = Math.floor((e - 3600 * n) / 60),
                i = e - 3600 * n - 60 * r;
                
                return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), ("00" !== n ? n + ":" : "") + r + ":" + i;

} 




 
function main(selectTema){
 importAll(require.context("J:/cc_projects/temasAudio/", false, /\.(mp3)$/));
 const audioFiles = Object.entries(cache).map(module => module[1].default);
   const fixname=audioFiles[selectTema].split("/media/")
    const fixname2= fixname[1].split(".mp3")
     fixname3= fixname2[0].split(".")
    fixname3 = fixname3[0]
  selectC= audioFiles[selectTema]

var radioDiv = document.getElementById("radiod");
radioDiv.style.display="inline"

var temalist = document.getElementById("listaDeTemas")
temalist.style.display="none"


imagesoftemas = importAll2(require.context('J:/cc_projects/search-app/src/cover/', false, /\.(png|jpe?g|svg)$/));

loadinfo();


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



      }
   }
   else{

    console.log("Something wrong")
   }
});
function showLista(){
var listadetemas=document.getElementById("radiod");
listadetemas.style.display="none"
var hidelista = document.getElementById("listaDeTemas")
hidelista.style.display="inline"

}
function handle2(e){


main(e.target.selectedIndex)
}

    return (
<div>
<div id="listaDeTemas" ><SongList onhasbeenclicked={handle2}/></div> 
 <div  id="radiod" className="temaPlayer" style={{display:"none"}}>
      <audio src={selectC} id="tema1" ref={audioRef} />
<center>
  <SpecialDiv nameofstyle="temaTitle" displayText={fixname3}/>
  </center>
<br/>

  <div className="temaLength"><center>{formatTime(maxdur)} </center> </div>
  <div className="temaBar"> 
  <progress max="100" value={((progress/maxdur) *100).toFixed()} />
<br/>

  {(progress/100).toFixed()} 
  </div>




    <div className="temaControls">

         {playing ? (
          <button  style={{background:"transparent"}} onClick={togglePlaying}  > <i style={{color:"gold",fontSize:"30px"}}className="far fa-stop-circle" /> </button>


              ) : (
              <button style={{background:"transparent"}} onClick={togglePlaying}> <i style={{color:"white",fontSize:"30px"}}className="far fa-play-circle" /></button> 

              )}

    </div>



<div> <button onClick={showLista}> Lista de temas </button></div>

{

  <img src={imagesoftemas['1844 - El Cuerpo de Yeshúa 29.jpg']}/>
}

          </div>
          </div>
    )
  }

export default Temas