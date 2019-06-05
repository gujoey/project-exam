import React from 'react';

interface MessagesCompProps{
    clientName:string;
    clientEmail:string;
    message: string;
    arrayId: number;
    handleShowMoreClick: any;
    showMore:boolean;
}

export default class MessagesComp extends React.Component<MessagesCompProps>{
    constructor(props:any){
        super(props);

        this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    }

    handleShowMoreClick(e:any){
        const app: any = this;
        app.props.handleShowMoreClick(app);
    }

    render(){
        const app: any = this;
        let showMore:string = app.props.showMore === true ? "[ admin-messages-comp__more-info--show ]" : "[ admin-messages-comp__more-info ]";

        return(
            <div onClick={app.handleShowMoreClick} className="[ admin-messages-comp ]">
                <h2 className="[ admin-messages-comp__heading ]">Message from {app.props.clientName}</h2>
                <i className="[ fas fa-envelope admin-messages-comp__icon ]"></i>

                <div className={showMore}><br/> 
                    <p>
                        <strong>Client name:</strong><br/> {app.props.clientName}<br/><br/> 
                        <strong>Client email:</strong><br/> <a onClick={(e)=>{e.stopPropagation()}} href={`mailto:${app.props.clientEmail}?Subject=Re:${app.props.establishment} enquiry`} target="_top"> {app.props.clientEmail}</a><br/><br/>
                        <strong>Message:</strong> <br/> {app.props.message}
                    </p>
                </div>
            </div>
        );
    }
}