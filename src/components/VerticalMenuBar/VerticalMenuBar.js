import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faHome, faFolderOpen, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const VerticalMenuBar = () => {
  return (
      <Nav vertical navbar className="bg-dark px-3" style={{height:"100vh"}} > 
        <NavItem>
            <Link to="/dashboard" href="#" className="text-warning navbar-brand">
              <FontAwesomeIcon icon={faHome} size="lg" />
              <span className="ml-2">Dashboard</span>
            </Link>
        </NavItem>
        <NavItem>
          <Link href="#" to="/submitForm" className="text-light nav-link">
            <FontAwesomeIcon icon={faUpload} size="1x" />
            <span className="ml-2">Submit Form</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#" to="/viewForms" className="text-light nav-link">
            <FontAwesomeIcon icon={faFolderOpen} size="1x" />
            <span className="ml-2">View Forms</span>
          </Link>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="#" onClick={() => {
            if(window.confirm("Are you sure you want to logout?")){
              cookies.remove("user");
              window.location.reload()
            }
          }}>
            <FontAwesomeIcon icon={faSignOutAlt} size="1x" />
            <span className="ml-2">Logout</span>
          </NavLink>
        </NavItem>
      </Nav>
  );
}

export default VerticalMenuBar;