import React from 'react';
import { 
    Modal, ModalHeader, ModalBody, Form, 
    FormGroup, Input, Label, Row, Col,
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
            arrivalDate: new Date(),
            departureDate: new Date()
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeArrival = this.handleChangeArrival.bind(this);
        this.handleChangeDeparture = this.handleChangeDeparture.bind(this);

    }

    toggle(){
        const app: any = this;
        app.props.toggleModal("inquiry");
    }

    handleSubmit(e:any){
        e.preventDefault();
    }

    handleChangeArrival(date:Date) {
        this.setState({
            arrivalDate: date
        });
    }
    handleChangeDeparture(date:Date) {
        this.setState({
            departureDate: date
        });
    }

    render() {
        const app: any = this;
        return(
            <div>
                <Modal centered={true} size="lg" isOpen={app.props.modalShow} toggle={app.toggle}>
                    <ModalHeader toggle={app.toggle}>Inquiry for the "{app.props.name}" accommodation</ModalHeader>
                    <ModalBody>
                        <Form method="POST" action="http://localhost:8888/project-exam/server/enquiry-success.php">
                            <FormGroup>
                                <Label htmlFor="clientName">Name <span className="[ enquiries-form__input--required ]">*</span></Label>
                                <Input id="clientName" name="clientName" type="text" placeholder="Full name"/>

                                <Label htmlFor="email">Email <span className="[ enquiries-form__input--required ]">*</span></Label>
                                <Input id="email" name="email" type="email" placeholder="Email adress"/>

                                <Label htmlFor="establishment">Establishment</Label>
                                <Input id="establishment" name="establishment" type="text" value={app.props.name}/>

                                <Row>
                                    <Col md="6">
                                        <Label htmlFor="checkin">Arrival date <span className="[ enquiries-form__input--required ]">*</span></Label>
                                        <DatePicker
                                            className="[ enquiries-form__input--2-col ]"
                                            id="checkin" 
                                            name="checkin"
                                            dateFormat="dd.MM.yyyy"
                                            selected={app.state.arrivalDate}
                                            onChange={app.handleChangeArrival} 
                                        />
                                        <i className="[ enquiries-form__icon far fa-calendar-alt ]"></i>
                                    </Col>
                                    <Col md="6">
                                        <Label htmlFor="checkout">Departure date <span className="[ enquiries-form__input--required ]">*</span></Label>
                                        <DatePicker
                                            className="[ enquiries-form__input--2-col ]"
                                            id="checkout" 
                                            name="checkout"
                                            dateFormat="dd.MM.yyyy"
                                            selected={app.state.departureDate}
                                            onChange={app.handleChangeDeparture} 
                                        />
                                        <i className="[ enquiries-form__icon far fa-calendar-alt ]"></i>
                                    </Col>
                                </Row>

                                <Label htmlFor="comment">Comment</Label>
                                <Input id="comment" name="comment" type="textarea"  placeholder="Enter your comment"/>

                                <button>Send inquiry</button>
                            </FormGroup> 
                        </Form>
                        <p><strong>NB: Booking of this accommodation isn’t final until we confirm it. You will receive a booking confirmation letter when this happens.</strong></p>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}