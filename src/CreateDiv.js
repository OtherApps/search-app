import BoldResult from './BoldResult'
import ReactDOM from 'react-dom'

// This is needed   by the search function 
//  This also sends words  to  get bolded 
var stylesTitle ={

color:"white"

}
function CreateDiv(props){
    // props title, fulltext
var findMe=props.searchMe;
var showbutton = <button onClick={showMore}>Show more</button>

var hiddenStyle=props.hiddenStyle;
var textfix = <BoldResult allofthetext={props.fulltext} query={findMe} />


return (

<div style={{backgroundColor:"purple", width:"50%",color:"gold",boxShadow:"2px 4px 2px black"}} >
<center><span style={{color:"gold",width:"50%"}}>{props.title}</span></center>

<div style={stylesTitle}> {textfix} <br/> </div>

</div>
)
function showMore(){


}
}
export default CreateDiv