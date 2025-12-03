import React, { createContext, useState } from 'react';
import portugalJson from '../data/portugal.json';
import markersJson from '../data/markers.json';

export const GlobalContext = createContext();

const GlobalProvider = props => {
  const [darkMode, setDarkMode] = useState(false);
  const [markerGeo, setMarkerGeo] = useState(markersJson);
  const [portugalGeo, setPortugalGeo] = useState(portugalJson);
  const [filterOpen, setFilterOpen] = useState(false);
  const [flagOpen, setFlagOpen] = useState(false);
  const [flag, setFlag] = useState('us');
  const [hoveredId, setHoveredId] = useState(null);
  const [region, setRegion] = useState({
    All: L.latLngBounds([
      [39.5, -8],
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
  });
  const [selectedRegion, setSelectedRegion] = useState(['All']);
  const [zoomView, setZoomView] = useState(7);
  const [initialView, setInitialView] = useState([39.3999, -8.2245]);

  return (
    <GlobalContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default React.memo(GlobalProvider);
