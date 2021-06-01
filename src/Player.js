import React from 'react'
import ReactDOM from 'react-dom'
import bgImge from './Imagen122.jpg'
const https = require('https');
var radioJsonURL = "https://radio.laverdadeterna.com/api/nowplaying/1"
var isfinished = false;
let audioURL = "https://radio.laverdadeterna.com/radio/8000/radio.mp3"

var songArt="";

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


export default function Player() {

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
    if(playing){
      audioRef.current.play();
      }
      else{
      audioRef.current.pause();
      }
   }
 });



function FixData(jsonData){
    newstuff = JSON.parse(jsonData);

songArt = newstuff.now_playing.song.art

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
	//radioWindow.style.className = "fadeOut"
	radioWindow.style.display="none"
}






    return (
        <div className="PlayerBox" >
            <audio src={audioURL} ref={audioRef} id="audio2"></audio>

            <div className="SongTitle">{song}</div>
          

          
            <div className="SongTime"> {formatTime(progress)} / {formatTime(dur)}</div>
            <div className="SongBar">
                
            <progress max="100"  value={((progress/dur) *100).toFixed()}>
             </progress> <br/>
<center>

<span style={{color:"white"}}>{((progress/dur) *100).toFixed()}%</span>

</center>
             
             </div>
            <div className="SongButton">
<center>
            {playing ? (
      <button  style={{background:"transparent"}} onClick={togglePlaying}  > <i style={{color:"gold",fontSize:"30px"}}className="far fa-stop-circle" /> </button>


          ) : (
          <button style={{background:"transparent"}} onClick={togglePlaying}> <i style={{color:"white",fontSize:"30px"}}className="far fa-play-circle" /></button> 

          )}
</center>
            </div>

        </div>
    )
}
