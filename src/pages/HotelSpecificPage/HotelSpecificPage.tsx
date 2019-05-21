import React from 'react';
import NavbarComp from './../../components/UserSite/Navigation/NavbarComp';
import HotelSpecificComponent from './../../components/UserSite/HotelSpecific/HotelSpecificComp';
import Establishments from './../../interfaces/Establishments';

interface HotelSpecificProps{
    match: any;
}

export default class HotelSpecificPage extends React.Component<HotelSpecificProps>{
    constructor(props:any){
        super(props);

        this.state = {
            establishments: [],
            establishmentId: Number(this.props.match.params.id),
            establishmentSpecific: []
        }
    }

    componentDidMount(){
        const app: any = this;
        app.getData();
    }

    getData(){
        const app: any = this;
        let establishmentsObj: Array<Establishments> = require("./../../json/establishments/establishments.json");

        app.setState({
            establishments: establishmentsObj,
            establishmentSpecific: []
        });
    }

    createEstablishment(){
        const app: any = this;
        let establishmentsObj: Array<Establishments> = app.state.establishments;
        let establishmentId: number = app.state.establishmentId;

        establishmentsObj.forEach((value:any, key:number)=>{
            if (value.id === establishmentId){
                app.state.establishmentSpecific.push(
                    <HotelSpecificComponent
                        image={value.imageUrl}
                        name={value.establishmentName}
                        email={value.establishmentEmail}
                        price={value.price}
                        maxGuests={value.maxGuests}
                        foodService={value.selfCatering}
                        description={value.description}
                        key={key}
                    />
                );
            }
        });
    }

    render(){
        const app: any = this;
        app.createEstablishment();

        return(
            <div>
                <NavbarComp></NavbarComp>
                {app.state.establishmentSpecific}
            </div>
        );
    }
}