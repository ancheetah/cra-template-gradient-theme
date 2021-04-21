import React, { useState }  from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, 
    NavItem, NavLink, Collapse } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar dark expand="md" sticky="top">
            <NavbarBrand href="/home" className="mr-auto">
                <img src="../../logo192.png" alt="Logo" height="40" width="40"/>
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />
                <Collapse navbar isOpen={isOpen}>
                    <Nav navbar className="navbar-main">
                        <NavItem className="nav-item-main">
                            <NavLink className="nav-link-main" to="/home">Link 1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link-main" to="/home">Link 2</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link-main" to="/home"><FontAwesomeIcon icon={faHome}/> Home</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    );
}

export default Header;