import React from 'react';
import { establishmentsApiUrl } from './../../../apiURLs/apiURLs';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
import EstablishmentsComp from './../../../components/AdminSite/EstablishmentsComp/EstablishmentsComp';

export default class EstablishmentsPage extends React.Component{
    constructor(props:any){
        super(props);

        this.state={
            establishmentsObj: [],
            establishments:[]
        }
    }

    componentDidMount(){
        const app: any = this;
        app.getData();
    }

    getData(){
        const app: any = this;
        
        fetch(establishmentsApiUrl)
            .then(response=>{
                return response.json();
            })
            .then(result=>{
                app.setState({establishmentsObj: result});
            })
    }

    createEstablishments(){
        const app: any = this;
        let establishments = app.state.establishmentsObj;

        establishments.forEach((value:any, key:string) => {
            app.state.establishments.push(
                <EstablishmentsComp
                    imgUrl={value.imageUrl}
                    estName={value.establishmentName}
                    key={key}
                />
            );
        });
    }

    render(){
        const app: any = this;
        app.createEstablishments();

        return(
            <div>
                <NavbarComp currentPage={"establishments"}/>
                <div>
                    {app.state.establishments}
                </div>
            </div>
        );
    }
}