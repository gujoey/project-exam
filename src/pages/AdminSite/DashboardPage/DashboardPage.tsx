import React from 'react';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
import DashboardComp from './../../../components/AdminSite/DashboardComp/DashboardComp';
import { Row, Col, Container } from 'reactstrap';

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
        const app = this;
		fetch(url)
		.then(response =>{
			return response.json()
		})
		.then(result =>{
			app.setState({[key]:result});
		});
    }

    render(){
        const app: any = this;

        return(
            <div>
                <NavbarComp
                    currentPage={"dashboard"}
                />
                
                <Container>
                    <Row>
                        <Col md="4">
                            <DashboardComp
                                heading={"Enquiries"}
                                amount={app.state.enquiries.length}
                                icon={"fas fa-envelope"}
                                redirect={"#/admin/enquiries"}
                            />
                        </Col>
                        <Col md="4">
                            <DashboardComp
                                heading={"Establishments"}
                                amount={app.state.establishments.length}
                                icon={"fas fa-building"}
                                redirect={"#/admin/establishments"}
                            />
                        </Col>
                        <Col md="4">
                            <DashboardComp
                                heading={"Messages"}
                                amount={app.state.messages.length}
                                icon={"fas fa-envelope"}
                                redirect={"#/admin/messages"}
                            />
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
} 