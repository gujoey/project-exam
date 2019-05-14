import React from 'react';
import SearchComp from './../../components/UserSite/Search/SearchComp';
import NavbarComp from './../../components/UserSite/Navigation/NavbarComp';

export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <NavbarComp currentPage="home"/>
                <SearchComp
                    heading="Welcome to your entry to all of Bergens great accommodations!"
                    suggestedSearches="Sunset Beach, Rest Easy, The Hideaway"    
                />
            </div>
        );
    }
}