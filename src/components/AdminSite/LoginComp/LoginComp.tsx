import React from 'react';
import { Form, FormGroup, Label } from 'reactstrap';


export default class LoginComp extends React.Component{
    render(){
        return(
            <div className="[ loginComp ]">
                <div className="[ loginComp__container ]">
                    <div className="[ login-admin ]">
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">Name</Label>
                                <input type="text" id="username" ref="name" placeholder="Username" />
                                <span></span><br/><br/>

                                <Label htmlFor="password">Name</Label>
                                <input type="password" id="password" ref="password" placeholder="Password" />
                                <span></span><br/><br/>
                                
                                <button className="[ login-admin__button ]">Login</button>
                            </FormGroup> 
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}