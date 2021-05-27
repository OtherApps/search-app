import { useState, useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'


function BoldResult (props){

    var str =props.allofthetext
    var query = props.query

var txtFinal = str

var results= txtFinal.replaceAll(query ,"<i>"+query+"</i>" )

return(results)
}
export default BoldResult
