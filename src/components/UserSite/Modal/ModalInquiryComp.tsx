import React from 'react';
import { 
    Modal, ModalHeader, ModalBody, Form, 
    FormGroup, Label, Row, Col,
} from 'reactstrap';

interface ModalInquiryProps{
    modalShow: boolean;
    toggleModal: any;
    name: string;
    arrivalDate: Date;
    departureDate: Date;
    handleInputValidation: any;
}


export default class ModalInquiryComp extends React.Component<ModalInquiryProps>{
    constructor(props:any){
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    toggleModal(){
        const app: any = this;
        app.props.toggleModal("inquiry");
    }

    handleValidation(inputRef:string){
        const app: any = this;        
        let inputValue: string = app.refs[inputRef].value;

        if (inputRef==="checkin" || inputRef==="checkout"){
            let dateInputValues = {"checkin":app.refs.checkin.value, "checkout":app.refs.checkout.value};
            app.props.handleInputValidation(inputRef, dateInputValues);
        }else{
            app.props.handleInputValidation(inputRef, inputValue);
        }
    }

    render() {
        const app: any = this;
        return(
            <div className="[ enquiries-form ]">
                <Modal centered={true} size="lg" isOpen={app.props.modalShow} toggle={app.toggle}>
                    <ModalHeader toggle={app.toggleModal}>Inquiry for the "{app.props.name}" accommodation</ModalHeader>
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
                                        <input id="checkin" className="[ enquiries-form__input--2-col ]" name="checkin" ref="checkin" type="date" onChange={() => app.handleValidation("checkin")} value={app.props.arrivalDate}/>
                                        <i className="[ enquiries-form__icon far fa-calendar-alt ]"></i>
                                    </Col>
                                    <Col md="6">
                                        <Label htmlFor="checkout">Departure date <span className="[ enquiries-form__input--required ]">*</span></Label>
                                        <input id="checkout" className="[ enquiries-form__input--2-col ]" name="checkout" ref="checkout" type="date" onChange={() => app.handleValidation("checkout")} value={app.props.departureDate}/>

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