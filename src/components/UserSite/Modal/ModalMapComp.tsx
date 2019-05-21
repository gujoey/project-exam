import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}