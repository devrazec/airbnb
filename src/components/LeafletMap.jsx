import React, { useEffect, useState, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import ResetView from './ResetView';
import ShowMyLocation from './ShowMyLocation';
import MaskLayer from './MaskLayer';
import ItemMarker from './ItemMarker';
import Filter from './Filter';

import { GlobalContext } from '../context/GlobalContext';

import L from 'leaflet';

const INITIAL_CENTER = [39.5, -8];
const INITIAL_ZOOM = 7;

const LeafletMap = () => {
  const regions = {
    All: L.latLngBounds([
      [38.7, -9.5],
      [41.2, -7.5],
    ]),
    Lisbon: L.latLngBounds([
      [38.69, -9.25],
      [38.82, -9.05],
    ]),
    Porto: L.latLngBounds([
      [41.11, -8.74],
      [41.19, -8.53],
    ]),
    Faro: L.latLngBounds([
      [37.0, -8.1],
      [37.2, -7.8],
    ]),
  };

  const {
    darkMode,
    setDarkMode,
    markerGeo,
    setMarkerGeo,
    portugalGeo,
    setPortugalGeo,
    filterOpen,
    setFilterOpen,
    flagOpen,
    setFlagOpen,
    flag,
    setFlag,
    hoveredId,
    setHoveredId,
    region,
    setRegion,
  } = useContext(GlobalContext);

  const cardStyle = darkMode ? { background: '#222', color: '#fff' } : {};

  const createBlinkIcon = (color = '#ff0000') => {
    return L.divIcon({
      className: 'blinking-marker',
      html: `<div class="marker-circle" style="background-color: ${color}"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });
  };

  return (
    <div className="container">
      <div className="card shadow border-0">
        <div className="card-body p-0">
          <MapContainer
            center={INITIAL_CENTER}
            zoom={INITIAL_ZOOM}
            scrollWheelZoom={true}
            zoomControl={true}
            className="w-100"
            style={{
              height: '85vh',
              borderRadius: '1rem 1rem 1rem 1rem',
            }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Controls */}
            <ResetView center={[39.3999, -8.2245]} zoom={7} />
            <ShowMyLocation />
            <ItemMarker />
            <MaskLayer />
            <Filter regions={regions} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LeafletMap);
