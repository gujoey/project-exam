import React from 'react';
import LoginComp from './../../../components/AdminSite/LoginComp/LoginComp';

export default class LoginPage extends React.Component{
    constructor(props: any){
        super(props);

        this.state = {
            loginErr: false
        }

        this.validateSubmission = this.validateSubmission.bind(this);
    }

    componentDidMount(){
        localStorage.setItem("username","admin");
        localStorage.setItem("password", "HelloWorld");
    }

    validateSubmission(submission:any){
        const app: any = this;

        submission.event.preventDefault();

        let cridentials = {
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password")
        };

        if (submission.username !== cridentials.username || submission.password !== cridentials.password){
            app.setState({loginErr:true});
        }else{
            app.props.history.push("/admin/dashboard");
        }
    }   

    render(){
        const app: any = this;
        return(
            <div>
                <LoginComp
                    handleSubmit={app.validateSubmission}
                    loginErr={app.state.loginErr}
                />
            </div>
        );
    }
}