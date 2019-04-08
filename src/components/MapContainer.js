import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Rating } from 'semantic-ui-react';
import _ from "lodash";
import yellow_marker from "../marker_icon/yellow_marker.png";
import red_marker from "../marker_icon/red_marker.png";
import green_marker from "../marker_icon/green_marker.png";

const mapStyles = {
  width: '60em',
  height: '45em'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    activeItem: ''
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  componentDidMount() {
    this.setState({ activeItem: this.props.activeItem });
  }

  componentWillReceiveProps(props) {
    this.setState({ activeItem: props.activeItem });
  }

  render() {
    const { lat, lng, points } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
          lat: lat,
          lng: lng
        }}>

        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: lat, lng: lng }}
          options={{ icon: `${yellow_marker}` }}
          name={'Your Location'}
        />

        {this.props.points && _.map(points, (point, id) => {
          if (point[0] === this.state.activeItem) {
            return (
              <Marker
                key={id}
                options={{ icon: `${red_marker}` }}
                onClick={this.onMarkerClick}
                position={{ lat: point[1].lat, lng: point[1].lng }}
                name={
                  <div>
                    <h3>{point[0]}</h3>
                    <Rating icon='star' defaultRating={point[3]} maxRating={5} />
                    <p>{point[4]}</p>
                  </div>
                }
              />
            );
          } else {
            return (
              <Marker
                key={id}
                options={{ icon: `${green_marker}` }}
                onClick={this.onMarkerClick}
                position={{ lat: point[1].lat, lng: point[1].lng }}
                name={
                  <div>
                    <h3>{point[0]}</h3>
                    <Rating icon='star' defaultRating={point[3]} maxRating={5} />
                    <p>{point[4]}</p>
                  </div>
                }
              />
            );
          }
        })}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.API_KEY
})(MapContainer);