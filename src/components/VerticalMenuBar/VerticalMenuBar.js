import React from 'react';
import { Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const VerticalMenuBar = (props) => {
  return (
      <Nav vertical navbar className="bg-primary px-3" style={{height:"100vh"}} > 
        <NavItem>
            <NavbarBrand> 
                <Link to="/" href="#" className="text-light nav-link">Dashboard</Link>
            </NavbarBrand>
        </NavItem>
        <NavItem>
          <Link href="#" to="/parseExcel" className="text-light nav-link">Parse Excel Data</Link>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light">Link</NavLink>
        </NavItem>
      </Nav>
  );
}

export default VerticalMenuBar;