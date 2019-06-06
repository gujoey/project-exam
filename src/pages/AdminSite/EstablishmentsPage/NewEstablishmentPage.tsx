import React from 'react';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
import NewEstablishmentComp from './../../../components/AdminSite/EstablishmentsComp/NewEstablishmentComp';

export default class NewEstablishmentPage extends React.Component{
    render(){
        return(
            <div>
                <NavbarComp currentPage={"establishments"}/>
                <div className="[ new-establishment ]">
                    <h1 className="[ new-establishment__heading ]">Create new establishment</h1><br/>
                    <NewEstablishmentComp/>
                </div>
            </div>
        );
    }
}