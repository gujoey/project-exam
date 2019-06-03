import React from 'react';

interface EnquiriesCompProps{
    clientName: string;
    establishment: string;
}

export default class EnquiriesComp extends React.Component<EnquiriesCompProps>{
    render(){
        const app: any = this;
        return(
            <div>
                <h2>{`${app.props.clientName}, Establishment: ${app.props.establishment}`}</h2>
                <i className="fas fa-envelope"></i>
            </div>
        );
    }
} 