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
    handleSubmit: any;
    
    nameErr: boolean;
    emailErr: boolean;
    arrivalDateErr: boolean;
    departureDateErr: boolean;
}


export default class ModalInquiryComp extends React.Component<ModalInquiryProps>{
    constructor(props:any){
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event:any){
        const app: any = this;
        app.props.handleSubmit(event);
    }

    render() {
        const app: any = this;

        let nameErrText: string = app.props.nameErr === true ? "Please enter a name" : "";
        let nameErrInput: string = app.props.nameErr === true ? "[ enquiries-form__input--invalid-input ]" : ""

        let emailErrText: string = app.props.emailErr === true ? "Please enter a valid email adress (E.g: name@example.com)" : "";
        let emailErrInput: string = app.props.emailErr === true ? "[ enquiries-form__input--invalid-input ]" : ""


        let arrivalDateErrText: string = app.props.arrivalDateErr === true ? "Arrival date can't be at an earlier date than todays date" : "";
        let arrivalDateErrInput: string = app.props.arrivalDateErr === true ? "[ enquiries-form__input--invalid-input ]" : "";


        let departureDateErrText: string = app.props.departureDateErr === true ? "Departure date can't be before arrival date" : "";
        let departureDateErrInput: string = app.props.departureDateErr === true ? "[ enquiries-form__input--invalid-input ]" : "";

        return(
            <div className="[ enquiries-form ]">
                <Modal centered={true} size="lg" isOpen={app.props.modalShow} toggle={app.toggle}>
                    <ModalHeader toggle={app.toggleModal}>Inquiry for the "{app.props.name}" accommodation</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={app.handleSubmit} method="POST" action="http://localhost:8888/project-exam/server/enquiry-success.php">
                            <FormGroup>
                                <Label htmlFor="clientName">Name <span className="[ enquiries-form__input--required ]">*</span></Label>
                                <input className={nameErrInput} onBlur={() => app.handleValidation("name")} id="clientName" name="clientName" ref="name" type="text" placeholder="John Doe"/>
                                <span className="[ enquiries-form__input--invalid-text ]">{nameErrText}</span><br/><br/>

                                <Label htmlFor="email">Email <span className="[ enquiries-form__input--required ]">*</span></Label>
                                <input className={emailErrInput} onBlur={() => app.handleValidation("email")} id="email" name="email" ref="email" type="email" placeholder="name@example.com"/>
                                <span className="[ enquiries-form__input--invalid-text ]">{emailErrText}</span><br/><br/>

                                <input name="establishment" ref="establishment" type="text" value={app.props.name} readOnly hidden/>
                                <Row>
                                    <Col md="6">
                                        <Label htmlFor="checkin">Arrival date <span className="[ enquiries-form__input--required ]">*</span></Label>
                                        <input className={arrivalDateErrInput} id="checkin" name="checkin" ref="checkin" type="date" onChange={() => app.handleValidation("checkin")} value={app.props.arrivalDate}/>
                                        <span className="[ enquiries-form__input--invalid-text ]">{arrivalDateErrText}</span><br/>
                                       {/* <i className="[ enquiries-form__icon far fa-calendar-alt ]"></i>*/}
                                    </Col>
                                    <Col md="6">
                                        <Label htmlFor="checkout">Departure date <span className="[ enquiries-form__input--required ]">*</span></Label>
                                        <input id="checkout" name="checkout" className={departureDateErrInput} ref="checkout" type="date" onChange={() => app.handleValidation("checkout")} value={app.props.departureDate}/>
                                        <span className="[ enquiries-form__input--invalid-text ]">{departureDateErrText}</span><br/>
                                        {/*<i className="[ enquiries-form__icon far fa-calendar-alt ]"></i>*/}
                                    </Col>
                                </Row><br/>

                                <Label htmlFor="comment">Comment</Label>
                                <textarea name="comment" className="[ enquiries-form__input--text-area ]" id="comment" ref="comment"  placeholder="Enter your comment"/>
                                
                                <span>Fields with an asterisk (<span className="[ enquiries-form__input--required ]">*</span>) are mandatory</span><br/>
                                <button className="[ enquiries-form__button ]">Send Enquiry</button>
                            </FormGroup> 
                        </Form>
                        <p><strong>NB: Booking of this accommodation isn’t final until we confirm it. You will receive a booking confirmation letter when this happens.</strong></p>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}