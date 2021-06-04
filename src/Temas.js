
import {useState, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';

import React from 'react';
import ReactDOM from 'react-dom'
const fs = require('fs');
const cache = {};



function Temas()  {




 




importAll(require.context("J:/cc_projects/temasAudio/", false, /\.(mp3)$/));
 const audioFiles = Object.entries(cache).map(module => module[1].default);

        function importAll(r) {
            r.keys().forEach((key) => (cache[key] = r(key)
            ));
        }

 
    return (
      <h1 style={{color:"white"}}>
        Testing 123 <br/> <audio src={audioFiles[0]} controls />
      </h1>
    )
  }

export default Temas