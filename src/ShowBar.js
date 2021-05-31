import RadioF from './RadioF'
var isVisible = false; 
const  ShowBar = (props) => {
// Display Menu

function hideBar(){
var menuB = document.getElementById("2")
var current = menuB.style.visibility
if(isVisible ===false ){
  menuB.style.visibility ="visible"
  isVisible= true; 
}
else{
  menuB.style.visibility ="hidden"
  isVisible=false;
  
}

console.log("has been clicked")

}

return(
<div className="specialTop" style={{color:"white"}}>



<table>
<tr>

<td colSpan="2" style={{width:"300px"}}>
<center>
<font className="specialTitle"> 
<button onClick={hideBar}>
<i class="fa fa-bars" aria-hidden="true"></i>
</button> </font>
<div id="status"></div>

</center>

</td>
<td style={{padding:"0"}}>

</td>

<td>
<div id="2"  style={{color:"white",backgroundColor:"transparent",visibility:"hidden"}} >
<ul >
  <li><a className="active" href="./">Home</a></li>
  <li><a href="./Search">Búsqueda</a></li>
  <li><a href="./list">Conteo</a></li>

</ul>


</div>
</td>
</tr>
</table>

</div>

)
}

export default ShowBar
