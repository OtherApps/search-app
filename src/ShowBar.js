
var isVisible = false; 
const  ShowBar = (props) => {
// Display Menu

function hideBar(){
var menuB = document.getElementById("menuBs")
var current = menuB.style.visibility
if(isVisible ===false ){
  menuB.style.visibility ="visible"
  isVisible= true; 
}
else{
  menuB.style.visibility ="hidden"
  isVisible=false;

}



}

return(
<div style={{top:"40px",left:"0",color:"white"}}>

<div style={{alignItems:"left"}}>
<button onClick={hideBar} >
<i class="fa fa-bars" aria-hidden="true"></i>
</button>
 </div>


<div id="menuBs"  style={{position:"absolute", top:"45px",left:"100px",color:"white",backgroundColor:"transparent",visibility:"hidden"}} >
<ul >
  <li><a className="active" href="./">Home</a></li>
  <li><a href="./Search">Búsqueda</a></li>
  <li><a href="./list">Conteo</a></li>

</ul>


</div>


</div>

)
}

export default ShowBar
