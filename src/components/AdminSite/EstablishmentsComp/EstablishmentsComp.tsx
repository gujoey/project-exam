import React from 'react';
import { Row, Col } from 'reactstrap';

interface EstablishmentsCompProps{
    imgUrl: string;
    estName: string;
}

export default class EstablishmentsComp extends React.Component<EstablishmentsCompProps>{
    render(){
        const app: any = this;
        return(
            <div>
                <Row>
                    <Col md="2">
                        <img className="[ img-fluid ]" src={app.props.imgUrl} alt={app.props.estName}/>
                    </Col>
                    <Col md="6">
                        <h2>{app.props.estName}</h2>
                    </Col>
                </Row>
            </div>
        );
    }
}