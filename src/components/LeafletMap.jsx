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

const LeafletMap = () => {
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
    selectedRegion,
    setSelectedRegion,
    zoomView,
    setZoomView,
    initialView,
    setInitialView,
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
            center={initialView}
            zoom={zoomView}
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
            <ResetView />
            <ShowMyLocation />
            <ItemMarker />
            <MaskLayer />
            <Filter />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LeafletMap);
