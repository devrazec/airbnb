import React, { useContext } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from 'reactstrap';

import { GlobalContext } from '../context/GlobalContext';

const createPriceIcon = (item, isHovered) => {
  return L.divIcon({
    className: 'airbnb-price-marker',
    html: `<div style="
      background:${isHovered ? 'black' : 'white'};
      color:${isHovered ? 'white' : 'black'};
      border-radius:20px;
      font-weight: bold;
      font-size: 14px;
      text-align: center;
      border:1px solid rgba(0,0,0,0.1);
    ">${item.price}</div>`,
    iconSize: [50, 30],
    iconAnchor: [25, 15],
  });
};

const ItemMarker = () => {
  const { markerGeo, hoveredId, setHoveredId, region, setRegion } =
    useContext(GlobalContext);

  return (
    <>
      {markerGeo.map(item => (
        <Marker
          key={item.id}
          position={[item.lat, item.lng]}
          icon={createPriceIcon(item, hoveredId === item.id)}
          eventHandlers={{
            mouseover: () => setHoveredId(item.id),
            mouseout: () => setHoveredId(null),
          }}
        >
          <Popup minWidth={200} maxWidth={260}>
            <Card className="border-0" style={{ width: '14rem' }}>
              <CardImg
                top
                src={item.image}
                alt={item.title}
                style={{ height: '160px', objectFit: 'cover' }}
              />

              <CardBody className="p-2">
                <CardTitle
                  tag="h5"
                  className="mb-2"
                  style={{ fontSize: '1rem' }}
                >
                  {item.title}
                </CardTitle>

                <CardText className="text-muted" style={{ fontSize: '.85rem' }}>
                  {item.description}
                </CardText>

                <div>
                  <span
                    style={{ textDecoration: 'line-through', color: '#777' }}
                  >
                    {item.oldprice}
                  </span>

                  <span
                    style={{
                      paddingLeft: '10px',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              </CardBody>
            </Card>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default ItemMarker;
