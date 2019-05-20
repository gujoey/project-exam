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
            searchTerm: this.props.match.params.id, //values from url
            searchResult: [], //new array filtered based on url or input field values
            establishments: [], //values from establishments.json
            inputFieldSearchTerm: "" //inputfield search term
        }
        
        this.redirectToEst = this.redirectToEst.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
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

        app.setState({establishments:establishmentsObj});
    }

    handleSearch(searchTerm:string){
        const app: any = this;
        let establishmentsObj: Array<Establishments> = app.state.establishments;
        
        let establishmentsSearch: Array<Establishments> = establishmentsObj.filter((establishment) => {
            return establishment.establishmentName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });

        app.setState({
            searchResult: [],
            establishmentsResult: [],
            inputFieldSearchTerm: ""
        });
        app.setState({
            searchResult: establishmentsSearch,
            inputFieldSearchTerm: searchTerm
        });

        console.log(app.state.searchResult);
    }

    redirectToEst(id:number){
        const app: any = this;
        let path:string = "/establishments/"+id;

        app.props.history.push(path);
    }

    createResults(){
        const app: any = this;
        let establishmentsSearch: Array<Establishments> = app.state.searchResult;
        console.log(establishmentsSearch);

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
                    redirectToEst = {app.redirectToEst}
                    key = {key}
                />
            );
        });
    }

    render(){
        const app: any = this;
        app.createResults();
        let searchTerm:string = app.state.inputFieldSearchTerm === "" ? app.state.searchTerm : app.state.inputFieldSearchTerm;

        return(
            <div>
                <NavbarComp/>
                <SearchComp
                    handleSearchTerm = {app.handleSearch}
                    heading={`Search results for "${searchTerm}"`}
                    color="black"
                    suggestions={false}
                    searchRes = {app.state.establishmentSearchRes}
                />
                {app.state.establishmentsResult}
            </div>
        );
    }
}