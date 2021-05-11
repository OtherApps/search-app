// Importing combination

import React, {Component} from 'react';
import ReactDOM from 'react-dom'
//import fs from 'fs'

var howmanytimes=0; 
var outPut;
const SearchF = () => { 
var SearchV

const handleChange = e =>{

console.log(e.target.value)
//search_forme(e.target.value)
}
 
return (
<div style={{color:"gold"}}><h1>Search form</h1>


<table><tr><td>Search For </td><td><input name="TextboxSearch"  id ="searchText" type="textbox"  onMouseOut={handleChange} /></td></tr></table>
<button name="">test</button>
</div>
)
   

}



// Exporting the component
export default SearchF;
