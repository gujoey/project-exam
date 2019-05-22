import React from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';

interface ModalInquiryProps{
    modalShow: boolean;
    toggleModal: any;
    name: string;
}


export default class ModalInquiryComp extends React.Component<ModalInquiryProps>{
    constructor(props:any){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle(){
        const app: any = this;
        app.props.toggleModal("inquiry");
    }

    handleSubmit(e:any){
        //e.preventDefault();
    }

    render() {
        const app: any = this;
        return(
            <div>
                <Modal centered={true} size="lg" isOpen={app.props.modalShow} toggle={app.toggle}>
                    <ModalHeader toggle={app.toggle}>Inquiry "{app.props.name}" accommodation</ModalHeader>
                    <ModalBody>
                        <Form method="POST" action="./../../php/enquiry-success.php" onKeyUp={app.handleKeyPress} onSubmit={app.handleKeyPress}>
                            <FormGroup>
                                <Label for="clientName">Name <span>*</span></Label>
                                <Input id="clientName" type="text" innerRef={(node) => app.searchInput = node} placeholder="Full name"/>

                                <Label for="email">Email <span>*</span></Label>
                                <Input id="email" type="email" innerRef={(node) => app.searchInput = node} placeholder="Email adress"/>

                                <Label for="checkin">Arrival date <span>*</span></Label>
                                <Input id="checkin" type="date" innerRef={(node) => app.searchInput = node} placeholder="Enter arrival date"/>

                                <Label for="checkout">Departure date <span>*</span></Label>
                                <Input id="checkout" type="date" innerRef={(node) => app.searchInput = node} placeholder="Enter departure date"/>

                                <Label for="comment">Comment</Label>
                                <Input id="comment" type="textarea" innerRef={(node) => app.searchInput = node} placeholder="Enter your comment"/>

                                <Button onClick={app.handleSubmit}>Send inquiry</Button>
                            </FormGroup> 
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

