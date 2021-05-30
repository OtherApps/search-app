
import React from 'react';
import ReactPlayer from "react-player";
import { PlayerIcon,Slider, Direction } from 'react-player-controls'
import ReactDOM from 'react-dom'
import bgImge from './Imagen122.jpg'
const https = require('https');
var radioJsonURL = "https://radio.laverdadeterna.com/api/nowplaying/1"
var isfinished = false;
let audioURL = "https://radio.laverdadeterna.com/radio/8000/radio.mp3"
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

function Information(){
    const audioRef = React.useRef(null)
    const[playing,setPlaying,count,setSate] = React.useState(false)
    const [progress, setProgress] = React.useState(0);
    const [song, setSong] = React.useState(0);
    const [dur, setDur] = React.useState(0);
    const togglePlaying=() =>setPlaying(prev => ! prev )
    var output
    var newstuff ="";
    var secondsLeft="";
    var songTitle = "";
    var playnigNext ="";
// gets the json data from the server 
function loadJson(){
  https.get(radioJsonURL, (resp) => {
     let data = '';
     // A chunk of data has been received.
     resp.on('data', (chunk) => {
       data += chunk;
     });
     // The whole response has been received. Print out the result.
     resp.on('end', () => {
     FixData(data)
isfinished=true;

     });

   }).on("error", (err) => {
     console.log("Error: " + err.message);
   });
}



useInterval(() => {
   if (audioRef && audioRef.current) {
   
   }
 });



function FixData(jsonData){
    var min = "0"
    var seconds = "0"
    newstuff = JSON.parse(jsonData);


    songTitle = newstuff.now_playing.song.title
//playingNext = newstuff.playing_next.song.text

    setSong(songTitle)
    setProgress(newstuff.now_playing.elapsed  )
    setDur(newstuff.now_playing.duration)


}
useInterval(() => {
loadJson()

 });


 // format seconds into a time   format 
function formatTime(s){
  var e = parseInt(s, 10),
  				n = Math.floor(e / 3600),
  				r = Math.floor((e - 3600 * n) / 60),
  				i = e - 3600 * n - 60 * r;
  			return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), ("00" !== n ? n + ":" : "") + r + ":" + i;

}
function hideme(){
 // hide the radio  window  
	var radioWindow =document.getElementById('radioW')
	radioWindow.addClass = "fadeOut"
	radioWindow.style.display="none"
}
return(

<div className="radiobox" style={{backgroundImage: `url(${bgImge})`,backgroundPosition:"cover",backgroundPosition: "center"}} id="radioW" >

<audio src={audioURL} ref={audioRef} id="audio2"></audio>
<div style={{width:"500px",color:"white",textShadow: "2px 2px 8px black;"}}>
<progress id="progressBar" max="100" value={((progress/dur) *100).toFixed()}> </progress><br/>
<span>{((progress/dur) *100).toFixed()} %</span>

<br/>
<span> <center style={{color:"purple"}}> {song}</center></span> <br/>
<span> <center style={{color:"purple"}}> {formatTime(progress)} / {formatTime(dur)}</center> </span>

<span>
<center style={{color:"white"}}>
<button onClick={hideme}> Salir </button>
 {playing ? (
      <button   onClick={togglePlaying}  > Stop </button>


          ) : (
          <button onClick={togglePlaying}> Play</button> 

          )}
      
</center>
</span>

</div><br/>

</div>

)


}

export default Information
