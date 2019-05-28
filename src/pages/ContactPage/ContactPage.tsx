import React from 'react';
import NavbarComp from './../../components/UserSite/Navigation/NavbarComp';
import ContactComp from './../../components/UserSite/ContactComp/ContactComp';

export default class ContactPage extends React.Component{
    render(){
        return(
            <div>
                <NavbarComp currentPage={"contact"}/>
                <ContactComp/>
            </div>
        );
    }
}