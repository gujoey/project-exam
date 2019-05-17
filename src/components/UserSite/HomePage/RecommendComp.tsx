import React from 'react';
import { Col } from 'reactstrap';

interface RecommendCompProps{
    image: string;
    hotelName: string;
    id: string;
}

export default class RecommendComp extends React.Component<RecommendCompProps>{
    render(){
        const app: any = this;
        return(
            <Col lg="6" className="[ recommended ]">
                <a href={"#/establishments/"+app.props.id}>
                    <img className="[ recommended__img ]" src={app.props.image} alt={app.props.hotelName}/>
                    <h2 className="[ recommended__img-text ]">{app.props.hotelName}</h2>
                </a>
            </Col>
        );
    }
}