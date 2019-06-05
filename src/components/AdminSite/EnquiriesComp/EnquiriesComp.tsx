import React from 'react';

interface EnquiriesCompProps{
    clientName: string;
    clientEmail: string;
    establishment: string;
    arrivalDate: Date;
    departureDate: Date;
    comment: string;
    handleShowMoreClick: any;
    showMore: boolean; 
    id: number;
}

export default class EnquiriesComp extends React.Component<EnquiriesCompProps>{
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
        let showMore = app.props.showMore === true ? "[ enquiries-page__more-info--show ]" : "[ enquiries-page__more-info ]";
        return(
            <div onClick={app.handleShowMoreClick} className="[ enquiries-comp ]">
                <h2 className="[ enquiries-comp__heading ]">{`${app.props.clientName}, Establishment: ${app.props.establishment}`}</h2>
                <i className="[ fas fa-envelope enquiries-comp__icon ]"></i>

                <div className={showMore}>
                    <p>
                        <strong>Client name:</strong><br/> {app.props.clientName}<br/><br/>
                        <strong>Client email:</strong><br/><a onClick={(e)=>{e.stopPropagation()}} href={`mailto:${app.props.clientEmail}?Subject=Re:${app.props.establishment} enquiry`} target="_top"> {app.props.clientEmail}</a><br/><br/>
                        <strong>Establishment:</strong> {app.props.establishment}<br/><br/>
                        <strong>Arrival date:</strong> {app.props.arrivalDate}<br/>
                        <strong>Departure date:</strong> {app.props.departureDate}<br/><br/>
                        <strong>Comment:</strong><br/>{app.props.comment}
                    </p>
                </div>
            </div>
        );
    }
}