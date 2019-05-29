import React from 'react';
import { Form, FormGroup, Label } from 'reactstrap';

interface LoginCompProps{
    handleSubmit: any;
    loginErr: boolean;
}

export default class LoginComp extends React.Component<LoginCompProps>{
    constructor(props:any){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event:any){
        const app: any = this;

        let submission = {
            event: event,
            username: app.refs.username.value,
            password: app.refs.password.value
        }

        app.props.handleSubmit(submission);
    }

    render(){
        const app: any = this;
        
        let inputErr: string = app.props.loginErr === true ? "[ login-admin__input--invalid ]" : "";
        let inputErrText: string = app.props.loginErr === true ? "Username or passsword is incorrect" : "";

        return(
            <div className="[ login-comp ]">
                <div className="[ login-comp__container ]">
                <h1 className="[ login-comp__heading ]">Please login to access this site</h1><br/>
                    <div className="[ login-admin ]">
                        <Form onSubmit={app.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <input className={inputErr} type="text" id="username" ref="username" placeholder="Username" /><br/><br/>

                                <Label htmlFor="password">Password</Label>
                                <input className={inputErr} type="password" id="password" ref="password" placeholder="Password" />
                                <span className="[ login-admin__error-text ]">{inputErrText}</span><br/><br/>
                                
                                <button className="[ login-admin__button ]">Login</button>
                            </FormGroup> 
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}