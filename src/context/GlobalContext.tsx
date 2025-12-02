import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import portugalJson from '../data/portugal.json';
import markersJson from '../data/markers.json';

// Marker type
interface Marker {
  id: number;
  name: string;
  lat: number;
  lng: number;
  image: string;
  link: string;
  color: string;
}

// GeoJSON types
interface Geometry {
  type: 'Polygon' | 'MultiPolygon';
  coordinates: number[][][] | number[][][][];
}

interface Properties {
  name: string;
  'ISO3166-1-Alpha-3': string;
  'ISO3166-1-Alpha-2': string;
}

interface Feature {
  type: 'Feature';
  properties: Properties;
  geometry: Geometry;
}

interface PortugalGeo {
  type: 'FeatureCollection';
  features: Feature[];
}

// Context type
interface GlobalContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  markers: Marker[];
  setMarkers: React.Dispatch<React.SetStateAction<Marker[]>>;
  portugalGeo: PortugalGeo;
  setPortugalGeo: React.Dispatch<React.SetStateAction<PortugalGeo>>;
}

// Provider props
interface GlobalProviderProps {
  children: ReactNode;
}

// Create context
export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

// Provider component
const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [markers, setMarkers] = useState<Marker[]>(markersJson);
  const [portugalGeo, setPortugalGeo] = useState<PortugalGeo>(
    portugalJson as PortugalGeo
  );

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        markers,
        setMarkers,
        portugalGeo,
        setPortugalGeo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default React.memo(GlobalProvider);
