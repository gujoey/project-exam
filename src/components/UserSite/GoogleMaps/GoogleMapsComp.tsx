import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

interface GoogleMapsCompProps{
    lat: number;
    long: number;
}

export default class GoogleMapsComp extends React.Component<GoogleMapsCompProps>{
    render(){
        const app:any = this;
        let map:any = function(){
            return(
                <GoogleMap
                    defaultZoom={6}
                    defaultCenter={{lat:app.props.lat, lng:app.props.long}}
                    >
                    <Marker position={{lat:app.props.lat, lng:app.props.long}}></Marker>
                </GoogleMap>
            );
        };
        const WrappedMap = withScriptjs(withGoogleMap(map));

        return(
            <div style={{width: "100%", height:"400px"}}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAtzsw2MlF5T1nGmEsFNABcHqbhYpq_mjs`}
                    loadingElement={<div style={{height:"100%", width:"100%"}}></div>}
                    containerElement={<div style={{height:"100%", width:"100%"}}></div>}
                    mapElement={<div style={{height:"100%", width:"100%"}}></div>}
                />
            </div>
        );
    }
}