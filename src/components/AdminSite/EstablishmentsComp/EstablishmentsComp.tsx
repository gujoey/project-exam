import React from 'react';
import { Row, Col } from 'reactstrap';

interface EstablishmentsCompProps{
    imgUrl: string;
    estName: string;
    amtGuest: number;
    price: number;
    selfCatering: boolean;
}

export default class EstablishmentsComp extends React.Component<EstablishmentsCompProps>{
    render(){
        const app: any = this;

        let selfCatering = app.props.selfCatering === false ? "[ fas fa-utensils ]" : "";

        return(
            <div className="[ admin-est-comp ]">
                <Row>
                    <Col md="2">
                        <img className="[ admin-est-comp__img ]" src={app.props.imgUrl} alt={app.props.estName}/>
                    </Col>
                    <Col md="6" className="[ d-flex align-items-center  ]">
                        <h2 className="[ admin-est-comp__heading ]">{app.props.estName}</h2>
                    </Col>
                    <Col md="4" className="[ d-flex align-items-center justify-content-end ]">
                        <p className="[ admin-est-comp__text ]">
                            <i className="[ fas fa-user ]"></i> x{app.props.amtGuest} &nbsp;
                            <i className="[ fas fa-dollar-sign ]"></i> {app.props.price}  &nbsp;
                            <i className={selfCatering}></i>
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}