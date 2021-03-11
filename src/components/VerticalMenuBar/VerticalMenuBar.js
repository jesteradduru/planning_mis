import React from 'react';
import { Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel, faHome } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const VerticalMenuBar = (props) => {
  return (
      <Nav vertical navbar className="bg-dark px-3" style={{height:"100vh"}} > 
        <NavItem>
            <NavbarBrand> 
                <Link to="/dashboard" href="#" className="text-warning nav-link">
                  <FontAwesomeIcon icon={faHome} size="lg" />
                  <span className="ml-2">Dashboard</span>
                </Link>
            </NavbarBrand>
        </NavItem>
        <NavItem>
          <Link href="#" to="/parseExcel" className="text-light nav-link">
            <FontAwesomeIcon icon={faFileExcel} size="1x" />
            <span className="ml-2">Read Excel</span>
          </Link>
        </NavItem>
        {/* <NavItem>
          <NavLink href="#" className="text-light">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light">Link</NavLink>
        </NavItem> */}
      </Nav>
  );
}

export default VerticalMenuBar;