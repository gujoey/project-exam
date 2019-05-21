import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import GoogleMapsComp from './../GoogleMaps/GoogleMapsComp';

interface ModalProps{
    modalShow: boolean;
    toggleModal: any;
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
                    <ModalHeader toggle={app.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <GoogleMapsComp></GoogleMapsComp>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

