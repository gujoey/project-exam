import React from 'react';
import SearchComp from './../../components/UserSite/Search/SearchComp';
import NavbarComp from './../../components/UserSite/Navigation/NavbarComp';
import Establishments from './../../interfaces/Establishments';

export default class HomePage extends React.Component{
    constructor(props:any){
        super(props);

        this.state = {
            establishments: [],
            establishmentsSearch: []
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

        console.log(establishmentsSearch);
    }

    render(){
        const app: any = this;

        return(
            <div>
                <NavbarComp currentPage="home"/>
                <SearchComp
                    heading="Welcome to your entry to all of Bergens great accommodations!"
                    suggestedSearches="Sunset Beach, Rest Easy, The Hideaway"
                    handleSearchTerm = {app.handleSearchTerm}    
                />
            </div>
        );
    }
}