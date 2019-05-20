import React from  'react';
import { Row, Col } from 'reactstrap';

interface ResultCompProps{
    image: string,
    estName: string;
    estDescription: string;
    id: number
    amtGuests: number;
    price: number;
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
        return(
            <div className="[ search-res ]">
                <Row>
                    <Col md="3">
                        <img className="[ img-fluid ]" src={app.props.image} alt={app.props.estName}/>
                    </Col>
                    <Col md="6">
                        <h1>{app.props.estName}</h1>
                        <p>{app.props.estDescription}</p>
                    </Col>
                    <Col md="3">
                        <button onClick={app.handleClick}>View more</button>
                        <i className="fas fa-user">{app.props.amtGuest}</i>
                        <i className="fas fa-dollar-sign">{app.props.price}</i>
                        <i className="fas fa-utensils"></i>
                    </Col>
                </Row>
            </div> 
        );
    }
}