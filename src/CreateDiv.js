import react from "react"
import BoldResult from './BoldResult'
function CreateDiv(props){
	// props title, fulltext 
var findMe=props.searchMe; 

var styleTitle ={
color: "black", 
width: "60%;",
height:"auto",
backgroundColor: "#FAF2F1", 
textAlign: "center;",
borderStyle: "outset",
itemAlign:"center",
width:"100%",

padding:"10px",
borderShadow:" 14px 15px 25px black",
border: "1px solid black;",
boxSizing:"content-box",
textOverflow: "----"
}

var textfix = <BoldResult allofthetext={props.fulltext} query={findMe} />

return (
<div style={{color:"gold",width:"100%",padding:"40px"}} >
<center><span style={{color:"gold"}}>{props.title}</span></center>

<div style={styleTitle}> {props.fulltext}</div>


</div>
)


}

export default CreateDiv