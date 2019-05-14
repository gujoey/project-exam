import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

interface searchCompProps{ heading:string; }

export default class SearchComp extends React.Component<searchCompProps>{
    constructor(props: any){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(){
        const app: any = this;
        
        console.log(app.searchInput.value);
    }
    render(){
        let app: any = this;

        return(
            <div className="[ search ]">
                <span className="[ search__bg-image ]"></span>
                <div className="[ search__container ]">
                    <h1>{app.props.heading}</h1>
                    <Form>
                        <FormGroup onKeyUp={app.handleKeyPress}>
                            <Input type="text" innerRef={(node) => app.searchInput = node} placeholder="Search among all of our accommodations" />
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}