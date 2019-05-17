import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import logo from '../../../img/graphics/logo.png';

interface navbarCompProps{ currentPage:string; }

export default class NavbarComp extends React.Component<navbarCompProps>{
    constructor(props:any) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        const app: any = this;
        app.setState({
            isOpen: !app.state.isOpen
        });
      }
      render(){
        const app: any = this;
        const path: string = app.props.currentPage
        const home: string = path === "home" ? "[ navbar__link navbar__link--active ]" : "[ navbar__link ]";
        const contact: string = path === "contact" ? "[ navbar__link navbar__link--active ]" : "[ navbar__link ]";

        return (
            <Navbar className="[ navbar ]" color="light" light expand="md">
                <NavbarBrand href="#/"><img className="[ navbar__brand ]" src={logo} alt="logo"/></NavbarBrand>
                <NavbarToggler onClick={app.toggle} />
                <Collapse isOpen={app.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className={home} href="#/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={contact} href="#/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}