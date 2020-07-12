import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
// reactstrap components
import {
  Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav,
  Container,
} from "reactstrap";
import * as actions from '../../views/authentication/actions';
// core components
import ServicesDropdown from '../Dropdowns/ServicesDropdown';

const CheckoutNavbar = (props) => {
  const [navbarColor, setNavbarColor] = React.useState("");
  const dispatch = useDispatch();
  
  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              target="_blank"
              id="navbar-brand"
            >
              <NavLink to="/index" tag={Link}>
                CHILDREN'S AMUSEMENT PARK
              </NavLink>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
              }}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
          >
            <Nav navbar>
            <NavItem>
                <NavLink
                  to="/category-page"
                  tag={Link}>
                  <p>Services</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/profile-page"
                  tag={Link}>
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  onClick={() => {
                    if (props.loggedIn) {
                      dispatch(actions.logout())
                    }
                  }
                  }>
                  <p>Logout</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CheckoutNavbar;