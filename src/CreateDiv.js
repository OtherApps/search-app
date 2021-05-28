import react from "react"
import BoldResult from './BoldResult'
import ReactDOM from 'react-dom'

function CreateDiv(props){
	// props title, fulltext
var findMe=props.searchMe;

var styleTitle ={
color: "white",
width: "50%;",
height:"auto",
backgroundColor: "purple",
textOverflow: "----"
}
var hiddenStyle={
display:"none"

}
var showStyle={
display:"block"

}

var fullstuff = document.createElement("div")
var textfix = <BoldResult allofthetext={props.fulltext} query={findMe} />
var showbutton = <button onClick={showMore}>Show more</button>



return (
<div style={{backgroundColor:"purple", width:"50%",color:"gold",boxShadow:"2px 4px 2px black"}} >
<center><span style={{color:"gold",width:"50%"}}>{props.title}</span></center>

<div style={hiddenStyle}> {props.fulltext}<br/> </div>
<span>{textfix}</span>



</div>
)

function showMore(){



}

}

export default CreateDiv
