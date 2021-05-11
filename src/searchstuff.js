import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import fs from 'fs'
var howmanytimes=0; 
var outPut;
const searchstuff = () => {

search_form();

//console.log("testing");

}

function search_form(){
	
	console.log("testing");
	
}
export default searchstuff

/*
function search_forme(searchfor1){
	
	//console.log("With in function \r");
	var results=0; 
	// open dir
	fs.readdirSync("./.../closeCaption/").forEach(file => {
 

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

const data = fs.readFileSync("./.../closeCaption/"+file_name,
            { flag:'r'});
//indexOf(find_string)>0
if(data.indexOf(find_string)>0)
{


	
	var style_single= "aligh:center;color:gold;background-color:green;width:80%;height:20px;border-radius: 25px;font-stretch: expanded;box-shadow: 5px 10px black; font-size: 30px;padding-bottom:50px;border: 2px outset red;";
	
outPut += "<div style= '" + style_single  +"'><center>" +file_name +  "\t ocurrir  # " +occurrences(data,find_string)+ "</center></div>\n\n" ; 
howmanytimes=howmanytimes+ occurrences(data,find_string) ;

}

	
}
*/
