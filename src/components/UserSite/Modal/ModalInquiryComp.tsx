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
                                <span className="[ enquiries-form__input--invalid ]">Please enter a name</span><br/><br/>

                                <Label htmlFor="email">Email <span className="[ enquiries-form__input--required ]">*</span></Label>
                                <input onBlur={() => app.handleValidation("email")} id="email" name="email" ref="email" type="email" placeholder="Email adress"/>
                                <span className="[ enquiries-form__input--invalid ]">Please enter a valid email adress (E.g: name@example.com)</span><br/><br/>

                                <input name="establishment" ref="establishment" type="text" value={app.props.name} readOnly hidden/>
                                <Row>
                                    <Col md="6">
                                        <Label htmlFor="checkin">Arrival date <span className="[ enquiries-form__input--required ]">*</span></Label>
                                        <input id="checkin" name="checkin" className="[ enquiries-form__input--2-col ]" ref="checkin" type="date" onChange={() => app.handleValidation("checkin")} value={app.props.arrivalDate}/>
                                        <span className="[ enquiries-form__input--invalid ]">Arrival date can't be at an earlier date than todays date</span><br/>
                                       {/* <i className="[ enquiries-form__icon far fa-calendar-alt ]"></i>*/}
                                    </Col>
                                    <Col md="6">
                                        <Label htmlFor="checkout">Departure date <span className="[ enquiries-form__input--required ]">*</span></Label>
                                        <input id="checkout" name="checkout" className="[ enquiries-form__input--2-col ]" ref="checkout" type="date" onChange={() => app.handleValidation("checkout")} value={app.props.departureDate}/>
                                        <span className="[ enquiries-form__input--invalid ]">Departure date can't be before arrival date</span><br/>
                                        {/*<i className="[ enquiries-form__icon far fa-calendar-alt ]"></i>*/}
                                    </Col>
                                </Row>

                                <Label htmlFor="comment">Comment</Label>
                                <textarea name="comment" className="[ enquiries-form__input--text-area ]" id="comment" ref="comment"  placeholder="Enter your comment"/>

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