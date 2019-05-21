import React from 'react';
import { Row, Col } from 'reactstrap';

interface HotelSpecificProps{
    image: string;
    name: string;
    email: string;
    price: number;
    maxGuests: number;
    foodService: boolean;
    description: string;
    handleClick: any;
}

export default class HotelSpecificComp extends React.Component<HotelSpecificProps>{
    constructor(props:any){
        super(props);

        this.handleMapClick = this.handleMapClick.bind(this);
        this.handleInquiryClick = this.handleInquiryClick.bind(this);
    }

    handleMapClick(){
        this.props.handleClick("map");
    }

    handleInquiryClick(){
        
        this.props.handleClick("inquiry");
    }

    render(){
        const app: any = this;
        let foodService: string = app.props.foodService === true ? "The accommodation offers foodservice" : "The accommodation does not offer food service";
        let foodServiceIcon: string = app.props.foodService === true ? "[ fas fas fa-utensils ]" : "";

        return(
            <div className="[ hotel-specific ]">
                <Row>
                    <Col md="6">
                        <img className="[ img-fluid hotel-specific__img ]" src={app.props.image} alt={app.props.name}/>
                        <h1 className="[ hotel-specific__main-heading ]">{app.props.name}</h1>
                        <p>{app.props.description}</p>
                        <strong> <a href={"mailto:"+ app.props.email}>{app.props.email}</a></strong><br/><br/>
                        <div className="[ hotel-specific__icons ]">
                            <i className="[ fas fa-user ]">&nbsp;x{app.props.maxGuests}&nbsp;&nbsp;</i>
                            <i className="[ fas fa-dollar-sign ]">&nbsp;{app.props.price}&nbsp;&nbsp;</i>
                            <i className={foodServiceIcon}></i>
                        </div>
                    </Col>
                    <Col className="[ hotel-specific--text-left ]" md="6">
                        <h2>Hotel Information</h2>
                        <p>
                            {app.props.name} is an accommodation that has a max capacity of {app.props.maxGuests} people. <br/><br/>
                            A room at this accommodation costs ${app.props.price} per night. <br/><br/>
                            {foodService} <br/><br/>
                            Click the «Make an inquiry» button to make a reservation or enquiry for this accommodation <br/><br/>
                            <button className="[ hotel-specific__button ]" onClick={app.handleMapClick}>Find on map</button>
                            <button className="[ hotel-specific__button ]" onClick={app.handleInquiryClick}>Make an inquiry</button>
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}