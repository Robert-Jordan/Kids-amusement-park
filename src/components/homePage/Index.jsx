import React from "react";
import { withRouter } from 'react-router-dom';
// core components
import IndexNavbar from "../../shared/Navbars/IndexNavbar";
import AuthenticatedNavbar from "../../shared/Navbars/AuthenticatedNavbar";
import IndexHeader from "../../shared/Headers/IndexHeader";
import DarkFooter from "../../shared/Footers/DarkFooter";
// sections for this page
import Tabs from "./Tabs";
import Maps from "./Maps";

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
          {/* <Tabs/>
          <Maps/> */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default withRouter(Index);