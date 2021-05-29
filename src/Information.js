
import React from 'react';
import ReactPlayer from "react-player";
import { PlayerIcon,Slider, Direction } from 'react-player-controls'
import ReactDOM from 'react-dom'
const https = require('https');
var radioJsonURL = "https://radio.laverdadeterna.com/api/nowplaying/1"
var isfinished = false;

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
 const [progress, setProgress] = React.useState(0);
 const [song, setSong] = React.useState(0);
  const [dur, setDur] = React.useState(0);
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


if(progress >60){

  output = Math.floor((progress/60) - progress)
}

function formatTime(s){
  var e = parseInt(s, 10),
  				n = Math.floor(e / 3600),
  				r = Math.floor((e - 3600 * n) / 60),
  				i = e - 3600 * n - 60 * r;
  			return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), ("00" !== n ? n + ":" : "") + r + ":" + i;

}

return(

<div className="radiobox">
<span>Title {song}</span>
<br/>
<span>{
formatTime(progress)} / {formatTime(dur)}</span> <br/>
<progress  id="progressBar" max="100" value={(progress/dur) *100}> </progress><span>{((progress/dur) *100).toFixed()} %</span>
</div>

)


}

export default Information
