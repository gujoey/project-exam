import React from 'react';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';

interface SearchCompProps{ 
    heading?: string; 
    suggestedSearches?: string;
    handleSearchTerm: string;
    handleSubmit: string;
    searchRes: any;
    displaySearch?: boolean;
    color?: string;
    suggestions?: boolean;
}

export default class SearchComp extends React.Component<SearchCompProps>{
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
        let displayResult: any = app.props.displaySearch === true ? "[ search__dropdown--show ]" : "[ search__dropdown--hide ]";
        let color: string = app.props.color === "black" ? "[ search__heading--black ]" : "[ search__heading ]";
        let suggestedSearch = app.props.suggestions === true ? "[ search__suggested ]" : "[ search__suggested--none ]"

        return(
            <div className="[ search ]">
                <div className="[ search__container ]">
                    <h1 className={color}>{app.props.heading}</h1>
                    <Form onKeyUp={app.handleKeyPress} onSubmit={app.handleKeyPress} className="[ search__form ]">
                        <FormGroup>
                            <InputGroup>
                                <Input className="[ search__input ]" type="text" innerRef={(node) => app.searchInput = node} placeholder="Search among all of our accommodations"/>
                                <InputGroupAddon onClick={app.handleSubmit} className="[ search__icon ]" addonType="append"><i className="fas fa-search"></i></InputGroupAddon>
                            </InputGroup>
                        </FormGroup> 
                    </Form>
                    <p className={suggestedSearch}><strong>Suggested:</strong> {app.props.suggestedSearches}</p>
                    <div className={"[ search__dropdown " + displayResult + " ]" }>{app.props.searchRes}</div>
                </div>
            </div>
        );
    }
}