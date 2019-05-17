import React from 'react';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';

interface searchCompProps{ 
    heading: string; 
    suggestedSearches: string;
    handleSearchTerm: string;
    handleSubmit: string;
    searchRes?: any;
    displaySearch: boolean;
}

export default class SearchComp extends React.Component<searchCompProps>{
    constructor(props: any){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleKeyPress(e:any){
        const app: any = this;
        e.preventDefault();

        if (e.keyCode === 13){
            app.handleSubmit();
        }

        app.props.handleSearchTerm(app.searchInput.value);
    }

    handleSubmit(){
        const app: any = this;
        app.props.handleSubmit(app.searchInput.value);
    }

    render(){
        const app: any = this;
        let displayResult: any = app.props.displaySearch === true ? "search__dropdown--show" : "search__dropdown--hide";

        return(
            <div className="[ search ]">
                <div className="[ search__container ]">
                    <h1>{app.props.heading}</h1>
                    <Form onKeyUp={app.handleKeyPress} onSubmit={app.handleKeyPress} className="[ search__form ]">
                        <FormGroup>
                            <InputGroup>
                                <Input className="[ search__input ]" type="text" innerRef={(node) => app.searchInput = node} placeholder="Search among all of our accommodations"/>
                                <InputGroupAddon onClick={app.handleSubmit} className="[ search__icon ]" addonType="append"><i className="fas fa-search"></i></InputGroupAddon>
                            </InputGroup>
                        </FormGroup> 
                    </Form>
                    <p className="[ search__suggested ]"><strong>Suggested:</strong> {app.props.suggestedSearches}</p>
                    <div className={"[ search__dropdown " + displayResult + " ]" }>{app.props.searchRes}</div>
                </div>
            </div>
        );
    }
}