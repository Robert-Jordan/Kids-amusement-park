import React from "react";
import { withRouter } from 'react-router-dom';

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
      {/* REMOVE ! */}
      {props.loggedIn ? <AuthenticatedNavbar loggedIn={props.loggedIn} /> : <IndexNavbar />}
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Carousel/>
          <Tabs/>
          <Maps/>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default withRouter(Index);

// 1.	Кімната розваг.
// 2.	Кімната сміху.
// 3.	Кімната страху.
// 4.	Тематичні кімнати
// 5.	Ролердром.
// 6.	Проведення конкурсів та днів народжень.
// 7.	Замовлення святкового столу.


// Мапа язык - рус, укр, англ

