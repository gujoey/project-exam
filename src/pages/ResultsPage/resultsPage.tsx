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
            searchResult: [], //new filtered array based on url or input field values
            establishments: [], //values from establishments.json
            inputFieldSearchTerm: "", //inputfield search term
            showAllEstablishments: false
        }
        
        this.redirectToEst = this.redirectToEst.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.submitForm = this.submitForm.bind(this);
	}
    
    componentDidMount(){
        const app: any = this;
        app.getData();
    }

    getData(){
        const app: any = this;
        let establishmentsObj: Array<Establishments> = require('../../json/establishments/establishments.json');
        let searchTerm: string = app.state.searchTerm;
        let establishmentsSearch: Array<Establishments>
        
        if (searchTerm==="showAll"){
            searchTerm="";
            establishmentsSearch = establishmentsObj.filter((establishment) => {
                return establishment.establishmentName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
            app.setState({showAllEstablishments:true});
        }else{
            establishmentsSearch = establishmentsObj.filter((establishment) => {
                return establishment.establishmentName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
        }

        app.setState({
            searchResult: [],
            establishmentsResult: []
        });

        app.setState({
            searchResult: establishmentsSearch,
            establishments: establishmentsObj
        });
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

        if(establishmentsSearch.length===app.state.establishments.length && searchTerm===""){
            app.setState({showAllEstablishments:true});
        }else{
            app.setState({showAllEstablishments:false});
        }
    }

    redirectToEst(id:number){
        const app: any = this;
        let path:string = "/establishments/"+id;

        app.props.history.push(path);
    }

    submitForm(searchTerm:string){
        const app: any = this;

        if (searchTerm === ""){
            app.props.history.push("/result/showAll")
        }else{
            app.props.history.push('/result/'+searchTerm);
        }
    }

    createResults(){
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
        let searchHeading: string = app.state.showAllEstablishments === false ? `Showing search results for "${searchTerm}"` : "Showing all hotels";

        return(
            <div>
                <NavbarComp/>
                <SearchComp
                    handleSearchTerm = {app.handleSearch}
                    heading={searchHeading}
                    color="black"
                    suggestions={false}
                    searchRes = {app.state.establishmentSearchRes}
                    handleSubmit = {app.submitForm}
                />
                {app.state.establishmentsResult}
            </div>
        );
    }
}