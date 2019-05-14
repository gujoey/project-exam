import React from 'react';
import SearchComp from './../../components/UserSite/Search/SearchComp';

export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <SearchComp
                    heading="Welcome to your entry to all of Bergens great accommodations!"    
                />
            </div>
        );
    }
}