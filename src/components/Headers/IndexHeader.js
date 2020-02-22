/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, NavItem, NavLink } from "reactstrap";
// core components

const IndexHeader = () => {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className='page-header clear-filter' filter-color='blue'>
        <div
          className='page-header-image'
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className='content-center brand'>
            <h1 className='h1-seo'>entertainment for everyone</h1>
            <h3>
              Check if we are in your city on
                <NavLink
                  href='#pablo'
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("map-section").scrollIntoView();
                  }}
                >
                  Map
                </NavLink>
            </h3>
          </div>
        </Container>
      </div>
    </>
  );
};

export default IndexHeader;
