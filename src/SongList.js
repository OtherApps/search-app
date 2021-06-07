import react from "react"
import sinfo from './info.json'
import CreateListItem from "./CreateListItem"
function SongList(props){
var songs = new Array
var output= ""; 

// read json file and create a list of ul 
var i=0;

while(i < sinfo.length)
{

var singleSong = new temas(sinfo[i].title,sinfo[i].Tema_length)
var singleline2= <CreateListItem key={i} itemName={sinfo[i].title} />
//var singleline = <div> {sinfo[i].title}  : {sinfo[i].Tema_length}</div>
output =[...output,singleline2 ]
songs.push(singleSong)
i++;

}
return(<select size="5" onChange={props.onhasbeenclicked}> {output}</select>)






}


export default SongList

class temas{
	
constructor(title,temaLength){
	this.title= title; 
	this.temaLength = temaLength
//	console.log("{ title :" + this.title  + ", length:" + this.temaLength + " }\r");
	
	
}	
	GetSong() {

		return this.title; 
	}

	GetLen() {
		return this.temaLength;

	}
	
}
