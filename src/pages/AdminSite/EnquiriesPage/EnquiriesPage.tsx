import React from 'react';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
import EnquiriesComp from './../../../components/AdminSite/EnquiriesComp/EnquiriesComp';

export default class EnequiriesPage extends React.Component{
    constructor(props:any){
        super(props);

        this.state = {
            enquiriesObj: [],
            enquiries: []
        }
    }

    componentDidMount(){
        const app: any = this;

        app.getData();
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

    getEnquiries(){
        const app: any = this;
        let enquiriesObj = app.state.enquiriesObj;

        enquiriesObj.forEach((value: any, key: number) => {
            if (value.establishment){
                app.state.enquiries.push(
                    <EnquiriesComp
                        clientName={value.clientName}
                        establishment={value.establishment}
                        key={key}
                    />
                );
            }
        });
    }

    render(){
        const app: any = this;
        app.getEnquiries();

        return(
            <div>
                <NavbarComp currentPage="enquiries"/>
                <div>
                    {app.state.enquiries}
                </div>
            </div>
        );
    }
}