import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const ResetView = () => {
  const map = useMap();

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

  useEffect(() => {
    // Find the existing zoom control container
    const zoomControl = document.querySelector('.leaflet-control-zoom');

    if (!zoomControl) return;

    // Create new button
    const btn = L.DomUtil.create(
      'a',
      'leaflet-control-zoom-reset',
      zoomControl
    );

    btn.innerHTML = '<i class="bi bi-arrow-clockwise"></i>';
    btn.href = '#';
    btn.title = 'Return to default view';

    // Match the styling of other buttons
    btn.classList.add('leaflet-control-zoom-in'); // apply same CSS dimensions

    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.fontSize = '22px';
    btn.style.fontWeight = 'bold';

    btn.onclick = e => {
      e.preventDefault();
      map.setView(initialView, zoomView, { animate: true });
    };

    // Cleanup — remove only our button
    return () => {
      if (btn && zoomControl.contains(btn)) {
        zoomControl.removeChild(btn);
      }
    };
  }, [map, initialView, zoomView]);

  return null;
};

export default ResetView;
