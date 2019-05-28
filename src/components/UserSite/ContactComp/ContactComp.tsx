import React from 'react';
import { Form, FormGroup, Label } from 'reactstrap';

interface ContactCompProps{
    handleInputValidation: any;
    handleSubmit: any;
    nameErr: boolean;
    emailErr: boolean;
    commentErr: boolean;
}

export default class ContactComp extends React.Component<ContactCompProps>{
    constructor(props:any){
        super(props);

        this.handleValidation = this.handleValidation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValidation(inputRef:string){
        const app: any = this;        
        let inputValue: string = app.refs[inputRef].value;

        app.props.handleInputValidation(inputRef, inputValue);
    }

    handleSubmit(event:any){
        const app: any = this;
        app.props.handleSubmit(event);
    }

    render() {
        const app: any = this;
        let inputNameErr: string = app.props.nameErr === true ? "[ contact__input--invalid-input ]" : "";
        let TextNameErr: string = app.props.nameErr === true ? "Please enter a name" : "";

        let inputEmailErr: string = app.props.emailErr === true ? "[ contact__input--invalid-input ]" : "";
        let textEmailErr: string = app.props.emailErr === true ? "Please enter a valid email adress (E.g: name@example.com)" : "";

        let inputMessageErr: string = app.props.commentErr === true ? "[ contact__input--invalid-input ]" : "";
        let textMessageErr: string = app.props.commentErr === true ? "Please enter a message" : "";


        return(
            <div className="[ contact ]">
                <Form onSubmit={app.handleSubmit} method="POST" action="http://localhost:8888/project-exam/server/contact-success.php">
                    <FormGroup>
                        <Label htmlFor="clientName">Name <span className="[ contact__input--required ]">*</span></Label>
                        <input className={inputNameErr} type="text" id="clientName" onBlur={() => app.handleValidation("name")} name="clientName" ref="name" placeholder="John Doe" />
                        <span className="[ contact__input--invalid-text ]">{TextNameErr}</span><br/><br/>

                        <Label htmlFor="email">Email <span className="[ contact__input--required ]">*</span></Label>
                        <input className={inputEmailErr} type="email" id="email" onBlur={() => app.handleValidation("email")} name="email" ref="email" placeholder="name@example.com"/>
                        <span className="[ contact__input--invalid-text ]">{textEmailErr}</span><br/><br/>

                        <Label htmlFor="message">Message <span className="[ contact__input--required ]">*</span></Label>
                        <textarea className={inputMessageErr} id="message" onBlur={() => app.handleValidation("message")} name="message" ref="message"  placeholder="Enter your message"/>
                        <span className="[ contact__input--invalid-text ]">{textMessageErr}</span><br/><br/>
                        
                        <span>Fields with an asterisk (<span className="[ contact__input--required ]">*</span>) are mandatory</span><br/><br/>
                        <button className="[ contact__button ]">Send inquiry</button>
                    </FormGroup> 
                </Form>
            </div>
        );
    }
}