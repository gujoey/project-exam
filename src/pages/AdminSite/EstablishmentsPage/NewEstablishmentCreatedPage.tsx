import React from 'react';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
import NewEstablishmentCreatedComp from './../../../components/AdminSite/EstablishmentsComp/NewEstablishmentCreatedComp';

export default class NewEstablishmentCreatedPage extends React.Component{
    render(){
        return(
            <div>
                <NavbarComp/>
                <NewEstablishmentCreatedComp/>
            </div>
        );
    }
}