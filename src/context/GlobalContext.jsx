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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default React.memo(GlobalProvider);
