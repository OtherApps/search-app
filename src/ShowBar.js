const  ShowBar = (props) => {

return(
<div className="specialTop">
<table>
<tr>

<td colspan="2" style={{width:"500px"}}><center>
<font className="specialTitle">LVE 2021</font></center>

</td>

<td colspan="1"></td>


<td>
<ul align="center">
  <li><a class="active" href="./">Home</a></li>
  <li><a href="./Search">Search</a></li>
  <li><a href="./list">Count Down</a></li>
  <li><a href="#about">About</a></li>
</ul></td>
</tr>
</table>

</div>

)
}

export default ShowBar