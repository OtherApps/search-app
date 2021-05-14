
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Welcome from './Welcome'

var runonces = false; 
const cache = {};
var outPut =""; 
var isloading = true;

var  howmany=0 ;
const  SearchParts = (props) => {
    //listAllfiles()


importAll(require.context("../closeCaption", false, /\.(txt)$/));
		const textFiles = Object.entries(cache).map(module => module[1].default);
		
	function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)
	));
}	
// end of getting a list of files


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
      
		
		const onlythis = occurrences(data,findme)
		howmany= howmany+ onlythis
		const nameOnly= filename.split('/media/');
		const removeEnd = nameOnly[1].split(".txt");
		if(onlythis >=1){
		const currentFiles = <span>{removeEnd[0]} <i><b>{onlythis}</b></i><br/></span> 
		
		outPut =[...outPut, currentFiles]; 
		}
		

        })


		

}
 
Finalstage("jacobo");

	   delayState: {
        setTimeout(() => {
       
if(!isloading){

			if(runonces ===false){
	displayResults();
	runonces=true; 
	clearInterval();
	
			}

	
		   }
        }, 11200);
    }
	
 return (
        <div>

	<Welcome/>
	
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
 const displayResultsHTML= <span><h1>Results are {howmany}</h1> {outPut}</span>
	 ReactDOM.render(displayResultsHTML, document.getElementById('root'))
 }
}
		

export default SearchParts
