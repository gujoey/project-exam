import React from 'react';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
//import DashboardComp from './../../../components/AdminSite/DashboardComp/DashboardComp';

export default class DashboardPage extends React.Component{
    constructor(props:any){
        super(props);

        this.state = {
            enquiries: [],
            messages: [],
            establishments: []
        }
    }

    componentDidMount(){
        const app: any = this;
        app.validateCridentials();
        app.getData();
    }

    validateCridentials(){
        const app: any = this;
        let session: any = sessionStorage.getItem("adminSession");

        if(session !== "12v3e124r12t5t" || session===null){
            app.props.history.push("/admin/login");
        }
    }

    getData(){
        const app: any = this;
        app.fetchJSON('http://localhost:8888/project-exam/server/enquiries.json', "enquiries");
        app.fetchJSON('http://localhost:8888/project-exam/server/contact.json', "messages");
        app.fetchJSON('http://localhost:8888/project-exam/server/establishments.json', "establishments");
    }

    fetchJSON(url:string, key:string){
        const app: any = this;
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            app.setState({[key]:JSON.stringify(myJson)});
        });
    }

    render(){
        const app: any = this;
        console.log(app.state.establishments);
        return(
            <div>
                <NavbarComp
                    currentPage={"dashboard"}
                />
                
            </div>
        );
    }
} 