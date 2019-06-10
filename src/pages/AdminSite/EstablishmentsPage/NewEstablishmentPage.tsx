import React from 'react';
import { establishmentsApiUrl } from './../../../apiURLs/apiURLs';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
import NewEstablishmentComp from './../../../components/AdminSite/EstablishmentsComp/NewEstablishmentComp';

export default class NewEstablishmentPage extends React.Component{
    constructor(props:any){
        super(props);

        this.state = {
            establishmentsObj: [],
            establishmentId: null,
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

    componentDidMount(){
        const app: any = this;
        app.getData();
    }

    getData(){
        const app: any = this;
        fetch(establishmentsApiUrl)
            .then(response=>{
                return response.json();
            })
            .then(result=>{
                app.setState({establishmentsObj: result});
                app.makeEstId();
            })
    }

    makeEstId(){
        const app: any = this;
        let establishmentsObj: any = app.state.establishmentsObj;
        let id:number = app.randomNumber(1,999999);

        let isId:any = establishmentsObj.some((value: any, key:number)=>{
            if(id===value.id){
                return true;
            }else{
                return false;
            }
        });

        if(isId){
            app.makeEstId();
        }else{
            app.setState({establishmentId:id});
        }
    }

    randomNumber(min:number, max:number){
        return Math.floor(Math.random() * (max - min) + min);
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
            let regexLat:any=/^[-+]?[0-9]{1,3}(.[0-9]{1,6})?$/;
            if (!regexLat.test(input)){
                    app.setState({latitudeErr:true});
                    break;
                }else{
                    app.setState({latitudeErr:false});
                    break;
                }
            case "longitude":
                let regexLong:any=/^[-+]?[0-9]{1,3}(.[0-9]{1,6})?$/;
                if (!regexLong.test(input)){
                    app.setState({longitudeErr:true});
                    break;
                }else{
                    app.setState({longitudeErr:false});
                    break;
                }
            case "maxGuests":
                let regExGuest:any=/^[1-9]{1,}$/;
                if (regExGuest.test(input)<1){
                    app.setState({maxGuestsErr:true});
                    break;
                }else{
                    app.setState({maxGuestsErr:false});
                    break;
                }
            case "price":
                let regExPrice:any=/^[1-9]{1,}$/;
                if (regExPrice.test(input)<1){
                    app.setState({priceErr:true});
                    break;
                }else{
                    app.setState({priceErr:false});
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
                        estId={app.state.establishmentId}
                        estNameErr={app.state.nameErr}
                        emailErr={app.state.emailErr}
                        latitudeErr={app.state.latitudeErr}
                        longitudeErr={app.state.longitudeErr}
                        maxGuestsErr={app.state.maxGuestsErr}
                        priceErr={app.state.priceErr}
                        imageUrlErr={app.state.imageUrlErr}
                        descriptionErr={app.state.descriptionErr}
                    />
                </div>
            </div>
        );
    }
}