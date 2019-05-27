import React from 'react';
import { 
    Modal, ModalHeader, ModalBody, Form, 
    FormGroup, Label, Row, Col,
} from 'reactstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ModalInquiryProps{
    modalShow: boolean;
    toggleModal: any;
    name: string;
    handleChangeArrival: any;
    handleChangeDeparture: any;
    arrivalDate: Date;
    departureDate: Date;
    handleSubmit: any;
    handleNameValidation: any;
}


export default class ModalInquiryComp extends React.Component<ModalInquiryProps>{
    constructor(props:any){
        super(props);

        this.state = {
            arrivalDate: new Date(),
            departureDate: new Date()
        };

        this.toggle = this.toggle.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.handleChangeArrival = this.handleChangeArrival.bind(this);
        this.handleChangeDeparture = this.handleChangeDeparture.bind(this);
    }

    toggle(){
        const app: any = this;
        app.props.toggleModal("inquiry");
    }

    handleValidation(inputRef:string){
        const app: any = this;        
        let inputValue: string = app.refs[inputRef].value;

        console.log("fired from " + inputRef);
        if (inputRef==="checkin" || inputRef==="checkout"){
            let dateInputValues = {"checkin":app.refs.checkin.value, "checkout":app.refs.checkin.value};
            app.props.handleNameValidation(inputRef, dateInputValues);
            console.log("true");
            console.log(app.refs["checkin"]);
        }else{
            app.props.handleNameValidation(inputRef, inputValue);
        }
    }

    handleChangeArrival(date:Date) {
        const app: any = this;
        app.props.handleChangeArrival(date, "arrival");
    }
    handleChangeDeparture(date:Date) {
        const app: any = this;
        app.props.handleChangeDeparture(date, "departure");
    }

    render() {
        const app: any = this;
        return(
            <div className="[ enquiries-form ]">
                <Modal centered={true} size="lg" isOpen={app.props.modalShow} toggle={app.toggle}>
                    <ModalHeader toggle={app.toggle}>Inquiry for the "{app.props.name}" accommodation</ModalHeader>
                    <ModalBody>
                        <Form method="POST" action="http://localhost:8888/project-exam/server/enquiry-success.php">
                            <FormGroup>
                                <Label htmlFor="clientName">Name <span className="[ enquiries-form__input--required ]">*</span></Label>
                                <input onBlur={() => app.handleValidation("name")} id="clientName" name="clientName" ref="name" type="text" placeholder="Full name"/>

                                <Label htmlFor="email">Email <span className="[ enquiries-form__input--required ]">*</span></Label>
                                <input onBlur={() => app.handleValidation("email")} id="email" name="email" ref="email" type="email" placeholder="Email adress"/>

                                <Label htmlFor="establishment">Establishment</Label>
                                <input id="establishment" name="establishment" ref="establishment" type="text" value={app.props.name} readOnly/>

                                <Row>
                                    <Col md="6">
                                        <Label htmlFor="checkin">Arrival date <span className="[ enquiries-form__input--required ]">*</span></Label>
                                        <DatePicker
                                            onBlur={() => app.handleValidation("checkin")}
                                            ref="checkin"
                                            className="[ enquiries-form__input--2-col ]"
                                            id="checkin" 
                                            name="checkin"
                                            dateFormat="dd.MM.yyyy"
                                            selected={app.props.arrivalDate}
                                            onChange={app.handleChangeArrival} 
                                        />
                                        <i className="[ enquiries-form__icon far fa-calendar-alt ]"></i>
                                    </Col>
                                    <Col md="6">
                                        <Label htmlFor="checkout">Departure date <span className="[ enquiries-form__input--required ]">*</span></Label>
                                        <DatePicker
                                            onBlur={() => app.handleValidation("checkout")}
                                            ref="checkout"
                                            className="[ enquiries-form__input--2-col ]"
                                            id="checkout" 
                                            name="checkout"
                                            dateFormat="dd.MM.yyyy"
                                            selected={app.props.departureDate}
                                            onChange={app.handleChangeDeparture} 
                                        />
                                        <i className="[ enquiries-form__icon far fa-calendar-alt ]"></i>
                                    </Col>
                                </Row>

                                <Label htmlFor="comment">Comment</Label>
                                <input onBlur={() => app.handleValidation("comment")} id="comment" name="comment" ref="comment" type="textarea"  placeholder="Enter your comment"/>

                                <button className="[ enquiries-form__button ]">Send inquiry</button>
                            </FormGroup> 
                        </Form>
                        <p><strong>NB: Booking of this accommodation isn’t final until we confirm it. You will receive a booking confirmation letter when this happens.</strong></p>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}