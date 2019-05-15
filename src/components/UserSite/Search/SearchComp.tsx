import React from 'react';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';

interface searchCompProps{ 
    heading: string; 
    suggestedSearches: string;
    handleSearchTerm: string; 
}

export default class SearchComp extends React.Component<searchCompProps>{
    constructor(props: any){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleKeyPress(){
        const app: any = this;
        app.props.handleSearchTerm(app.searchInput.value);
    }

    handleSearchClick(){
        console.log("clicked");
    }
    render(){
        let app: any = this;

        return(
            <div className="[ search ]">
                <div className="[ search__bg-image ]">
                    <div className="[ search__container ]">
                        <h1>{app.props.heading}</h1>
                        <Form className="[ search__form ]">
                            <FormGroup onKeyUp={app.handleKeyPress}>
                                <InputGroup>
                                    <Input className="[ search__input ]" type="text" innerRef={(node) => app.searchInput = node} placeholder="Search among all of our accommodations"/>
                                    <InputGroupAddon onClick={app.handleSearchClick} className="[ search__icon ]" addonType="append"><i className="fas fa-search"></i></InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                        <p className="[ search__suggested ]"><strong>Suggested:</strong> {app.props.suggestedSearches}</p>
                        <div className="[ search__dropdown ]">
                            <img className="[ search__dropdown-image ]" src="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="test"/>
                            <p className="[ search__dropdown-text ]">The Hideaway <span className="[ search__dropdown-text--info ]"> prices from $70, max guests 2</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}