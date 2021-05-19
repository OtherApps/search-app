
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import ShowBar from './ShowBar';


var results; 
var outstuff="";
var seriesindex;
var isFinished= false; 
var ListOfData = {};

const GetData = () => {


const https = require('https');

https.get('data.json', (resp) => {
  let data = '';


  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
  // displayStuff(data);
  SaveData(data)
   
   
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


function SaveData(jsonStuff){
// Work the  json data  and save it  to array 
	var newstuff = JSON.parse(jsonStuff); 
	var start=0; 
	
	while(start <8)
	{
		
		if(newstuff.list[start].Series >"" ){
			
	
			let newItem  = new RowData(newstuff.list[start].Series,newstuff.list[start].titles,newstuff.list[start].links)
			ListOfData[start]= newItem 
			var part=  <option key={start} value={newstuff.list[start].Series}> {newstuff.list[start].Series }   </option>
			outstuff = [...outstuff,part]

		}; 
		
		start++; 
		
	}
	
	const seriesList = <center><div className="divCenter"><ShowBar/><select size="8" style={{overflow:"hidden"}} className='seriesList' onChange={handleChange} > {outstuff}</select><h1></h1></div></center>;
	ReactDOM.render(seriesList, document.getElementById('series'));
}

	
	
return (
<div>


<h1  className="logos">LVE APP </h1>
<button onDoubleClick={showstart()}>Enter</button>

</div>

)


  }


function handleChange2(e){
// Go to  selected  subtitle	

	var listofLinks= ListOfData[seriesindex].getLinks(); 
	var arrayoflinks= listofLinks.split(","); 
		window.location= arrayoflinks[e.target.selectedIndex]
	
}
function handleChange(e){
	
// On click will  display  subtitles  list
	var strList= ListOfData[e.target.selectedIndex].getTitles()
	var arrayofTitles = strList.split(",");
	
	
	var y =0; 
	var outstuff_html="";
	
	while(y < arrayofTitles.length)
	{
		var single =  <option key ={y}> {arrayofTitles[y]}</option> 
		outstuff_html = [...outstuff_html,single]
		y++;
		
	}
	
	seriesindex= e.target.selectedIndex;
	const seriesList = <><ShowBar/> <center><div className="divCenter" ><select  size="10"  className='seriesList' onChange={handleChange2} > {outstuff_html}</select><h1></h1><br/><button onClick={goB}>Back</button></div></center></>
;


//Display the subtitles
	ReactDOM.render(seriesList, document.getElementById('subtitles'));
	var seriesShow =document.getElementById('series')
	
	seriesShow.classList.add="fadeout"
	seriesShow.style.display="none"
	var subtitlesHide =document.getElementById('subtitles');
	subtitlesHide.style.display="block"
	
}

function goB(){
// Return to Serie list  

	var subtitlesHide =document.getElementById('subtitles');
	subtitlesHide.style.display="none"
	var seriesShow =document.getElementById('series')
	seriesShow.style.display="block"
console.log("has been click")

}
		function showSeries()
		{
// Make the series list visible again

			
	var seriesShow =document.getElementById('series')
	seriesShow.style.display="block"
	var sublinks =document.getElementById('subtitles')
	sublinks.style.display="none";
	
	
		}


// Class  to save the information  from the json file. 
class RowData{
	
	constructor(series,subTitles,links){
		this.series =series; 
		this.subTitles = subTitles; 
		this.links = links 
		
		
	}
	getSeries(){
		

		return this.series; 
		
	}
	
	getTitles(){
		
		return this.subTitles;
		
		
	}
	
	getLinks(){

		
	return this.links;
	
}
	
}	


  
function showstart(){

	var seriesShow =document.getElementById('series')
		seriesShow.style.display="block"
		var rootsHide =document.getElementById('root')
		rootsHide.style.display="none"
	
	}


export default GetData
