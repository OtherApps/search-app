const  ShowBar = (props) => {

return(
<div className="specialTop">
<table>
<tr>

<td colspan="1" style={{width:"300px"}}>
<center>
<font className="specialTitle">LVE 2021</font>
</center>

</td>
<td style={{padding:"0"}}>
</td>



<td>
<ul align="center">
  <li><a class="active" href="./">Home</a></li>
  <li><a href="./Search">Búsqueda</a></li>
  <li><a href="./list">Conteo</a></li>

</ul></td>
</tr>
</table>

</div>

)
}

export default ShowBar