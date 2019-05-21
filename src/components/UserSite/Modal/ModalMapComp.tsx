import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import GoogleMapsComp from './../GoogleMaps/GoogleMapsComp';

interface ModalProps{
    modalShow: boolean;
    toggleModal: any;
    name: string;
    lat: number;
    long: number;
}

export default class ModalMapComp extends React.Component<ModalProps> {
    constructor(props:any){
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        const app: any = this;
        app.props.toggleModal("map");
    }

    render() {
        const app: any = this;
        return (
            <div>
                <Modal centered={true} size="lg" isOpen={app.props.modalShow} toggle={app.toggle}>
                    <ModalHeader toggle={app.toggle}>Location for the "{app.props.name}" accommodation</ModalHeader>
                    <ModalBody>
                        <GoogleMapsComp
                            lat={app.props.lat}
                            long={app.props.long}
                        ></GoogleMapsComp>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

