import { useState, useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from 'reactstrap';

const AddItem = () => {
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

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = id => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Use selectedRegion to filter
  const filteredItems = useMemo(() => {
    if (!selectedRegion || selectedRegion.includes('All')) return markerGeo;

    return markerGeo.filter(item => selectedRegion.includes(item.location));
  }, [markerGeo, selectedRegion]);

  return (
    <Row>
      {filteredItems.map(item => (
        <Col md="4" sm="6" xs="12" key={item.id} className="mb-4">
          <Card
            className={`card-airbnb shadow-sm position-relative ${hoveredId === item.id ? 'card-airbnb-hovered' : ''}`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="superhost-badge">Superhost</div>

            <div className="heart-btn" onClick={() => toggleFavorite(item.id)}>
              {favorites.includes(item.id) ? '❤️' : '🤍'}
            </div>

            <CardImg top src={item.image} alt={item.title} />

            <CardBody>
              <CardTitle tag="h5" className="fw-bold">
                {item.title}
              </CardTitle>

              <CardText className="text-muted">{item.description}</CardText>

              <CardText>
                <span style={{ textDecoration: 'line-through', color: '#777' }}>
                  {' '}
                  {item.oldprice}{' '}
                </span>{' '}
                <span
                  style={{
                    paddingLeft: '10px',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                  }}
                >
                  {' '}
                  {item.price}{' '}
                </span>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AddItem;
