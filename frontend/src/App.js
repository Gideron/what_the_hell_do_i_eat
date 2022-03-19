import './App.css';
import React,{useState} from 'react'

function App() {
  return (
    <div className="App">
      <div className="map-view">
        <div className="map-element">
          <iframe title="template map" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=pieni-helvetti,%20kuopio&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
        <MapMenuElement/>
      </div>
    </div>
  );
}

//function ShowMenuSettings
function MapMenuElement() {
  const [showSettings, setShowSettings]=useState(true)
  return (
    <div className="map-menu-element">
      <ul className="map-menu-nav">
        <li className={showSettings?"selected":""}><button onClick={()=>setShowSettings(true)}>Settings</button></li>
        <li className={showSettings?"":"selected"}><button onClick={()=>setShowSettings(false)}>Listing</button></li>
      </ul>
      <div className="map-menu-content">
        {showSettings?<MapMenuSettings/>:<MapMenuListing/>}
      </div>
    </div>
  );
}

function MapMenuSettings() {
  return (
    <h2>Settings</h2>
  );
}
function MapMenuListing() {
  return (
    <h2>Listing</h2>
  );
}

export default App;
