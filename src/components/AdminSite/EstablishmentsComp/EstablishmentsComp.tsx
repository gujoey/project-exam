import React from 'react';
import { Row, Col } from 'reactstrap';

interface EstablishmentsCompProps{
    arrayId: number;
    imgUrl: string;
    estName: string;
    amtGuest: number;
    price: number;
    selfCatering: boolean;
    handleShowMoreClick?:any;
    propertyDescription: string;
    email: string;
    showMore?: boolean;
}

export default class EstablishmentsComp extends React.Component<EstablishmentsCompProps>{
    constructor(props:any){
        super(props);

        this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    }

    handleShowMoreClick(){
        const app: any = this;
        app.props.handleShowMoreClick(app);
    }

    render(){
        const app: any = this;

        let selfCatering = app.props.selfCatering === false ? "[ fas fa-utensils ]" : "";
        let selfCateringYesNo = app.props.selfCatering === false ? "Yes" : "No";
        let showMoreInfo = app.props.showMore === true ? "[ admin-est-comp__more-info-show  ]" : "[ admin-est-comp__more-info ]"

        return(
            <div className="[ admin-est-comp ]">
                <Row onClick={app.handleShowMoreClick}>
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
                </Row><br/>
                <div className={showMoreInfo}>
                    <p>
                        <strong>E-mail:</strong><br/> <a href={`mailto:${app.props.email}`} onClick={(e:any)=>{e.stopPropagation()}}>{app.props.email}</a><br/><br/>
                        <strong>Property description:</strong> <br/> {app.props.propertyDescription}<br/><br/>
                        <strong>Max guests:</strong><br/>{app.props.amtGuest}<br/><br/>
                        <strong>Price per night:</strong><br/>${app.props.price}<br/><br/>
                        <strong>Provides foodservice:</strong> <br/>{selfCateringYesNo}
                    </p>
                </div>
            </div>
        );
    }
}