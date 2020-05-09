import React from "react";
// redux components 
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
// router
import { withRouter } from 'react-router-dom';
import { NavLink } from "react-router-dom";
// reactstrap components
import {
  Button, Card, CardHeader, CardBody, CardFooter, CardTitle,
  Row, Label, InputGroupAddon, InputGroupText, InputGroup, Container,
  Col, Alert, FormGroup,
} from "reactstrap";
// formik+yup
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// core components
import SignInNavbar from "components/Navbars/SignInNavbar";
import TransparentFooter from "components/Footers/TransparentFooter.jsx";


const SignUp = props => {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passFocus, setPassFocus] = React.useState(false);
  const [confPassFocus, setConfPassFocus] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const isRegistering = useSelector(state => state.registration.isRegistering);
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required!')
      .min(1, 'Too short first name!'),
    lastName: Yup.string()
      .required('Last name is required!')
      .min(1, 'Too short last name!'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required')
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        'You must enter at least 1 number, 1 upper and lowercase letter.',
      ),
    confirmPasword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    acceptedTerms: Yup.boolean()
      .oneOf([true], 'Must Accept Terms and Conditions')
      .required('Must Accept Terms and Conditions'),
  });

  React.useEffect(() => {
    document.body.classList.add("signup-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("signup-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const handleSubmit = (e) => {
    const user = {
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      password: e.password,
    };
    if (user.firstName && user.lastName && user.email && user.password && e.acceptedTerms) {
      dispatch(actions.register(user))
        .then(response => {
          if (response.successfulRegistration && response.errorMessage === '') {
            props.history.push('/login-page')
          }
        })
        .catch(response => {
          setErrorMessage(response.errorMessage);
          console.log(response.errorMessage)
        });
    }
  };

  return (
    <>
      <SignInNavbar />
      <div
        className="page-header clear-filter" filter-color="blue"
        id='signup-section'
      >
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
                onClick={() => setErrorMessage('')}
              >
                <span aria-hidden="true">
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </span>
              </button>
            </Container>
          </Alert>}
          <Col className="ml-auto mr-auto" md="4">
            <Card className='card-signup card-plain'>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  confirmPasword: '',
                  acceptedTerms: false,
                }}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, handleSubmit }) => (
                  <Form className='form' onSubmit={handleSubmit} >
                    <CardHeader className='text-center'>
                      <CardTitle className='title-up' tag='h3'>
                        Sign Up
                  </CardTitle>
                      <div className='social-line'>
                        <Button
                          className='btn-neutral btn-icon btn-round'
                          color='facebook'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fab fa-facebook-square'></i>
                        </Button>
                        <Button
                          className='btn-neutral btn-icon btn-round'
                          color='twitter'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                          size='lg'
                        >
                          <i className='fab fa-twitter'></i>
                        </Button>
                        <Button
                          className='btn-neutral btn-icon btn-round'
                          color='google'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fab fa-google-plus'></i>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (firstFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='now-ui-icons users_circle-08'></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field
                          name="firstName"
                          type="text"
                          placeholder="First name*"
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                          className={`form-control${
                            errors.firstName && touched.firstName ? ' is-invalid' : ''
                            }`}
                        />
                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                      </InputGroup>

                      <InputGroup
                        className={
                          "no-border" + (lastFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='now-ui-icons users_circle-08'></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field
                          name="lastName"
                          type="text"
                          placeholder="Last name*"
                          onFocus={() => setLastFocus(true)}
                          onBlur={() => setLastFocus(false)}
                          className={`form-control${
                            errors.lastName && touched.lastName ? ' is-invalid' : ''
                            }`}
                        />
                        <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                      </InputGroup>

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
                          placeholder="Email*"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                          className={`form-control${errors.email && touched.email ? ' is-invalid' : ''}`}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
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
                          placeholder="Password*"
                          onFocus={() => setPassFocus(true)}
                          onBlur={() => setPassFocus(false)}
                          className={`form-control${
                            errors.password && touched.password ? ' is-invalid' : ''
                            }`}
                        />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </InputGroup>

                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (confPassFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field
                          name="confirmPasword"
                          type="password"
                          placeholder="Confirm password*"
                          onFocus={() => setConfPassFocus(true)}
                          onBlur={() => setConfPassFocus(false)}
                          className={`form-control${
                            errors.confirmPasword && touched.confirmPasword ? ' is-invalid' : ''
                            }`}
                        />
                        <ErrorMessage name="confirmPasword" component="div" className="invalid-feedback" />
                      </InputGroup>

                      <FormGroup check>
                        <Label check>
                          <Field
                            name="acceptedTerms"
                            type="checkbox"
                            className={`form-checkbox${
                              errors.acceptedTerms && touched.acceptedTerms ? ' is-invalid' : ''
                              }`} />
                          <span className="form-check-sign">
                            {' '}
                      I accept the
                      {' '}
                            <NavLink href="#">Terms &amp; Conditions</NavLink></span>
                        </Label>
                        <ErrorMessage name="acceptedTerms" component="div" className="invalid-feedback" />
                      </FormGroup>
                    </CardBody>
                    <CardFooter className='text-center'>
                      <Button
                        type="submit"
                        className='btn-round'
                        color='info'
                        onClick={handleSubmit}
                        size='lg'
                      >
                        Get Started
                  </Button>
                      {isRegistering && (
                        <center>
                          <FontAwesomeIcon icon={faSpinner} className="fa fa-spinner fa-spin" />
                        </center>
                      )}
                    </CardFooter>
                  </Form>
                )}
              </Formik>
            </Card>
          </Col>
          {/* <div className='col text-center'>
            <Button
              className='btn-round btn-white'
              color='default'
              to='/login-page'
              outline
              size='lg'
              tag={Link}
            >
              View Login Page
            </Button>
          </div> */}
        </Container>
        <TransparentFooter />
      </div>
    </>
  );
};

export default withRouter(SignUp);