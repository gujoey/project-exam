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
            establishmentRes: [],
            displaySearch: false
        }

        this.handleSearchTerm = this.handleSearchTerm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        if(establishmentsSearch.length !== app.state.establishments.length){
            app.setState({
                establishmentsSearch: establishmentsSearch,
                displaySearch: true
            });
        }else{
            app.setState({
                displaySearch: false
            });
        }
    }

    createSearchRes(){
        const app: any = this;
        let establishmentsSearch: Array<Establishments> = app.state.establishmentsSearch;

        if(establishmentsSearch.length === app.state.establishments.length){
            return;
        }
        establishmentsSearch.forEach((value:any, key:number)=>{
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

    handleSubmit(searchTerm:string){
        const app: any = this;
        let path:string = "result/"+searchTerm;

        app.props.history.push(path);
    }

    render(){
        const app: any = this;

        app.createSearchRes();
        return(
            <div>
                <NavbarComp currentPage="home"/>
                <SearchComp
                    heading="Welcome to your entry to all of Bergens great accommodations!"
                    suggestedSearches="Buena Vista, Rest Easy, The Hideaway"
                    handleSearchTerm = {app.handleSearchTerm}
                    searchRes = {app.state.establishmentRes}
                    displaySearch = {app.state.displaySearch}
                    handleSubmit = {app.handleSubmit}
                />
            </div>
        );
    }
}