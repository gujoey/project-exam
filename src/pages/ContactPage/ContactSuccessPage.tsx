import React from 'react';
import NavbarComp from './../../components/UserSite/Navigation/NavbarComp';
import SuccessComp from './../../components/UserSite/SuccessComp/SuccessComp';

export default class ContactSuccessPage extends React.Component{
    render(){
        return(
            <div>
                <NavbarComp currentPage="contact"/>
                <SuccessComp
                    heading={"Thank you for contacting us"}
                    text={"We have recieved your contact message and we'll reply to you as soon as possible."}
                />
            </div>
        );
    }
}