import BoldResult from './BoldResult'
import ReactDOM from 'react-dom'

// This is needed   by the search function 
//  This also sends words  to  get bolded 

function CreateDiv(props){
    // props title, fulltext
var findMe=props.searchMe;
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