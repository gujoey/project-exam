import React from 'react';
import { Col } from 'reactstrap';

interface ReviewsCompProps{
    heading: string;
    review: string;
    name: string;
}

export default class ReviewsComp extends React.Component<ReviewsCompProps>{
    render(){
        const app: any = this;

        return(
            <Col lg="12">
                <div className="[ reviewsComp ]">
                    <h1 className="[ reviewsComp__heading ]">{app.props.heading}</h1>
                    <p>{app.props.review} <br/> <span className="[ reviewsComp__name ]">{app.props.name}</span></p>
                </div>
            </Col>
        );
    }
}