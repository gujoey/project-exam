import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchComp from './../../components/UserSite/Search/SearchComp';
import SearchDropdownComp from './../../components/UserSite/Search/SearchDropdownComp';
import NavbarComp from './../../components/UserSite/Navigation/NavbarComp';
import Establishments from './../../interfaces/Establishments';
import Reviews from './../../interfaces/Reviews';
import RecommendComp from './../../components/UserSite/HomePage/RecommendComp';
import ReviewsComp from './../../components/UserSite/HomePage/ReviewsComp';

export default class HomePage extends React.Component{
    constructor(props:any){
        super(props);

        this.state = {
            establishments: [],
            establishmentsSearch: [],
            establishmentRes: [],
            recommendedEstablishments:[],
            displaySearch: false,
            reviews: [],
            allReviews: []
        }

        this.handleSearchTerm = this.handleSearchTerm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const app: any = this;
        app.getData();
    }

    getData(){
        const app: any = this;
        let establishments: Array<Establishments> = require('../../json/establishments/establishments.json');
        let reviews: Array<Reviews> = require('../../json/reviews/reviews.json');

        app.setState({
            establishments: establishments,
            reviews: reviews
        });
    }

    handleSearchTerm(searchTerm:string){
        const app: any = this;
        let establishmentsObj: Array<Establishments> = app.state.establishments;
            
        let establishmentsSearch: Array<Establishments> = establishmentsObj.filter((establishment) => {
            return establishment.establishmentName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });

        app.setState({
            establishmentsSearch:[],
            establishmentRes: [],
            allReviews: [],
            recommendedEstablishments: []
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
        let path:string = "/result/"+searchTerm;

        if (searchTerm===""){
            app.props.history.push("/result/showAll");
        }else{
            app.props.history.push(path);
        }
    }

    createRecommendedEstablishments(){
        const app: any = this;

        let establishments: Array<Establishments> = app.state.establishments;

        establishments.forEach((value:any, key: number)=>{
            if (value.recommend === true){
                app.state.recommendedEstablishments.push(
                <RecommendComp
                    image={value.imageUrl}
                    hotelName={value.establishmentName}
                    id={value.id}
                    key={key}
                ></RecommendComp> 
                );
            }
        });
    }

    createReviewsContent(){
        const app: any = this;

        let reviews: Array<Reviews> = app.state.reviews;

        reviews.forEach((value, key)=>{
            app.state.allReviews.push(
                <ReviewsComp
                    heading={value.heading}
                    review={value.review}
                    name={value.name}
                    key={key}
                />
            );
        });
    }

    render(){
        const app: any = this;

        app.createSearchRes();
        app.createRecommendedEstablishments();
        app.createReviewsContent();


        return(
            <div>
                <NavbarComp currentPage="home"/>

                <div className="[ bg-image ]">
                    <SearchComp
                        heading="Welcome to your entry to all of Bergens great accommodations!"
                        suggestedSearches="Buena Vista, Rest Easy, The Hideaway"
                        handleSearchTerm = {app.handleSearchTerm}
                        searchRes = {app.state.establishmentRes}
                        displaySearch = {app.state.displaySearch}
                        handleSubmit = {app.handleSubmit}
                        suggestions = {true}
                    ></SearchComp>
                </div>

                <Container>
                    <Row>
                        <Col md="7">
                            <div className="[ recommended-hotels ]">
                                <h1 className="[ recommended-hotels__heading ]">Recommended Hotels</h1>
                                <Row>{app.state.recommendedEstablishments}</Row>
                            </div>
                        </Col>
                        <Col md="5">
                            <div className="[ reviews ]">
                                <h1 className="[ reviews__heading ]">Customer Reviews</h1>
                                <Row>{app.state.allReviews}</Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}