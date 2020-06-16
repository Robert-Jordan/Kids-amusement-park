import React from "react";
// router
import { withRouter } from 'react-router-dom';
// reactstrap components
import { Container } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
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
  const successfulCheckout = useSelector(state => state.checkout.successfulCheckout);
  const name = useSelector(state => state.checkout.serviceData.title);
  const total = useSelector(state => state.checkout.total);
  const selectedDate = useSelector(state => state.checkout.selectedDate);
  const selectedTime = useSelector(state => state.checkout.selectedTime);
  const generateId = () => {
    var S4 = function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
   };
   return (S4()+"-"+S4()+"-"+S4());
  }
  return (
    <>
      <SignInNavbar />
      <div className="wrapper">
        <ProfilePageHeader {...props} />
        <div className="section">
          <Container>
            <h3 className="title">Your orders</h3>
            {successfulCheckout !== undefined && successfulCheckout &&
              <table style={{ width: "100%", }}>
                <tr>
                  <th>Id</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <td>{generateId()}</td>
                  <td>{name !== undefined && name}</td>
                  <td>{selectedDate !== undefined && selectedDate}</td>
                  <td>{selectedTime !== undefined && <>
                  {selectedTime.startTime}-{selectedTime.endTime}
                  </>}</td>
                  <td>{total !== undefined && total}&#8372;</td>
                </tr>
              </table>
            }
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default withRouter(ProfilePage);
