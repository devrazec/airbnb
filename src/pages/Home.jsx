import { useState, useContext } from 'react';
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

import LeafletMap from '../components/LeafletMap';

import { GlobalContext } from '../context/GlobalContext';

export function Home() {
  const {
    //darkMode,
    //setDarkMode,
    //markerGeo,
    //setMarkerGeo,
    //portugalGeo,
    //setPortugalGeo,
    filterOpen,
    setFilterOpen,
    flagOpen,
    setFlagOpen,
    flag,
    setFlag,
  } = useContext(GlobalContext);

  return (
    <div className="min-vh-100 d-flex flex-column position-relative">
      {/* Top Bar */}
      <Navbar
        color="light"
        light
        className="border-bottom px-3 justify-content-between"
      >
        <NavbarBrand href="#">
          <img src="/airbnb/img/logo.png" alt="Company Logo" height="32" />
        </NavbarBrand>

        <div className="d-flex justify-content-center flex-grow-1">
          <Button
            className="d-flex align-items-center border"
            style={{
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '50px',
              gap: '5px',
              minWidth: '80px',
              justifyContent: 'center',
              padding: '0.2rem 0.5rem',
              fontWeight: '500',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderColor: '#ddd',
            }}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <i className="bi bi-sliders" style={{ fontSize: '20px' }}></i>
            Filters
          </Button>
        </div>

        <div className="d-flex align-items-center">
          <Dropdown
            isOpen={flagOpen}
            toggle={() => setFlagOpen(!flagOpen)}
            className="me-2"
          >
            <DropdownToggle
              color="secondary"
              className="rounded-circle d-flex justify-content-center align-items-center border"
              style={{
                width: '40px',
                height: '40px',
                padding: 0,
                backgroundColor: 'white',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              {/* Circle wrapper for the flag */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <i className={`fi fi-${flag}`} style={{ fontSize: '32px' }}></i>
              </div>
            </DropdownToggle>

            <DropdownMenu
              style={{
                minWidth: '80px',
                marginTop: '5px',
                padding: '0', // reduce top/bottom padding
                fontSize: '0.9rem', // smaller text
                borderRadius: '10px', // optional, rounded corners
                maxHeight: '100px', // optional, limits height
                overflowY: 'auto', // scroll if content exceeds maxHeight
              }}
            >
              <DropdownItem onClick={() => setFlag('us')}>
                <i className="fi fi-us"></i> EN
              </DropdownItem>
              <DropdownItem onClick={() => setFlag('pt')}>
                <i className="fi fi-pt"></i> PT
              </DropdownItem>
              <DropdownItem onClick={() => setFlag('es')}>
                <i className="fi fi-es"></i> ES
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Button
            color="link"
            className="text-dark d-flex justify-content-center align-items-center border rounded-circle"
            style={{
              width: '40px',
              height: '40px',
              padding: 0,
              backgroundColor: 'white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <i
                className="bi bi-moon"
                style={{ fontSize: '22px', lineHeight: 1 }}
              ></i>
            </div>
          </Button>
        </div>
      </Navbar>

      {/* Filter Modal */}

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
          Modal title
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          <Input
            type="text"
            placeholder="Search..."
            style={{ borderRadius: '10px' }}
          />
          <Input
            type="select"
            multiple
            style={{ minHeight: '70px', borderRadius: '10px' }}
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Input>
          <FormGroup check>
            <Input type="checkbox" id="filterCheck" />
            <Label for="filterCheck" className="ms-1">
              Checkbox
            </Label>
          </FormGroup>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
          <Button
            color="link"
            onClick={() => setFilterOpen(!filterOpen)}
            style={{ textDecoration: 'none' }}
          >
            Clear all
          </Button>
          <Button color="secondary" onClick={() => setFilterOpen(!filterOpen)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      {/* Main Content */}
      <Container fluid className="mt-3 flex-grow-1">
        <Row className="h-100">
          <Col
            md="6"
            className="border-end overflow-auto"
            style={{ height: '85vh' }}
          >
            <h5>Results</h5>
            <p>List items go here...</p>
          </Col>

          <Col md="6" style={{ height: '85vh' }}>
            <LeafletMap />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
