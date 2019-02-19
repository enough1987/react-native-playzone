import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

import { styles } from "../App";

class MapScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        marker: { 
            latitude: 37.78825, 
            longitude: -122.4324 
        }
      };
    }

    addMarker(coordinates) {
        this.setState({
          marker: { latitude: coordinates.latitude, longitude: coordinates.longitude }
        });
    }
  
    render() {
      return (
        <View style={styles.container}>
            <MapView
                
                style={styles.map}
                region={{
                    latitude: this.state.marker.latitude,
                    longitude: this.state.marker.longitude,
                    latitudeDelta: 0.045,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                onPress={event => this.addMarker(event.nativeEvent.coordinate)}
            >
                <MapView.Marker
                    coordinate={{ 
                        latitude: this.state.marker.latitude, 
                        longitude: this.state.marker.longitude 
                    }}
                />
            </MapView>
        </View>
      );
    }

}
  
const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);