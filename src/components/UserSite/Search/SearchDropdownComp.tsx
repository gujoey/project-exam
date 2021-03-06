import React from 'react';

interface SearchDropdownProps{
    image: string;
    name: string;
    infoPrice: string;
    infoAmtGuests: number;
    id: number;
}

export default class SearchDropdownComp extends React.Component<SearchDropdownProps>{
    render(){
        const app: any = this;

        return(
            <div className="search__inner-dropdown-container">
                <a href={"#/establishments/"+app.props.id}>
                    <img className="[ search__dropdown-image ]" src={app.props.image} alt={app.props.name}/>
                    <p className="[ search__dropdown-text ]">
                        {app.props.name} <br/>
                        <span className="[ search__dropdown-text--info ]"> Prices from  ${app.props.infoPrice} max guests {app.props.infoAmtGuests}</span>
                    </p>

                </a>
            </div>
        );
    }
}