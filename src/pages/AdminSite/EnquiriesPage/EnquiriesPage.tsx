import React from 'react';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
import EnquiriesComp from './../../../components/AdminSite/EnquiriesComp/EnquiriesComp';

export default class EnequiriesPage extends React.Component{
    constructor(props:any){
        super(props);

        this.state = {
            enquiriesObj: [],
            enquiries: [],
            showMore:{
                id: undefined,
                show: false
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
        fetch("http://localhost:8888/project-exam/server/enquiries.json")
            .then(response=>{
                return response.json();
            })
            .then(res=>{
                app.setState({enquiriesObj: res});
            });
    }

    showMore(component:any){
        const app: any  = this;

        if (component.props.id === app.state.showMore.id && app.state.showMore.show===true){
            app.setState({
                showMore:{
                    show:false,
                    id:undefined,
                },
                enquiries: []
            });
        }else{
            app.setState({
                showMore:{
                    show:true,
                    id:component.props.id,
                },
                enquiries: []
            });
        }
    }

    getEnquiries(){
        const app: any = this;
        let enquiriesObj = app.state.enquiriesObj;

        for (let i:number=enquiriesObj.length-1; i>=0; i--){
            if(enquiriesObj[i].establishment){
                let showMore:boolean = app.state.showMore.id===i && app.state.showMore.show===true ? true : false;
                app.state.enquiries.push(
                    <EnquiriesComp
                        clientName={enquiriesObj[i].clientName}
                        clientEmail={enquiriesObj[i].email}
                        establishment={enquiriesObj[i].establishment}
                        arrivalDate={enquiriesObj[i].checkin}
                        departureDate={enquiriesObj[i].checkout}
                        comment={enquiriesObj[i].comment}
                        handleShowMoreClick={app.showMore}
                        showMore={showMore}
                        id={i}
                        key={i}
                    />
                );
            }
        }
    }

    render(){
        const app: any = this;
        app.getEnquiries();

        return(
            <div>
                <NavbarComp currentPage="enquiries"/>
                <div className="[ enquiries-page ]">
                    <h1 className="[ enquiries-page__heading ]">Enquiries</h1><br/>
                    <div>
                        {app.state.enquiries}
                    </div>
                </div>
            </div>
        );
    }
}