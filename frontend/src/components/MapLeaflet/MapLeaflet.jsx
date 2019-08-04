import React from 'react'
import PropTypes from 'prop-types';
import styles from './MapLeaflet.scss';

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class MapLeaflet extends React.Component {
  render() {
    return (
      <LeafletMap
        center={[56.83936, 60.60996]}
        zoom={19}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[56.83936, 60.60996]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default MapLeaflet