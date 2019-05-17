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
                <h1>{app.props.heading}</h1>
                <p>{app.props.review}</p>
                <span>{app.props.name}</span>
            </Col>
        );
    }
}