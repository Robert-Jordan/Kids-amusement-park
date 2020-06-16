import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { Alert, Container } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import AuthenticatedNavbar from "components/Navbars/AuthenticatedNavbar";
import IndexHeader from "components/Headers/IndexHeader.jsx";
import DarkFooter from "components/Footers/DarkFooter.jsx";
import Carousel from 'views/index-sections/Carousel';

// sections for this page
import Tabs from "./index-sections/Tabs.js";
import Maps from "./index-sections/Maps.js";

const Index = (props) => {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      {props.loggedIn ? <AuthenticatedNavbar loggedIn={props.loggedIn} /> : <IndexNavbar />}
      <div className="wrapper">
        <IndexHeader />
      
        <div className="main">
          {/* <Carousel/> */}
          <Tabs/>
          <Maps/>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default withRouter(Index);