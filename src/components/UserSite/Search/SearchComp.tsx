import React from 'react';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';

interface SearchCompProps{ 
    heading?: string; 
    suggestedSearches?: string;
    handleSearchTerm: string;
    handleSubmit?: string;
    searchRes: any;
    displaySearch?: boolean;
    color?: string;
    suggestions?: boolean;
    lessMargin?:boolean;
    disableSearchButton?: boolean;
    defaultInputValue?:string;
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
        if (!app.props.disableSearchButton){
            app.props.handleSubmit(app.searchInput.value);
        }
    }

    render(){
        const app: any = this;
        let displayResult: any = app.props.displaySearch === true ? "[ search__dropdown--show ]" : "[ search__dropdown--hide ]";
        let color: string = app.props.color === "black" ? "[ search__heading--black ]" : "[ search__heading ]";
        let suggestedSearch = app.props.suggestions === true ? "[ search__suggested ]" : "[ search__suggested--none ]";
        let lessMargin = app.props.lessMargin === true ? "[ search__container search__container--less-margin ]" : "[ search__container ]"

        return(
            <div className="[ search ]">
                <div className={lessMargin}>
                    <h1 className={color}>{app.props.heading}</h1>
                    <Form onKeyUp={app.handleKeyPress} onSubmit={app.handleKeyPress} className="[ search__form ]">
                        <FormGroup>
                            <InputGroup>
                                <Input className="[ search__input ]" type="text" innerRef={(node) => app.searchInput = node} defaultValue={app.props.defaultInputValue} placeholder="Rest Easy, The Hideaway, City Break"/>
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