import React from 'react';
import Map from './components/map.js';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  
// Fetch Function   
  fetch("./osm_liberty.json").then(
    function(res){
    return res.json()
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )

  return(
    <div>
      <h1>"MapLibreJS"</h1>
        <nav>
          <ul>
            <li><Link to="/osm_liberty.json">Style</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      <Map/>
      
    </div>
  )
}

export default App;