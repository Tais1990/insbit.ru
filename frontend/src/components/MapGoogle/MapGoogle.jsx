import React from 'react'
import PropTypes from 'prop-types';
import styles from './MapGoogle.scss';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapGoogle extends React.Component {
    render() {
        return (
            <div className = 'map-google'>
                <Map google={this.props.google} zoom={17} initialCenter={{ lat: 56.8393495, lng: 60.6074862}}>
                    {/*<Marker onClick={this.onMarkerClick} name={'Current location'} />
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>*/}
                </Map>
            </div>
        )
                 
    }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCF1AQkwGndummeUCLnYZE-UJCbJJwDLfg")
})(MapGoogle)