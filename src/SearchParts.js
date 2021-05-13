
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


var howmanyTimes=0; 
const cache = {};
var outPut =""; 

var  howmany=0 ;
const  SearchParts = () => {
    //listAllfiles()


importAll(require.context("../closeCaption", false, /\.(txt)$/));
		const textFiles = Object.entries(cache).map(module => module[1].default);
		
	function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)
	));
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
function displayAFile(filename,findme){

fetch(filename)
            .then(function(response){
                return response.text();
            }).then(function (data) {
      
		howmany = occurrences(data,findme)

	
			
        })

 


}

	var totalSize=Object.keys(textFiles).length;
	var done=false 	
	var start=0;
	/*while(start<totalSize){
		
		displayAFile(textFiles[start],searchfor)
		start++




	}
	*/
	

	
	


//console.log(howmany )

		//ReactDOM.render(outPut, document.getElementById('root'));
	


 return (
        <div>
    <h1>Will display files here.</h1>
	{howmany}
	
	
        </div>
    )



}


export default SearchParts
