/* eslint-disable no-mixed-operators */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import style from './Map.module.css';
import MAP_STYLE from './map-style-basic-v8.json';

/* const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const map = new mapboxgl.Map({
  container: '#container',
  style: 'mapbox://styles/mapbox/streets-v11',
}); */

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 6.2518400,
    longitude: -75.5635900,
    zoom: 12,
    width: window.innerWidth,
    height: window.innerHeight,
    pitch: 50,
  });
  return (
    <div className={style.container}>
      <ReactMapGL
        mapStyle={MAP_STYLE}
        mapboxApiAccessToken="pk.eyJ1IjoibWxvY29jbyIsImEiOiJja29pbmo0YjIxaHJ2MnpzOTV3M3NqczYxIn0.ab6G9p9ZpGK3EJFB7YfYNw"
        {...viewport}
        onViewportChange={(newView) => setViewport(newView)}
      >
        <Marker latitude={6.2518400} longitude={-75.5635900} offsetTop={-viewport.zoom * 5 / 2}>
          <span
            className={style.marker}
            style={{ width: viewport.zoom * 5, height: viewport.zoom * 5 }}
          >
            <FaMapMarkerAlt />
          </span>
        </Marker>
      </ReactMapGL>
    </div>
  );
}
