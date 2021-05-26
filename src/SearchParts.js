
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


function boldQuery  (str, query) {
    const n = str.toUpperCase();
    const q = query.toUpperCase();
    const x = n.indexOf(q);
    if (!q || x === -1) {
        return str; // bail early
    }
    const l = q.length;
    var stuff2= str.substr(0, x) + '<strong>' + str.substr(x, l) + '</strong>' + str.substr(x + l)
    console.log(stuff2)

    return stuff2 ;
}

function boldString(str, substr) {
  var strRegExp = new RegExp(substr, 'g');
  return str.replace(strRegExp, '<stong>'+substr+'</strong>');
}

function occurrences(string, subString,completeFileName) {

    string += "";
    subString += "";
    let allowOverlapping=1;
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf( subString , pos);
        if (pos >= 0) {

var subString = string.substring(pos-10,pos+100)

var strReplaceMatch = <b>${string} </b>


let finalStr = subString.replaceAll(string, strReplaceMatch  )
console.log(finalStr)


const testline = <div style={{border:"10px 10px black",borderStyle:"inset",borderColor:"black"}}> <div style={{color:"gold",width:"60%",backgroundColor:"gray",textAlign:"center",borderStyle:"inset"}}> {completeFileName} </div><div style={{width:"50%"}}>{finalStr}</div></div>       	
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

	const fullResults = <div id='completR' style={{display:"none",color:"black",backgroundColor:"white",width:"70%", boxShadow:"25px 10px 10px white;",margin:"20px"}}>{completeLines}</div>



/*

const regexp = new RegExp(pattern, 'ig'); // ignore case (optional) and match all
const replaceMask = `$1<strong>$2</strong>$3`;

return text.replace(regexp, replaceMask);

*/


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
