import React from 'react';
import { 
    Modal, ModalHeader, ModalBody, Form, 
    FormGroup, Input, Label, Row, Col,
    InputGroup, InputGroupAddon
} from 'reactstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


interface ModalInquiryProps{
    modalShow: boolean;
    toggleModal: any;
    name: string;
}


export default class ModalInquiryComp extends React.Component<ModalInquiryProps>{
    constructor(props:any){
        super(props);

        this.state = {
            startDate: new Date()
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    toggle(){
        const app: any = this;
        app.props.toggleModal("inquiry");
    }

    handleSubmit(e:any){
        e.preventDefault();
    }

    handleChange(date:Date) {
        this.setState({
          startDate: date
        });
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
                                <Label for="clientName">Name <span className="[ enquiries-form__input--required ]">*</span></Label>
                                <Input id="clientName" name="clientName" type="text" placeholder="Full name"/>

                                <Label for="email">Email <span className="[ enquiries-form__input--required ]">*</span></Label>
                                <Input id="email" name="email" type="email" placeholder="Email adress"/>

                                <Label for="establishment">Establishment</Label>
                                <Input id="establishment" name="establishment" type="text" value={app.props.name}/>

                                <Row>
                                    <Col md="6">
                                    <Label for="checkin">Arrival date <span className="[ enquiries-form__input--required ]">*</span></Label>
                                        <InputGroup>
                                            <DatePicker
                                                className="[ enquiries-form__input--2-col ]"
                                                dateFormat="dd/MM/yyyy"
                                                selected={app.state.startDate}
                                                onChange={app.handleChange} 
                                            />
                                            <InputGroupAddon addonType="prepend"><i className="far fa-calendar-alt"></i></InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                    <Col md="6">
                                    <Label for="checkout">Departure date <span className="[ enquiries-form__input--required ]">*</span></Label>
                                        <InputGroup>
                                            <Input id="checkout" name="checkout" type="date" placeholder="Enter departure date"/>
                                            <InputGroupAddon addonType="prepend"><i className="far fa-calendar-alt"></i></InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>

                                <Label for="comment">Comment</Label>
                                <Input id="comment" name="comment" type="textarea"  placeholder="Enter your comment"/>

                                <button>Send inquiry</button>
                            </FormGroup> 
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

