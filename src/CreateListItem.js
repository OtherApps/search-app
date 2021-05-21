import react from "react"

function CreateListItem(props){
	
return (
<option key={props.keys} value={props.itemName}>{props.itemName}</option>

)


}

export default CreateListItem