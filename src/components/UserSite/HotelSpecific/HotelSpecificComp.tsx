import React from 'react';
import { Row, Col } from 'reactstrap';

interface HotelSpecificProps{
    image: string;
    name: string;
    email: string;
    price: number;
    maxGuests: number;
    foodService: boolean;
}

export default class HotelSpecificComp extends React.Component<HotelSpecificProps>{
    constructor(props:any){
        super(props);

        this.handleMapClick = this.handleMapClick.bind(this);
        this.handleInquiryClick = this.handleInquiryClick.bind(this);
    }

    handleMapClick(){
        console.log("Find on Map, clicked");
    }

    handleInquiryClick(){
        console.log("Make an Inquiry, clicked");
    }

    render(){
        const app: any = this;
        let foodService: string = app.props.foodService === true ? "The accommodation offers foodservice" : "the accommodation does not offer food service";

        return(
            <div className="[ est-specific-comp ]">
                <Row>
                    <Col md="6">
                        <img className="[ img-fluid ]" src={app.props.image} alt={app.props.name}/>
                        <h1>{app.props.name}</h1>
                        <strong>{app.props.email}</strong>
                        <div>
                            <i className="[ fas fa-user ]">&nbsp;x{app.props.maxGuests}&nbsp;&nbsp;</i>
                            <i className="[ fas fa-dollar-sign ]">&nbsp;{app.props.price}&nbsp;&nbsp;</i>
                            <i className="[ fas fas fa-utensils ]"></i>
                        </div>
                    </Col>
                    <Col md="6">
                        <h2>Hotel Information</h2>
                        <p>
                            {app.props.name} is an accommodation that has a max capacvity of {app.props.maxGuests} people. <br/>
                            A room at this accommodation costs ${app.props.price} per night. <br/><br/>
                            {foodService} <br/><br/>
                            Click the «Make an inquiry» button to make a reservation or enquiry for this accommodation <br/><br/>
                            <button onClick={app.handleMapClick}>Find on map</button>
                            <button onClick={app.handleInquiryClick}>Make an inquiry</button>
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}