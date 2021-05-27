
import {useState, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';

import React from 'react';
import ReactDOM from 'react-dom'
import Welcome from './Welcome'
import ShowBar from './ShowBar'
import BoldResult from './BoldResult'
import CreateDiv from './CreateDiv'

var completeLines=new Map


var runonces = false;
const cache = {};
var outPut =new Map
var isloading = true;
var SearchForMe = null
var  howmany=0 ;
const  SearchParts = (props) => {
    //listAllfiles()
if(props.searchme >""){
	SearchForMe=props.searchme



}
else{
	SearchForMe="jacobo"

}

importAll(require.context("../closeCaption", false, /\.(txt)$/));
		const textFiles = Object.entries(cache).map(module => module[1].default);

	function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)
	));
}
// end of getting a list of files



function occurrences(string, subString,completeFileName) {

    let allowOverlapping=1;
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf( subString , pos);
        if (pos >= 0) {

var subString = string.substring(pos -20 ,pos+100)


var finalStr =  subString

const testbold = subString.replaceAll(SearchForMe,"<span><strong>" + SearchForMe + "</strong></span>")

const fillout = <div style={{backgroundColor:"green"}}> {unescape(testbold)}</div>
const test2 = <CreateDiv title={completeFileName} fulltext={finalStr} searchMe={SearchForMe} />

completeLines = [...completeLines,test2]

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

	const fullResults =<>  {completeLines}  </>




	//ReactDOM.render(fullResults, document.getElementById('root'))


 	const displayResultsHTML= <span> <button onClick={showComplete} style={{paddingLeft:"10px"}}>...</button><button onClick={goB}>Back</button><h1>Results are {howmany}</h1> {outPut} </span>
ReactDOM.render(displayResultsHTML, document.getElementById('series'))

 }

}



function showComplete(){

	var subtitlesHide =document.getElementById('root');
	subtitlesHide.style.display="block"

	var totals = document.getElementById('series')
	totals.style.display="none"

}
function goB(){
	var path = window.location.origin ;

	window.location = path+"/search";

}

export default SearchParts
