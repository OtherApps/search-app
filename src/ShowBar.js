import RadioF from './RadioF'
const  ShowBar = (props) => {
// Display Menu

return(
<div className="specialTop" style={{color:"black"}}>



<table>
<tr>

<td colSpan="2" style={{width:"300px"}}>
<center>
<font className="specialTitle">  </font>
<div id="status"></div>

</center>

</td>
<td style={{padding:"0"}}>

</td>

<td>
<ul style={{color:"black",backgroundColor:"white"}}>
  <li><a className="active" href="./">Home</a></li>
  <li><a href="./Search">Búsqueda</a></li>
  <li><a href="./list">Conteo</a></li>

</ul>

</td>
</tr>
</table>

</div>

)
}

export default ShowBar
