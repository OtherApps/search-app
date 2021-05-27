import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


function BoldResult (props){

    var str =props.allofthetext
    var query = props.query

var results= str.replaceAll(query, '<b>' +query+'</b>')


return (

<div>

{results}
</div> 
    )

}
export default BoldResult