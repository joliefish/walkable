import mapflat from './mapbg.png';
import React from 'react';
import { Map, View } from 'ol';
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
        view: new View({ center: [0, 0], zoom: 2 }),
        target: ref.current
      });
    }
  }, [ref, mapRef]);

  useEffect(() => {
    mapRef.current?.getView();
  }, [mapRef]);

  return <div ref={ref} style={{ width: "80%", height: "500px" , left: "20%"}} />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Hello World </p>        
      </header>
      <div><MapView /></div>
      <p>
          Hello World
          Edit <code>src/App.js</code> and save to reload.
        </p>  
    </div>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
