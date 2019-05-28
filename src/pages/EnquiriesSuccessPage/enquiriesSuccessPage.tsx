import React from 'react';
import NavbarComp from './../../components/UserSite/Navigation/NavbarComp';
import SuccessComp from './../../components/UserSite/SuccessComp/SuccessComp';

export default class EnquiriesSuccessPage extends React.Component{
    render(){
        return(
            <div>
                <NavbarComp/>
                <SuccessComp
                    heading={"Thank you for your enquiry!"}
                    text={"We have recieved your enquiry and will reply to you as soon as possible."}
                />
            </div>
        );
    }
}