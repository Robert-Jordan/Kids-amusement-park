import React from "react";
// router
import { withRouter } from 'react-router-dom';
// reactstrap components
import { Container } from "reactstrap";

// core components
import SignInNavbar from "components/Navbars/SignInNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.jsx";
import DarkFooter from "components/Footers/DarkFooter";

const ProfilePage = props => {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <SignInNavbar />
      <div className="wrapper">
        <ProfilePageHeader {...props}/>
        <div className="section">
          <Container>
            <h3 className="title">Your orders</h3>
            <h5 className="description">
              Coming soon..
            </h5>
            </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default withRouter(ProfilePage);
