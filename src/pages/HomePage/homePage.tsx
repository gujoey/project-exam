import React from 'react';
import SearchComp from './../../components/UserSite/Search/SearchComp';
import SearchDropdownComp from './../../components/UserSite/Search/SearchDropdownComp';
import NavbarComp from './../../components/UserSite/Navigation/NavbarComp';
import Establishments from './../../interfaces/Establishments';

export default class HomePage extends React.Component{
    constructor(props:any){
        super(props);

        this.state = {
            establishments: [],
            establishmentsSearch: [],
            establishmentRes: []
        }

        this.handleSearchTerm = this.handleSearchTerm.bind(this);
    }

    componentDidMount(){
        const app: any = this;
        app.getEstablishments();
    }

    getEstablishments(){
        const app: any = this;
        let establishments: Array<Establishments> = require('../../json/establishments/establishments.json');

        app.setState({establishments: establishments});
    }

    handleSearchTerm(searchTerm:string){
        const app: any = this;
        let establishmentsObj: Array<Establishments> = app.state.establishments;
            
        let establishmentsSearch: Array<Establishments> = establishmentsObj.filter((establishment) => {
            return establishment.establishmentName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });
        app.setState({
            establishmentsSearch:[],
            establishmentRes: []
        });
        app.setState({establishmentsSearch:establishmentsSearch});

    }

    createSearchRes(){
        const app: any = this;
        let establishments: Array<Establishments> = app.state.establishmentsSearch;
        if(establishments.length === app.state.establishments.length){
            return;
        }
        establishments.forEach((value:any, key:number)=>{
            app.state.establishmentRes.push(
                <SearchDropdownComp
                    image={value.imageUrl}
                    name={value.establishmentName}
                    infoPrice={value.price}
                    infoAmtGuests={value.maxGuests}
                    id={value.id}
                    key={key}
                />
            );
        });
    }

    render(){
        const app: any = this;

        app.createSearchRes();
        return(
            <div>
                <NavbarComp currentPage="home"/>
                <SearchComp
                    heading="Welcome to your entry to all of Bergens great accommodations!"
                    suggestedSearches="Sunset Beach, Rest Easy, The Hideaway"
                    handleSearchTerm = {app.handleSearchTerm}
                    searchRes = {app.state.establishmentRes}
                />
            </div>
        );
    }
}