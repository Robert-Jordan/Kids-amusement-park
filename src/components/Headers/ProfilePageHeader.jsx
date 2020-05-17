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
import * as actions from '../../views/profile/actions';

const ProfilePageHeader = (props) => {
  let pageHeader = React.createRef();
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passFocus, setPassFocus] = React.useState(false);
  const [newPassFocus, setNewPassFocus] = React.useState(false);
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const [newPassword, setNewPassword] = React.useState('');
  const [successfulMessage, setSuccessfulMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const isUpdating = useSelector(state => state.profile.isUpdating);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getUserCredentials());
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
  const schema = Yup.object().shape({
    // avatar: Yup.string(),
    email: Yup.string(),
    password: Yup.string().required('You have to enter your current password!'),
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        'You must enter at least 1 number, 1 upper and lowercase letter.',
      ),
  });
  const handleSubmit = e => {
    const updatedUser = {
      email: e.email,
      password: e.password,
      newPassword: e.newPassword
    };
    if ((updatedUser.password && (e.newPassword || e.email))) {
      dispatch(actions.update(updatedUser))
        .then(response => {
          if (response.profileDataUpdated) {
            setSuccessfulMessage('Your data was successfully updated!')
            clearInputs();
          }
        })
        .catch(response => {
          setErrorMessage(response.errorMessage);
          console.log(response.errorMessage)
        });
    }
  };
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
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          {errorMessage && <Alert color="danger" show={errorMessage}>
            <Container>
              <div className="alert-icon">
                <i className="now-ui-icons objects_support-17"></i>
              </div>
              <strong>Error!</strong>{errorMessage}
              <button
                type="button"
                className="close"
                onClick={() => { setErrorMessage(''); }}
              >
                <span aria-hidden="true">
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </span>
              </button>
            </Container>
          </Alert>}
          {successfulMessage && <Alert color="success" show={successfulMessage}>
            <Container>
              <div className="alert-icon">
                <i className="now-ui-icons ui-2_like"/>
              </div>
              <strong>Success! </strong>{successfulMessage}
              <button
                type="button"
                className="close"
                onClick={() => { setSuccessfulMessage(''); }}
              >
                <span aria-hidden="true">
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </span>
              </button>
            </Container>
          </Alert>}
          <Formik
            initialValues={{
              email: '',
              password: '',
              newPassword: '',
              avatar: '',
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleSubmit }) => (
              <Col className="ml-auto mr-auto" md="4">
                <Form className='form' onSubmit={handleSubmit}>
                  <div className="photo-container">
                    <img alt="..." src={require("assets/img/default-avatar.png")}></img>
                  </div>
                  <h3 className="title">{props.firstName + ' ' + props.lastName}</h3>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border" + (emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                          <i className='now-ui-icons ui-1_email-85'></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Enter new email"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        // value={email}
                        // onChange={(e)=>setEmail(e.target.value)}
                        className={`form-control${errors.email && touched.email ? ' is-invalid' : ''}`}
                      />
                      <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </InputGroup>

                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (newPassFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field
                        name="newPassword"
                        type="password"
                        placeholder="New password"
                        onFocus={() => setNewPassFocus(true)}
                        onBlur={() => setNewPassFocus(false)}
                        // value={newPassword}
                        // onChange={(e)=>setNewPassword(e.target.value)}
                        className={`form-control${
                          errors.confirmPasword && touched.confirmPasword ? ' is-invalid' : ''
                          }`}
                      />
                      <ErrorMessage name="newPassword" component="div" className="invalid-feedback" />
                    </InputGroup>

                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (passFocus ? " input-group-focus" : "")
                      }>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Enter current password to submit changes"
                        onFocus={() => setPassFocus(true)}
                        onBlur={() => setPassFocus(false)}
                        // value={password}
                        // onChange={(e)=>setPassword(e.target.value)}
                        className={`form-control${
                          errors.password && touched.password ? ' is-invalid' : ''
                          }`}
                      />
                      <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    </InputGroup>
                    
                    <Button
                      type="submit"
                      className='btn-round'
                      color='info'
                      onClick={handleSubmit}
                      size='lg'
                    >
                      Change
                      </Button>
                    {isUpdating && (
                      <center>
                        <FontAwesomeIcon icon={faSpinner} className="fa fa-spinner fa-spin" />
                      </center>
                    )}
                  </CardBody>
                </Form>
              </Col>
            )}
          </Formik>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
