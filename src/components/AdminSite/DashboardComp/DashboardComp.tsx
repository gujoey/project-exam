import React from 'react';
import { Row, Col } from 'reactstrap';

interface DashboardCompProps{
    heading?: string;
    amount?: number;
    icon?: string;
    redirect?: string;
}

export default class DashboardComp extends React.Component<DashboardCompProps>{
    render(){
        const app: any = this;
        return(
            <div className="[ dashboard ]">
                <a href={app.props.redirect}>
                    <h1 className="[ dashboard__heading ]">{app.props.heading}</h1>
                    <Row>
                        <Col md="6">
                            <span className="[ dashboard__amount ]">{app.props.amount}</span>
                        </Col>
                        <Col md="6">
                            <i className={`[ dashboard__icon ${app.props.icon} ]`}></i>
                        </Col>
                    </Row>
                </a>
            </div>
        );
    }
}