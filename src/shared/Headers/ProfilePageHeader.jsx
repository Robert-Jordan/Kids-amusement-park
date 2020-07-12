import React from "react";
import { useDispatch, useSelector } from 'react-redux';
// reactstrap components
import {
  InputGroupAddon, InputGroupText, InputGroup, Container,
  Alert, CardHeader, CardBody, CardFooter, Col, Button
} from "reactstrap";
// formik+yup
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// redux
import * as actions from '../../components/profile/actions';

const ProfilePageHeader = (props) => {
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
 
  const clearInputs = () => {
    // setEmail('');
    // setPassword('');
    // setNewPassword('');
  };
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          // style={{
          //   backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")"
          // }}
          ref={pageHeader}
        ></div>
        
      </div>
    </>
  );
}

export default ProfilePageHeader;
