
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'



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
var test1=0;


			fetch(filename)
            .then(function(response){
                return response.text();
            }).then(function (data) {
      
		test1=  occurrences(data,findme)

		return  <div><h1>Found {findme} {filename} {test1}</h1> </div>	
		
	
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
	

	var displayout= displayAFile(textFiles[0],"2021")
	
if(displayout !=null)
{	ReactDOM.render( displayout,document.getElementById('root'));}

else{

 return (
        <div>
    <h1>Will display files here.</h1>
	{textFiles.join("<br>")}
	
	
        </div>
    )

}

}


export default SearchParts
