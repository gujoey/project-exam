import React from 'react';
import { establishmentsApiUrl, enquiriesApiUrl, contactApiUrl } from './../../../apiURLs/apiURLs';
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
        app.fetchJSON(enquiriesApiUrl, "enquiries");
        app.fetchJSON(contactApiUrl, "messages");
        app.fetchJSON(establishmentsApiUrl, "establishments");
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
                    <Row className="[ dashboard-row ]">
                        <Col className="[ align-self-center ]" md="4">
                            <DashboardComp
                                heading={"Enquiries"}
                                amount={app.state.enquiries.length-1}
                                icon={"fas fa-envelope"}
                                redirect={"#/admin/enquiries"}
                            />
                        </Col>
                        <Col className="[ align-self-center ]" md="4">
                            <DashboardComp
                                heading={"Establishments"}
                                amount={app.state.establishments.length-1}
                                icon={"fas fa-building"}
                                redirect={"#/admin/establishments"}
                            />
                        </Col>
                        <Col className="[ align-self-center ]" md="4">
                            <DashboardComp
                                heading={"Messages"}
                                amount={app.state.messages.length-1}
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