import React from 'react';
import ReactPlayer from "react-player";
import { PlayerIcon,Slider, Direction } from 'react-player-controls'
import ReactDOM from 'react-dom'

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


function RadioF() {
const [progress, setProgress] = React.useState(0);
const[playing,setPlaying,count,setSate] = React.useState(false)
const togglePlaying=() =>setPlaying(prev => ! prev )
const audioRef = React.useRef(null)
let audioURL = "https://radio.laverdadeterna.com/radio/8000/radio.mp3"



useInterval(() => {
   if (audioRef && audioRef.current) {
     const { currentTime, duration } = audioRef.current;
     setProgress(Math.ceil(currentTime));

sayHi()


   }
 });

React.useEffect(()=>{
if(audioRef && audioRef.current)
{
if(playing){
audioRef.current.play();
setTimeout(sayHi, 1000)
}
else{
audioRef.current.pause();
clearInterval()


}

}




}


,[playing]
)

function sayHi(){
var min =0;
var seconds =0;
var horas ="0";

  min =( progress /60 )
  seconds = (min* 60) - progress

  var minutes = "0" + Math.floor(progress / 60);
  var seconds = "0" +  Math.floor(progress - minutes * 60);

if(minutes > 60 ){
horas = Math.floor(minutes/60)
minutes = "0"+ Math.floor(minutes / 60 ) - progress
seconds =( minutes *60 ) - progress
var dur = horas+":"+ minutes.substr(-2) + ":" + seconds.substr(-2);

}
else
{
  var dur =minutes.substr(-2) + ":" + seconds.substr(-2);

}



var current2 = <> {dur}</>
	ReactDOM.render(current2, document.getElementById('timeC'));

}




let stylesTest = {
display:"flex",

color:"purple",

fontSize:"14px",
padding:"10px",
width:"auto",
height:"auto"


}
  return (
    <div style={stylesTest}>
<audio src={audioURL} ref={audioRef} id="audio2"></audio>






{playing ? (
      <button onClick={togglePlaying} > Stop </button>


          ) : (
          <button onClick={togglePlaying}> Play</button>

          )}


                    <div id="timeC" style={{color:"gold"}}>


                    </div>






    </div>

  );



}


export default RadioF
