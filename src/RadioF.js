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



var current2 = <div> Current play time {dur}</div>
	ReactDOM.render(current2, document.getElementById('timeC'));

}




let stylesTest = {

borderRadius:"30px",
     backgroundRepeat: "no-repeat;",
      boxShadow:" 5px 10px 10px black;",
color:"white",
backgroundColor:"purple",
fontSize:"20px",
padding:"30px"
}
  return (
    <div className='player-wrapper'>

<div>




</div>

<audio src={audioURL} ref={audioRef} id="audio2"></audio>
<div><div id="timeC">


</div>
    <div style={{width:"40px"}}  >
<a onClick={togglePlaying}>

{playing ? (
            <svg style={stylesTest}
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>


          ) : (
            <svg
            style={stylesTest}
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
          </a>



          </div>

  {



  }

</div>




    </div>

  );
  var elem = document.getElementById("audio2");

  elem.addEventListener('playing', (event) => {
    console.log('Video is no longer paused');
  });


}


export default RadioF
