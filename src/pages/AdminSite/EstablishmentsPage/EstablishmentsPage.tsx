import React from 'react';
import { establishmentsApiUrl } from './../../../apiURLs/apiURLs';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
import EstablishmentsComp from './../../../components/AdminSite/EstablishmentsComp/EstablishmentsComp';

export default class EstablishmentsPage extends React.Component{
    constructor(props:any){
        super(props);

        this.state={
            establishmentsObj: [],
            establishments:[],
            showMore:{
                show:false,
                id:undefined
            }
        }
        this.showMore = this.showMore.bind(this);
    }

    componentDidMount(){
        const app: any = this;
        if(app.validateCridentials()){
            app.getData();
        }else{
            app.props.history.push("/admin/login");
        }
    }

    validateCridentials(){
        let session: any = sessionStorage.getItem("adminSession");

        if(session !== "12v3e124r12t5t" || session===null){
            return false
        }else{
            return true;
        }
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

    showMore(component:any){
        const app:any = this;
        if (component.props.arrayId === app.state.showMore.id && app.state.showMore.show===true){
            app.setState({
                showMore:{
                    show:false,
                    id:undefined,
                },
                establishments: []
            });
        }else{
            app.setState({
                showMore:{
                    show:true,
                    id:component.props.arrayId,
                },
                establishments: []
            });
        }
    }

    createEstablishments(){
        const app: any = this;
        let establishments = app.state.establishmentsObj;

        establishments.forEach((value:any, key:number) => {
            let showMore:boolean = app.state.showMore.id===key && app.state.showMore.show===true ? true : false;
            
            app.state.establishments.push(
                <EstablishmentsComp
                    imgUrl={value.imageUrl}
                    estName={value.establishmentName}
                    email={value.establishmentEmail}
                    amtGuest={value.maxGuests}
                    price={value.price}
                    selfCatering={value.selfCatering}
                    propertyDescription={value.description}
                    handleShowMoreClick={app.showMore}
                    showMore={showMore}
                    propertyId={value.id}
                    arrayId={key}
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
                <div className="[ admin-est ]">
                    <h1 className="[ admin-est__heading ]">Establishments</h1><br/>
                    <div>
                        {app.state.establishments}
                    </div>
                </div>
            </div>
        );
    }
}