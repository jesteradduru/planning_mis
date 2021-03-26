import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faHome, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
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
      </Nav>
  );
}

export default VerticalMenuBar;