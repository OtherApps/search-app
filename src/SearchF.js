// Importing combination

import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import SearchParts from './SearchParts';
//import fs from 'fs'
var searchText;
var howmanytimes=0;
var outPut;
const SearchF = () => {
var SearchV

var runonces=false;
const handleChange = e =>{

searchText = e.target.value;





}




delayState: {
        setTimeout(() => {

if(searchText !="" ){

			if(runonces ===false){


<SearchParts />


	runonces=true;
	clearInterval();

			}


		   }
        }, 10);
    }


return (

<div style={{align:"center"}}>


<table>
<tr>


<th colspan="2">
<h1>
Formulario de búsqueda
</h1>

</th>

</tr>


<tr>
<td>


<button style={{left:"30px",position:"absolute",height:"50px", width:"50px"}} onClick={searchFun}>
<i class="fa fa-search"></i></button>
</td>
<td style={{padding:"10px",top:"300px",left:"70px",width:"500px",position:"absolute"}}>

 <input  style={{width:"100%"}} name="TextboxSearch" id ="searchText" type="textbox"  onMouseOut={handleChange} />


</td>
</tr>

</table>






</div>



)
function searchFun(){

console.log("Search for fun function!");
if(searchText !="")
{
ReactDOM.render(<SearchParts searchme={searchText}/>, document.getElementById('root'));
}
else{
	alert("Must fill out everything.")

}

}

}




// Exporting the component
export default SearchF;
