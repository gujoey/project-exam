import React from 'react';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
import NewEstablishmentComp from './../../../components/AdminSite/EstablishmentsComp/NewEstablishmentComp';

export default class NewEstablishmentPage extends React.Component{
    constructor(props:any){
        super(props);

        this.state = {
            nameErr: false,
            emailErr:false,
            latitudeErr: false,
            longitudeErr: false,
            maxGuestsErr: false,
            priceErr: false,
            estIdErr: false,
            imageUrlErr: false,
            descriptionErr: false
        }

        this.validateInput = this.validateInput.bind(this);
    }

    validateInput(inputRef: string, input: any){
        const app: any = this;
        switch(inputRef){
            case "estName":
                console.log(inputRef);
                if (input===""){
                    app.setState({nameErr:true});
                    break;
                }else{
                    app.setState({nameErr:false});
                    break;
                }
            case "email":
            console.log(inputRef);
                let regExEmail:RegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{1,63}$/;
                if (!regExEmail.test(input)){
                    app.setState({emailErr:true});
                    break;
                }else{
                    app.setState({emailErr:false});
                    break;
                }
            case "latitude":
            console.log(inputRef);
                if (input===""){
                    app.setState({latitudeErr:true});
                    break;
                }else{
                    app.setState({latitudeErr:false});
                    break;
                }
            case "longitude":
            console.log(inputRef);
                if (input===""){
                    app.setState({longitudeErr:true});
                    break;
                }else{
                    app.setState({longitudeErr:false});
                    break;
                }
            case "maxGuests":
            console.log(inputRef);
                if (input===""){
                    app.setState({maxGuestsErr:true});
                    break;
                }else{
                    app.setState({maxGuestsErr:false});
                    break;
                }
            case "price":
            console.log(inputRef);
                if (input===""){
                    app.setState({priceErr:true});
                    break;
                }else{
                    app.setState({priceErr:false});
                    break;
                }
            case "estId":
            console.log(inputRef);
                if (input===""){
                    app.setState({estIdErr:true});
                    break;
                }else{
                    app.setState({estIdErr:false});
                    break;
                }
            case "imageUrl":
            console.log(inputRef);
                if (input===""){
                    app.setState({imageUrlErr:true});
                    break;
                }else{
                    app.setState({imageUrlErr:false});
                    break;
                }
            case "description":
            console.log(inputRef);
                if (input===""){
                    app.setState({descriptionErr:true});
                    break;
                }else{
                    app.setState({descriptionErr:false});
                    break;
                }
                
            default:
            console.log(inputRef);
                console.error(`switch statement "validateInput" recivied an invalid ref argument "${inputRef}"`);
                break;
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