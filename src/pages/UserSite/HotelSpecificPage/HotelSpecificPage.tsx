import React from 'react';
import { establishmentsApiUrl } from './../../../apiURLs/apiURLs';
import NavbarComp from './../../../components/UserSite/Navigation/NavbarComp';
import HotelSpecificComponent from './../../../components/UserSite/HotelSpecific/HotelSpecificComp';
import Establishments from './../../../interfaces/Establishments';
import MapComponent from './../../../components/UserSite/GoogleMaps/MapComp';
import ModalInquiryComp from './../../../components/UserSite/Modal/ModalInquiryComp';

interface HotelSpecificProps{
    match: any;
}

export default class HotelSpecificPage extends React.Component<HotelSpecificProps>{
    constructor(props:any){
        super(props);

        let tomorrow:Date = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        this.state = {
            establishments: [],
            establishmentId: Number(this.props.match.params.id),
            establishmentSpecific: [],
            modalMapShow: false,
            modalInquiryShow: false,
            lat: null,
            long: null,
            establishmentName: "",
            currentDate: new Date().toISOString().substring(0, 10),
            arrivalDate: new Date().toISOString().substring(0, 10),
            departureDate: tomorrow.toISOString().substring(0, 10),
            nameErr: undefined,
            emailErr: undefined,
            arrivalDateErr: false,
            arrivalDateErrTwo: undefined,
            departureDateErr: false,
            departureDateErrTwo: undefined
        }

        this.handleClick = this.handleClick.bind(this);
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
                app.setState({
                    establishmentSpecific:[],
                    establishments: result
                });
                app.processData()
            })
    }

    processData(){
        const app: any = this;
        let establishmentsObj: Array<Establishments> = app.state.establishments;
        
        establishmentsObj.forEach((value:any)=>{
            if (value.id===app.state.establishmentId){
                app.setState({
                    establishmentSpecific:[],
                    lat: value.googleLat,
                    long: value.googleLong,
                    establishmentName: value.establishmentName
                })
            }
        });
    }

    handleClick(buttonClicked:string){
        const app: any = this;

        if (buttonClicked === "map"){
            if(app.state.modalMapShow===true){
                app.setState({modalMapShow: false, establishmentSpecific:[],});
            }else{
                app.setState({modalMapShow: true, establishmentSpecific:[],});
            }
        }

        if (buttonClicked === "inquiry"){
            if(app.state.modalInquiryShow===true){
                app.setState({modalInquiryShow: false, establishmentSpecific:[],});
            }else{
                app.setState({modalInquiryShow: true, establishmentSpecific:[],});
            }
        }
    }

    validateSubmit(event:any){
        const app:any = this;
    
        app.setState({
            establishmentSpecific:[],
            nameErr: app.state.nameErr || app.state.nameErr===undefined?true:false,
            emailErr: app.state.emailErr || app.state.emailErr===undefined?true:false,
        });
        if(app.state.nameErr || app.state.emailErr || app.state.nameErr===undefined || app.state.emailErr===undefined){
            event.preventDefault();
        }
    }

    validateInput(inputRef:string, input:any){
        const app: any = this;

        switch(inputRef){
            case "name":
                if (input===""){
                    app.setState({nameErr:true, establishmentSpecific:[]});
                    break;
                }else{
                    app.setState({nameErr:false, establishmentSpecific:[],});
                    break;
                }
            case "email":
                let regExEmail:RegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{1,63}$/;
                if (regExEmail.test(input)){
                    app.setState({emailErr:false, establishmentSpecific:[]});
                    break;
                }else{
                    app.setState({emailErr:true, establishmentSpecific:[]});
                    break;
                }
            case "checkin":
                let regExDate:RegExp=/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
                if (!regExDate.test(input.checkin)){
                    app.setState({
                        establishmentSpecific:[],
                        arrivalDateErrTwo: true
                    });
                    break;
                }else{
                    app.setState({
                        establishmentSpecific:[],
                        arrivalDateErrTwo: false
                    });
                }
                if(input.checkin>input.checkout){
                    app.setState({
                        establishmentSpecific:[],
                        arrivalDate: new Date(input.checkin).toISOString().substring(0, 10),
                        departureDate: new Date(input.checkin).toISOString().substring(0, 10),
                        arrivalDateErr: false
                    });
                }else if(input.checkin<app.state.currentDate){
                    app.setState({
                        establishmentSpecific:[],
                        arrivalDate: new Date(input.checkin).toISOString().substring(0, 10),
                        arrivalDateErr: true
                    });
                    break;
                }else{
                    app.setState({
                        establishmentSpecific:[],
                        arrivalDate: new Date(input.checkin).toISOString().substring(0, 10),
                        arrivalDateErr: false
                    });
                    break;
                }  
                break;              
            case "checkout":
                let regExCheckOutDate:RegExp=/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;       
                if (!regExCheckOutDate.test(input.checkout)){
                    app.setState({
                        establishmentSpecific:[],
                        departureDateErrTwo: true
                    });
                    break;
                } else{
                    app.setState({
                        establishmentSpecific:[],
                        departureDateErrTwo: false
                    });
                }
                if(input.checkin>input.checkout){
                    app.setState({
                        establishmentSpecific:[],
                        departureDateErr: true,
                        departureDate: new Date(input.checkout).toISOString().substring(0, 10)
                    });
                    break;
                }else{
                    app.setState({
                        establishmentSpecific:[],
                        departureDateErr: false,
                        departureDate: new Date(input.checkout).toISOString().substring(0, 10),
                    })
                    break;
                }
            default:
                console.error("switch statement recivied an invalid ref argument " + inputRef);
                break;
        }
    }

    createEstablishment(){
        const app: any = this;
        let establishmentsObj: Array<Establishments> = app.state.establishments;
        let establishmentId: number = app.state.establishmentId;

        establishmentsObj.forEach((value:any, key:number)=>{
            if (value.id === establishmentId){
                app.state.establishmentSpecific.push(
                    <HotelSpecificComponent
                        image={value.imageUrl}
                        name={value.establishmentName}
                        email={value.establishmentEmail}
                        price={value.price}
                        maxGuests={value.maxGuests}
                        foodService={value.selfCatering}
                        description={value.description}
                        handleClick={app.handleClick}
                        map={<MapComponent lat={app.state.lat} long={app.state.long} name={app.state.establishmentName}/>}
                        key={key}
                    />
                );
            }
        });
    }

    render(){
        const app: any = this;
        app.createEstablishment();

        return(
            <div>
                <NavbarComp/>

                <div>{app.state.establishmentSpecific}</div>

                <ModalInquiryComp
                    modalShow={app.state.modalInquiryShow}
                    toggleModal={app.handleClick}
                    name={app.state.establishmentName}
                    arrivalDate={app.state.arrivalDate}
                    departureDate={app.state.departureDate}
                    handleInputValidation={app.validateInput}
                    handleSubmit={app.validateSubmit}
                    nameErr={app.state.nameErr}
                    emailErr={app.state.emailErr}
                    arrivalDateErr={app.state.arrivalDateErr}
                    arrivalDateErrTwo={app.state.arrivalDateErrTwo}
                    departureDateErr={app.state.departureDateErr}
                    departureDateErrTwo={app.state.departureDateErrTwo}
                />
            </div>
        );
    }
}