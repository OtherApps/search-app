const  ShowBar = (props) => {
// Display Menu

return(
<div className="specialTop">
<table>
<tr>

<td colSpan="2" style={{width:"auto"}}>
<center>
<font className="specialTitle"> LVE 2021 </font>
<div id="status"></div>

</center>

</td>
<td style={{padding:"0"}}>
</td>

<td>
<ul >
  <li><a className="active" href="./">Home</a></li>
  <li><a href="./Search">Búsqueda</a></li>
  <li><a href="./list">Conteo</a></li>

</ul></td>
</tr>
</table>

</div>

)
}

export default ShowBar