import React from 'react';
import NavbarComp from './../../components/UserSite/Navigation/NavbarComp';
import SearchComp from './../../components/UserSite/Search/SearchComp';
import Establishments from './../../interfaces/Establishments';
import ResultComp from './../../components/UserSite/Result/ResultComp';

interface ResultsPageProps {
    match: any;
}

export default class ResultsPage extends React.Component<ResultsPageProps>{
    constructor(props:any){
		super(props);
		this.state={
            searchTerm: this.props.match.params.id,
            searchResult: [],
            establishments: [],
            establishmentsResult: []
		}
	}
    
    componentDidMount(){
        const app: any = this;
        app.getData();
    }

    getData(){
        const app: any = this;
        let establishmentsObj: Array<Establishments> = require('../../json/establishments/establishments.json');
        let searchTerm: string = app.state.searchTerm;

        let establishmentsSearch: Array<Establishments> = establishmentsObj.filter((establishment) => {
            return establishment.establishmentName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });

        app.setState({
            searchResult: [],
            establishmentsResult: []
        });

        app.setState({
            searchResult: establishmentsSearch
        });
    }

    createSearchResults(){
        const app: any = this;
        let establishmentsSearch: Array<Establishments> = app.state.searchResult;

        establishmentsSearch.forEach((value, key)=>{
            app.state.establishmentsResult.push(
                <ResultComp
                    image = {value.imageUrl}
                    estName = {value.establishmentName}
                    estDescription = {value.description}
                    id = {value.id}
                    amtGuests = {value.maxGuests}
                    price = {value.price}
                    foodService = {value.selfCatering}
                    key = {key}
                />
            );
        });
    }

    render(){
        const app: any = this;
        app.createSearchResults();

        return(
            <div>
                <NavbarComp/>
                <SearchComp
                    heading={`Search result for "${app.state.searchTerm}"`}
                />
                {app.state.establishmentsResult}
            </div>
        );
    }
}