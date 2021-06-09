const express = require('express')
const serveIndex = require('serve-index')
var http = require('http');
var formidable = require('formidable');
const url = require('url');
var fs = require('fs');
const multer = require('multer');
const path = require('path');
const uuid = require('uuid').v4;
const app = express();
const fileSystem = require('fs');
const ss = require('socket.io-stream');
var outPut="<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'><head><title></title></head><body>"; 
var howmanytimes=0; 
const api =express();
var startofplay = 0;
var currentSong = [];
var saveonces = false;

var currentPlay=0;


var playingnow = './HELLo 2021 - El Cuerpo de Yeshúa 28.mp3';
 
app.use(express.urlencoded({
  extended: true
}))
app.get('/', (req, res) => {
 loadFile(res,"./public2/index.html"); 
 
  
})
app.get('/api',(req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

//res.Head(200, {'Content-Type': 'text/html'});
res.writeHead(200,'Content-Type', 'application/json');
//res.writeHead
currentSong[0].setCurrent(currentPlay)


var output = JSON.stringify(currentSong )

 res.write(output)
res.end();

})



function playnow(req,res)
{

     const filePath = path.resolve(__dirname, './../temasAudio',playingnow);
  // get file size info
  const stat = fileSystem.statSync(filePath);

  // set response header info
  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': stat.size

  });
  //create read stream
  const readStream = fileSystem.createReadStream(filePath);
  // attach this stream with response stream
  readStream.pipe(res);
if(saveonces !=true){var
 timeofEnd=loadJson("HELLo 2021 - El Cuerpo de Yeshúa 28.mp3");
//console.log( "Started at " + startofplay + " \n Will end at " +timeofEnd )

var temp = new songinfo(playingnow,startofplay,timeofEnd)
currentSong.push(temp)
saveonces=true; 

}

else{
currentSong[0].setCurrent(startofplay)

}


}
app.get('/livenow',(req,res)=>{

playnow(req,res)


})

const server = http.createServer(app);
const io = require('socket.io')('3000').listen(server, {
  log: false,
  agent: false,
  origins: '*:*',
  transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
});



app.post('/search', (req, res) => {

var searchfor= req.body.searchforme


 search_forme(searchfor); 
  res.writeHead(202); 
  	var style_single= "aligh:center;color:gold;background-color:green;width:80%;height:50px;font-stretch: expanded;box-shadow: 5px 10px black; font-size: 40px;padding:10px;border: 5px outset red;";
  

 

var newout = "<div style='"+style_single+"'><center> "+searchfor+"\t ocurrir #"+howmanytimes+"  veces o vece promido # <b> " + howmanytimes /108 + "</b></center></div>"; 
 res.write(newout);  
 res.write("<div id='detials'>" + outPut + "</div></body></html>"); 
// res.close(); 
 
})

function search_forme(searchfor1){
	
	//console.log("With in function \r");
	var results=0; 
	// open dir
	fs.readdirSync("./closeCaption/").forEach(file => {
 

findme(file,searchfor1);

	

	});
	
	
	
	return results; 
}

function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}



function findme(file_name,find_string){

const data = fs.readFileSync("./closeCaption/"+file_name,
            { flag:'r'});
//indexOf(find_string)>0
if(data.indexOf(find_string)>0)
{


	
	var style_single= "aligh:center;color:gold;background-color:green;width:80%;height:20px;border-radius: 25px;font-stretch: expanded;box-shadow: 5px 10px black; font-size: 30px;padding-bottom:50px;border: 2px outset red;";
	
outPut += "<div style= '" + style_single  +"'><center>" +file_name +  "\t ocurrir  # " +occurrences(data,find_string)+ "</center></div>\n\n" ; 
howmanytimes=howmanytimes+ occurrences(data,find_string) ;

}

	
}


function loadFile(response,filename){




response.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('./'+filename, null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
      response.end();
	  
	  
	  
    });


  
}

function loadJson(filename) {
let jsondata = require("./src/info.json");
var i =0;

while(i <jsondata.length){

var tempname = jsondata[i].title
if(tempname.indexOf(filename) != -1){

return (jsondata[i].Tema_length)
break;

}
else{
//console.log(jsondata[i].title)
}
    i++;
}
}


 function formatTime(s){
              var e = parseInt(s, 10),
                n = Math.floor(e / 3600),
                r = Math.floor((e - 3600 * n) / 60),
                i = e - 3600 * n - 60 * r;
                
                return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), ("00" !== n ? n + ":" : "") + r + ":" + i;

}
    


app.listen(3003, () => console.log('🚀 is on port 3003...'))
keeptrack();


function keeptrack (){



setInterval(function(){ 
currentPlay++;

//console.log(currentPlay)
//return (formatTime(temp));

}, 1000);//run this thang every 2 seconds

}

class songinfo {

constructor(songTitle,currentrun,maxTime){

this.song = songTitle;


this.cTime =  currentrun

var temptime = formatTime(maxTime)
this.maxTime= temptime
}

setCurrent(cNow){
    this.cTime= cNow
}
getSong(){

    return this.song
}

getCurrentTime(){

    return this.cTime;
}
getMaxTime(){

    return this.maxTime
}

}