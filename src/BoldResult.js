import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


function BoldResult (props){

    var str =props.allofthetext
    var query = props.query

var txtFinal = str

var results= txtFinal.replaceAll(query, '<b>' +query+'</b>')


return (

<>
{results}
</>
    )

}
export default BoldResult
