import React from 'react';

interface SuccessCompProps{
    heading: string;
    text: string;
}

export default class SuccessComp extends React.Component<SuccessCompProps>{
    render(){
        const app: any = this;
        return(
            <div className="[ success-comp ]">
                <h1 className="[ success-comp__heading ]">{app.props.heading}</h1>
                <p>{app.props.text}</p>
            </div>
        );
    }
}