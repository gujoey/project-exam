import React from 'react';

export default class NewEstablishmentCreatedComp extends React.Component{
    render(){
        return(
            <div className="[ establishment-created ]">
                <h1 className="[ establishment-created__heading ]">New establishment created</h1>
                <p>
                    You have succsessfully created a new establishment.
                    The establishment will be available on the site in a few seconds!
                </p>
            </div>
        );
    }
}