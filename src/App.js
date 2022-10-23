import React from 'react';
import { Map, View } from 'ol';
// import { transform } from 'ol/proj.js';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
// import 'ol/ol.css';
import './App.css';

function MapView() {
  const ref = useRef(null);
  const mapRef = useRef(null);
  useEffect(() => {
    if (ref.current && !mapRef.current) {
      mapRef.current = new Map({
        layers: [new TileLayer({ source: new OSM() })],
        view: new View({ center: [0, 0], zoom: 4 }),
        // help pls transform([122.3321, 47.6062], 'WGS84', 'EPSG:4326')
        target: ref.current
      });
    }
  }, [ref, mapRef]);

  useEffect(() => {
    mapRef.current?.getView();
  }, [mapRef]);

  return <div ref={ref} style={{ width: "100%", height: "500px"}} />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Walkable.</p>        
      </header>
    <div className="App-body">
      <div><MapView/></div>
        <p>
          Make walking feel safer.
        </p>  
      </div>
    </div>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
