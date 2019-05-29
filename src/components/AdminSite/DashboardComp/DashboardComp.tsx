import React from 'react';
import { Row, Col } from 'reactstrap';

interface DashboardCompProps{
    heading: string;
    amount: number;
    icon: string;
    unreadAmount: number;
    readAmount: number;
    redirect: string;
}

export default class DashboardComp extends React.Component<DashboardCompProps>{
    render(){
        const app: any = this;
        return(
            <div>
                <a href={app.props.redirect}>
                    <h1>{app.props.heading}</h1>
                    <Row>
                        <Col md="6">
                            {app.props.amount}
                        </Col>
                        <Col md="6">
                            <i className={app.props.icon}></i>
                        </Col>
                    </Row>
                    <div>
                        <span>{app.props.unreadAmount}</span><i className="fas fa-envelope"></i>
                        <span>{app.props.readAmount}</span><i className="far fa-envelope-open"></i>
                    </div>
                </a>
            </div>
        );
    }
}