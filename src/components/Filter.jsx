import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import {
  Navbar,
  NavbarBrand,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useMap } from 'react-leaflet';

const Filter = () => {
  const map = useMap();

  const {
    //darkMode,
    //setDarkMode,
    markerGeo,
    setMarkerGeo,
    //portugalGeo,
    //setPortugalGeo,
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
  } = useContext(GlobalContext);

  // Handle checkbox change
  const handleCheckboxChange = region => {
    if (region === 'All') {
      setSelectedRegion(['All']);
    } else {
      setSelectedRegion(prev => {
        const filtered = prev.filter(r => r !== 'All');
        if (prev.includes(region)) {
          return filtered.filter(r => r !== region);
        } else {
          return [...filtered, region];
        }
      });
    }
  };

  // Fit map bounds when selectedRegion change
  useEffect(() => {
    if (selectedRegion.includes('All')) {
      map.fitBounds(region['All'], { animate: true });
    } else if (selectedRegion.length > 0) {
      // Combine bounds of all selected region
      const combinedBounds = L.latLngBounds([]);
      selectedRegion.forEach(r => combinedBounds.extend(region[r]));
      map.fitBounds(combinedBounds, { animate: true });
    }
  }, [selectedRegion, map, region]);

  // Check if a region is selected
  const isChecked = region => selectedRegion.includes(region);

  return (
    <Modal
      isOpen={filterOpen}
      style={{ overflow: 'hidden' }}
      contentClassName="rounded-modal"
      toggle={() => setFilterOpen(!filterOpen)}
      centered
    >
      <ModalHeader
        close={
          <button
            type="button"
            className="custom-close-btn"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            &times;
          </button>
        }
        className="modal-header-centered"
        toggle={() => setFilterOpen(!filterOpen)}
      >
        Filters
      </ModalHeader>

      <ModalBody>
        {Object.keys(region).map(item => (
          <FormGroup check key={item}>
            <Label check>
              <Input
                type="checkbox"
                checked={isChecked(item)}
                onChange={() => handleCheckboxChange(item)}
              />{' '}
              {item}
            </Label>
          </FormGroup>
        ))}
      </ModalBody>

      <ModalFooter className="d-flex justify-content-between">
        <Button
          color="link"
          onClick={() => setSelectedRegion(['All'])}
          style={{ textDecoration: 'none' }}
        >
          Clear all
        </Button>

        <Button color="secondary" onClick={() => setFilterOpen(false)}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Filter;
