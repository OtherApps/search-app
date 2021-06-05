const base64 = require('base64-js');
const mm = require('music-metadata');
const util = require('util');
const fs = require('fs');
var fileName="";
let jsonData= [""];

var xedin=0; 


start();


function start(){
	console.log();
	
	
fs.readdirSync("J:/cc_projects/temasAudio").forEach(file => {
if(file.indexOf(".mp3") <0 )return;


var FirstFileOnly= "J:/cc_projects/temasAudio/"+ file;
SongInfo(xedin,FirstFileOnly,file);


//jsonData.push(s);

xedin ++
});

}





function  SongInfo(sIndex,filename,title){

(async () => {
  try {
    const metadata = await mm.parseFile(filename);
    var data2=(util.inspect(metadata, { showHidden: false, depth: null }));
	
	var lengthOfTopic=metadata.format.duration;
	var titleOfTopic = metadata.common.title;
	//console.log(title, lengthOfTopic);
	var newSong = new temas(title,lengthOfTopic);
	
	jsonData = jsonData+newSong;
	
	
  } catch (error) {
    console.error(error.message);
  }
})();


}

class temas{
	
constructor(title,temaLength){
	this.title= title; 
	this.temaLength = temaLength
	console.log("{ title :" + this.title  + ", length:" + temaLength + " }\r");
	
	
}	
	RTitle()
	{
		return this.title; 
		
	}
RLength(){
	
	return temaLength
}
	
	
	
}





