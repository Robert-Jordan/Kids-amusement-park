import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
// reactstrap components
import {
  Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav,
  Container,
} from "reactstrap";
import * as actions from '../../components/authentication/actions';

const AuthenticatedNavbar = (props) => {
  let color = props.transparent !== undefined && !props.transparent
    ? "" : "navbar-transparent";
  const [navbarColor, setNavbarColor] = React.useState(color);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (props.transparent !== undefined && !props.transparent) {

      }
      else {
        if (
          document.documentElement.scrollTop > 399 ||
          document.body.scrollTop > 399
        ) {
          setNavbarColor("");
        } else if (
          document.documentElement.scrollTop < 400 ||
          document.body.scrollTop < 400
        ) {
          setNavbarColor("navbar-transparent");
        }
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {
        collapseOpen ? (
          <div
            id="bodyClick"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setCollapseOpen(false);
            }}
          />
        ) : null}
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
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
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

export default AuthenticatedNavbar;