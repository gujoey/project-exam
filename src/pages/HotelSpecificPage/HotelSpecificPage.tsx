import React from 'react';
import NavbarComp from './../../components/UserSite/Navigation/NavbarComp';
import HotelSpecificComponent from './../../components/UserSite/HotelSpecific/HotelSpecificComp';
import Establishments from './../../interfaces/Establishments';
import ModalMapComponent from './../../components/UserSite/Modal/ModalMapComp';
import ModalInquiryComp from './../../components/UserSite/Modal/ModalInquiryComp';

interface HotelSpecificProps{
    match: any;
}

export default class HotelSpecificPage extends React.Component<HotelSpecificProps>{
    constructor(props:any){
        super(props);

        this.state = {
            establishments: [],
            establishmentId: Number(this.props.match.params.id),
            establishmentSpecific: [],
            modalMapShow: false,
            modalInquiryShow: false,
            lat: null,
            long: null,
            establishmentName: "",
            arrivalDate: new Date().toISOString().substring(0, 10),
            departureDate: new Date().toISOString().substring(0, 10)
        }

        this.handleClick = this.handleClick.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    componentDidMount(){
        const app: any = this;
        app.getData();
    }

    getData(){
        const app: any = this;
        let establishmentsObj: Array<Establishments> = require("./../../json/establishments/establishments.json");

        establishmentsObj.forEach((value, key)=>{
            if (value.id===app.state.establishmentId){
                app.setState({
                    lat: value.googleLat,
                    long: value.googleLong,
                    establishmentName: value.establishmentName
                })
            }
        });

        app.setState({
            establishments: establishmentsObj,
            establishmentSpecific: []
        });
    }

    handleClick(buttonClicked:string){
        const app: any = this;

        if (buttonClicked === "map"){
            if(app.state.modalMapShow===true){
                app.setState({modalMapShow: false});
            }else{
                app.setState({modalMapShow: true});
            }
        }

        if (buttonClicked === "inquiry"){
            if(app.state.modalInquiryShow===true){
                app.setState({modalInquiryShow: false});
            }else{
                app.setState({modalInquiryShow: true});
            }
        }
    }

    validateInput(inputRef:string, input:any){
        const app: any = this;

        switch(inputRef){
            case "name":
                if (input===""){
                    console.log("invalid name input");
                    break;
                }else{
                    console.log("valid name input");
                    break;
                }
            case "email":
                let regExEmail:RegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{1,63}$/;
                if (regExEmail.test(input)){
                    console.log("valid email");
                    break;
                }else{
                    console.log("invalid email");
                    break;
                }
            case "checkin":
                if(input.checkin>input.checkout){
                    app.setState({
                        arrivalDate: new Date(input.checkin).toISOString().substring(0, 10),
                        departureDate: new Date(input.checkin).toISOString().substring(0, 10)
                    });
                    console.log(input.checkin);
                    break;
                }
                break;
            case "checkout":                
                if(input.checkin>input.checkout){
                    console.log("arrival date can not be after departure date");
                    break;
                }
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
                        key={key}
                    />
                );
            }
        });
    }

    render(){
        const app: any = this;
        app.createEstablishment();
        console.log(app.state.arrivalDate + " " + app.state.departureDate);

        return(
            <div>
                <NavbarComp/>

                {app.state.establishmentSpecific}

                <ModalMapComponent
                    modalShow={app.state.modalMapShow}
                    toggleModal={app.handleClick}
                    lat={app.state.lat}
                    long={app.state.long}
                    name={app.state.establishmentName}
                />
                <ModalInquiryComp
                    modalShow={app.state.modalInquiryShow}
                    toggleModal={app.handleClick}
                    name={app.state.establishmentName}
                    handleChangeArrival={app.handleDatePick}
                    handleChangeDeparture={app.handleDatePick}
                    arrivalDate={app.state.arrivalDate}
                    departureDate={app.state.departureDate}
                    handleInputValidation={app.validateInput}
                />
            </div>
        );
    }
}