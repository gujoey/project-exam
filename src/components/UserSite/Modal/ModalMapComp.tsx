import React from 'react';
import GoogleMapsComp from './../GoogleMaps/GoogleMapsComp';

interface ModalProps{
    name: string;
    lat: number;
    long: number;
}

export default class ModalMapComp extends React.Component<ModalProps>{
    render() {
        const app: any = this;
        return (
            <div>
                <GoogleMapsComp
                    lat={app.props.lat}
                    long={app.props.long}
                />
            </div>
        );
    }
}

