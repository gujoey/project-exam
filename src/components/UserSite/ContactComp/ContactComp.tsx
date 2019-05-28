import React from 'react';
import { Form, FormGroup, Label } from 'reactstrap';


export default class ContactComp extends React.Component{

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

        return(
            <div className="[ contact ]">
                <Form onSubmit={app.handleSubmit} method="POST" action="http://localhost:8888/project-exam/server/contact.json">
                    <FormGroup>
                        <Label htmlFor="clientName">Name <span className="[ contact__input--required ]">*</span></Label>
                        <input type="text" id="clientName" name="clientName" placeholder="John Doe" /><br/><br/>

                        <Label htmlFor="email">Email <span className="[ contact__input--required ]">*</span></Label>
                        <input type="email" id="email" name="email" ref="email" placeholder="name@example.com"/><br/><br/>

                        <Label htmlFor="comment">Comment <span className="[ contact__input--required ]">*</span></Label>
                        <textarea id="comment" name="comment" className="[ ]" ref="comment"  placeholder="Enter your comment"/><br/>
                        
                        <span>Fields with an asterisk (<span className="[ contact__input--required ]">*</span>) are mandatory</span><br/><br/>
                        <button className="[ contact__button ]">Send inquiry</button>
                    </FormGroup> 
                </Form>
            </div>
        );
    }
}