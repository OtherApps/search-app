
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Welcome from './Welcome'
import ShowBar from './ShowBar'
var completeLines=""

var runonces = false; 
const cache = {};
var outPut =""; 
var isloading = true;
var SearchForMe=""
var  howmany=0 ;
const  SearchParts = (props) => {
    //listAllfiles()
if(props.searchme >""){
	SearchForMe=props.searchme
	console.log("In the second stage "+ SearchForMe)
	
	
}
else{
	SearchForMe="jacobo"
	console.log("In the second stage!")
}

importAll(require.context("../closeCaption", false, /\.(txt)$/));
		const textFiles = Object.entries(cache).map(module => module[1].default);
		
	function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)
	));
}	
// end of getting a list of files


function occurrences(string, subString,completeFileName) {

    string += "";
    subString += "";
    let allowOverlapping=0;
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
const testline = <div> {string.substring(pos,pos+200)} En que tema: {completeFileName} </div>       	
completeLines = [...completeLines,testline  ]  

            ++n;
            pos += step;
        } else break;
    }
	 isloading= false
    return n;
}

// function works fine  above  will search for  a string 

function displayAFile(filename,findme){
var test1=0;


			fetch(filename)
            .then(function(response){
                return response.text();
            }).then(function (data) {
      
		
		const nameOnly= filename.split('/media/');
		const removeEnd = nameOnly[1].split(".txt");
		const finalfix = removeEnd[0].split("."); 
		
		const onlythis = occurrences(data,findme,finalfix[0])
		howmany= howmany+ onlythis
		if(onlythis >=1){


		let  examples= <span> {finalfix[0]} <i><b>{onlythis}</b></i></span>
		const currentFiles = <div>{examples}</div> 
		
		outPut =[...outPut, currentFiles]; 
		}
		

        })


		

}
 
Finalstage(SearchForMe);

	   delayState: {
        setTimeout(() => {
       
if(!isloading){

			if(runonces ===false){
	displayResults();
	runonces=true; 
	clearInterval();
	
			}

	
		   }
        }, 1200);
    }
	
 return (
        <div>
		<h1>Results</h1>
		
        </div>
    )



function Finalstage(searchfor){
	
var totalSize=Object.keys(textFiles).length;
	var done=false 	
	var start=0;
	while(start<totalSize){
		
	displayAFile(textFiles[start],searchfor)
		start++





	}
	isloading=false; 
	
	
}
	
	 function displayResults(){

	const fullResults = <div id='completR' style={{display:"none",color:"white",backgroundColor:"black", width:"50%"}}>{completeLines}</div>
	ReactDOM.render(fullResults, document.getElementById('root'))


 	const displayResultsHTML= <span> <button onClick={showComplete} style={{paddingLeft:"10px"}}>Full Results </button><button onClick={goB}>Back</button><h1>Results are {howmany}</h1> {outPut} </span>
	ReactDOM.render(displayResultsHTML, document.getElementById('series'))


 }
}

function showComplete(){

	var subtitlesHide =document.getElementById('completR');
	subtitlesHide.style.display="block"

	var totals = document.getElementById('series')
	totals.style.display="none"

}
function goB(){
	var path = window.location.origin ;

	window.location = path+"/search";
	
}		

export default SearchParts
