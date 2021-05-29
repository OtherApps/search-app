
import React from 'react';
import ReactPlayer from "react-player";
import { PlayerIcon,Slider, Direction } from 'react-player-controls'
import ReactDOM from 'react-dom'
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

 var timepassed = Math.floor(newstuff.now_playing.elapsed /60)
var totaltime = Math.floor(newstuff.now_playing.duration /60 )
output = totaltime


var newseconds = Math.floor((timepassed * 60) - newstuff.now_playing.elapsed);

 songTitle = newstuff.now_playing.song.title
//playingNext = newstuff.playing_next.song.text
setSong(songTitle)
   setProgress(newstuff.now_playing.elapsed  )
setDur(newstuff.now_playing.duration)

}
useInterval(() => {
loadJson()

 });


function formatTime(s){
  var e = parseInt(s, 10),
  				n = Math.floor(e / 3600),
  				r = Math.floor((e - 3600 * n) / 60),
  				i = e - 3600 * n - 60 * r;
  			return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), ("00" !== n ? n + ":" : "") + r + ":" + i;

}

return(

<div className="radiobox">
<audio s rc={audioURL} ref={audioRef} id="audio2"></audio>

<div style={{width:"300px"}}>
<progress id="progressBar" max="100" value={((progress/dur) *100).toFixed()}> </progress><br/>
 {((progress/dur) *100).toFixed()} %
<br/>

<span> <center style={{color:"white"}}> {song}</center></span> <br/>
<span> <center style={{color:"white"}}> {formatTime(progress)} / {formatTime(dur)}</center> </span>

</div>
 {playing ? (
      <button onClick={togglePlaying}  > Stop </button>


          ) : (
          <button onClick={togglePlaying}> Play</button>

          )}

</div>









)


}

export default Information
