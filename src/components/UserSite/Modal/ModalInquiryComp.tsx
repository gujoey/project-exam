import React from 'react';
import axios from 'axios';
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
        e.preventDefault();

        const form: any={
            establishment:"the this",
            clientName: "test",
            email: "ess@sses.com",
            checkin: "tset",
            checkout: "test"
        }

        axios.post('http://localhost:8888/project-exam/server/enquiries.json',form)
            .then(res=>{
                console.log(res);
                console.log(res.data);
            });;
    }

    render() {
        const app: any = this;
        return(
            <div>
                <Modal centered={true} size="lg" isOpen={app.props.modalShow} toggle={app.toggle}>
                    <ModalHeader toggle={app.toggle}>Inquiry "{app.props.name}" accommodation</ModalHeader>
                    <ModalBody>
                        <Form method="POST" action="http://localhost:8888/project-exam/server/enquiry-success.php">
                            <FormGroup>
                                <Label for="clientName">Name <span>*</span></Label>
                                <Input id="clientName" name="clientName" type="text" placeholder="Full name"/>

                                <Label for="email">Email <span>*</span></Label>
                                <Input id="email" name="email" type="email" placeholder="Email adress"/>

                                <Label for="establishment">est <span>*</span></Label>
                                <Input id="establishment" name="establishment" type="text" placeholder=" est"/>

                                <Label for="checkin">Arrival date <span>*</span></Label>
                                <Input id="checkin" name="checkin" type="date"  placeholder="Enter arrival date"/>

                                <Label for="checkout">Departure date <span>*</span></Label>
                                <Input id="checkout" name="checkout" type="date" placeholder="Enter departure date"/>

                                <Label for="comment">Comment</Label>
                                <Input id="comment" name="comment" type="textarea"  placeholder="Enter your comment"/>

                                <Button>Send inquiry</Button>
                            </FormGroup> 
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

