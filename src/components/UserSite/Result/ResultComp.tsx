import React from  'react';
import { Row, Col } from 'reactstrap';

interface ResultCompProps{
    image: string,
    estName: string;
    estDescription: string;
    id: number
    amtGuests: number;
    price: number;
    foodService: boolean;
    redirectToEst: any;
}

export default class ResultComp extends React.Component<ResultCompProps>{
    constructor(props:any){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const app: any = this;
        app.props.redirectToEst(app.props.id)
    }
    
    render(){
        const app: any = this;
        let foodService: string = app.props.foodService === false ? "[ fas fas fa-utensils ]" : "";
        return(
            <div className="[ search-res ]">
                <Row>
                    <Col md="3">
                        <img className="[ img-fluid ]" src={app.props.image} alt={app.props.estName}/>
                    </Col>
                    <Col md="5">
                        <h1 className="[ search-res__heading ]">{app.props.estName}</h1>
                        <p>{app.props.estDescription}</p>
                    </Col>
                    <Col md="4" >
                        <div className="[ search-res__icon ]">
                            <i className="[ fas fa-user ]">&nbsp;x{app.props.amtGuests}&nbsp;&nbsp;</i>
                            <i className="[ fas fa-dollar-sign ]">&nbsp;{app.props.price}&nbsp;&nbsp;</i>
                            <i className={foodService}></i>
                        </div>
                        <button className="[ search-res__button ]" onClick={app.handleClick}>View more</button>
                    </Col>
                </Row>
            </div> 
        );
    }
}