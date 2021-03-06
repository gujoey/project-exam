import React from 'react';
import NavbarComp from './../../../components/UserSite/Navigation/NavbarComp';
import ContactComp from './../../../components/UserSite/ContactComp/ContactComp';

export default class ContactPage extends React.Component{
    constructor(props:any){
        super(props);

        this.state = {
            nameErr: undefined,
            emailErr: undefined,
            commentErr: undefined
        }

        this.validateInput = this.validateInput.bind(this);
        this.validateSubmit = this.validateSubmit.bind(this);
    }

    validateInput(inputRef:string, input:string){
        const app: any = this;

        switch(inputRef){
            case "name":
                if (input===""){
                    app.setState({nameErr:true});
                    break;
                }else{
                    app.setState({nameErr:false});
                    break;
                }
            case "email":
                let regExEmail:RegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{1,63}$/;
                if (!regExEmail.test(input)){
                    app.setState({emailErr:true});
                    break;
                }else{
                    app.setState({emailErr:false});
                    break;
                }
            case "message":
                if (input===""){
                    app.setState({commentErr:true});
                    break;
                }else{
                    app.setState({commentErr:false});
                    break;
                }
            default:
                console.error(`switch statement "validateInput" recivied an invalid ref argument "${inputRef}"`);
                break;
        }
    }

    validateSubmit(event:any){
        const app:any = this;
    
        app.setState({
            nameErr: app.state.nameErr || app.state.nameErr===undefined?true:false,
            emailErr: app.state.emailErr || app.state.emailErr===undefined?true:false,
            commentErr: app.state.commentErr || app.state.commentErr===undefined?true:false,
        });
        if(app.state.nameErr || app.state.emailErr || app.state.commentErr || app.state.nameErr===undefined || app.state.emailErr===undefined || app.state.commentErr===undefined){
            event.preventDefault();
        }
    }

    render(){
        const app: any = this;
        return(
            <div>
                <NavbarComp currentPage={"contact"}/>
                <ContactComp
                    handleInputValidation={app.validateInput}
                    handleSubmit = {app.validateSubmit}
                    nameErr = {app.state.nameErr}
                    emailErr = {app.state.emailErr}
                    commentErr = {app.state.commentErr}
                />
            </div>
        );
    }
}