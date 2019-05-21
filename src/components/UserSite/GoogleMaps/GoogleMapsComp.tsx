import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map(){
    return<GoogleMap
        defaultZoom={10}
        defaultCenter={{lat:12, lng:12}}
    />
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class GoogleMapsComp extends React.Component{
    render(){
        return(
            <div style={{width: "100%", height:"400px"}}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAplVVoPI_LH31R2OFkTopFONs5EBxOrvg`}
                    loadingElement={<div style={{height:"100%", width:"100%"}}></div>}
                    containerElement={<div style={{height:"100%", width:"100%"}}></div>}
                    mapElement={<div style={{height:"100%", width:"100%"}}></div>}
                />
            </div>
        );
    }
}