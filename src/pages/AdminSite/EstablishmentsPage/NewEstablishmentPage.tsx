import React from 'react';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
import NewEstablishmentComp from './../../../components/AdminSite/EstablishmentsComp/NewEstablishmentComp';

export default class NewEstablishmentPage extends React.Component{
    constructor(props:any){
        super(props);

        this.state = {
            nameErr: undefined,
            emailErr:undefined,
            latitudeErr: undefined,
            longitudeErr: undefined,
            maxGuestsErr: undefined,
            priceErr: undefined,
            estIdErr: undefined,
            imageUrlErr: undefined,
            descriptionErr: undefined
        }

        this.validateInput = this.validateInput.bind(this);
        this.validateSubmit = this.validateSubmit.bind(this);
    }

    validateInput(inputRef: string, input: any){
        const app: any = this;
        switch(inputRef){
            case "estName":
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
            case "latitude":
                if (input===""){
                    app.setState({latitudeErr:true});
                    break;
                }else{
                    app.setState({latitudeErr:false});
                    break;
                }
            case "longitude":
                if (input===""){
                    app.setState({longitudeErr:true});
                    break;
                }else{
                    app.setState({longitudeErr:false});
                    break;
                }
            case "maxGuests":
                if (input===""){
                    app.setState({maxGuestsErr:true});
                    break;
                }else{
                    app.setState({maxGuestsErr:false});
                    break;
                }
            case "price":
                if (input===""){
                    app.setState({priceErr:true});
                    break;
                }else{
                    app.setState({priceErr:false});
                    break;
                }
            case "estId":
                if (input===""){
                    app.setState({estIdErr:true});
                    break;
                }else{
                    app.setState({estIdErr:false});
                    break;
                }
            case "imageUrl":
                if (input===""){
                    app.setState({imageUrlErr:true});
                    break;
                }else{
                    app.setState({imageUrlErr:false});
                    break;
                }
            case "description":
                if (input===""){
                    app.setState({descriptionErr:true});
                    break;
                }else{
                    app.setState({descriptionErr:false});
                    break;
                }
                
            default:
                console.error(`switch statement from "validateInput" function recivied an invalid ref argument "${inputRef}"`);
                break;
        }
    }

    validateSubmit(event:any){
        const app:any = this;
        if (app.state.nameErr || app.state.emailErr || app.state.latitudeErr || app.state.longitudeErr ||
        app.state.maxGuestsErr || app.state.priceErr || app.state.estIdErr || app.state.imageUrlErr || app.state.descriptionErr){
            console.log(1)
            event.preventDefault();
            
        }else if(app.state.nameErr === undefined || app.state.emailErr === undefined || app.state.latitudeErr === undefined ||
        app.state.longitudeErr === undefined || app.state.maxGuestsErr === undefined || app.state.priceErr === undefined ||
        app.state.estIdErr === undefined || app.state.imageUrlErr === undefined || app.state.descriptionErr === undefined){ //potential bug
            console.log(2)
            app.setState({
                nameErr: true,
                emailErr: true,
                latitudeErr: true,
                longitudeErr: true,
                maxGuestsErr: true,
                priceErr: true,
                estIdErr: true,
                imageUrlErr: true,
                descriptionErr: true
            });
            event.preventDefault();
        }
    }

    render(){
        const app: any = this;
        return(
            <div>
                <NavbarComp currentPage={"establishments"}/>
                <div className="[ new-establishment ]">
                    <h1 className="[ new-establishment__heading ]">Create new establishment</h1><br/>
                    <NewEstablishmentComp
                        handleInputValidation={app.validateInput}
                        handleSubmit={app.validateSubmit}
                        estNameErr={app.state.nameErr}
                        emailErr={app.state.emailErr}
                        latitudeErr={app.state.latitudeErr}
                        longitudeErr={app.state.longitudeErr}
                        maxGuestsErr={app.state.maxGuestsErr}
                        priceErr={app.state.priceErr}
                        estIdErr={app.state.estIdErr}
                        imageUrlErr={app.state.imageUrlErr}
                        descriptionErr={app.state.descriptionErr}
                    />
                </div>
            </div>
        );
    }
}