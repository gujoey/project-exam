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
        const app: any = this; 

        localStorage.setItem("username","admin");
        localStorage.setItem("password", "HelloWorld");

        app.validateCridentials();
    }

    validateCridentials(){
        const app: any = this;
        let session: any = sessionStorage.getItem("adminSession");

        if(session === "12v3e124r12t5t"){
            app.props.history.push("/admin/dashboard");
        }
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
            sessionStorage.setItem("adminSession","12v3e124r12t5t");
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