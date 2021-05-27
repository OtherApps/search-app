import { useState, useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'


function BoldResult (props){

    var str =props.allofthetext
    var query = props.query

var txtFinal = str

var results= txtFinal.replaceAll(query ,query.bold())


return(

{results}


)

}
export default BoldResult
