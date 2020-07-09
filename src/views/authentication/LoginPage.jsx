import React from "react";
import { Link } from "react-router-dom";
// redux components 
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
// reactstrap components
import {
  Button, Card, CardTitle, CardHeader, CardBody, CardFooter,
  InputGroupAddon, InputGroupText, InputGroup, Container, Col, Alert,
  NavLink,
} from "reactstrap";
// formik + yup
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// core components
import SignInNavbar from "components/Navbars/SignInNavbar";
import TransparentFooter from "components/Footers/TransparentFooter.jsx";
import * as actions from './actions';

const LoginPage = props => {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const schema = Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (e) => {
    if (e.username && e.password) {
      dispatch(actions.login(e.username, e.password))
        .then(response => {
          if (response.successfulLogin && response.errorMessage === '') {
            props.history.push('/index')
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
      <div className="page-header clear-filter" filter-color="blue">
        <div className="content">
          <Container>
            {errorMessage && <Alert color="danger" show={errorMessage}>
              <Container>
                <div className="alert-icon">
                  <i className="now-ui-icons objects_support-17"></i>
                </div>
                <strong>Error! </strong>{errorMessage}
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
            </Alert>
            }
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Formik
                  initialValues={{
                    username: '',
                    password: '',
                  }}
                  validationSchema={schema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched, handleSubmit }) => (
                    <Form className="form" onSubmit={handleSubmit}>
                      <CardHeader className="tt-center">
                        <CardTitle className='title-up' tag='h3'>
                          Sign In
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
                            + "has-danger"
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Field
                            name="username"
                            placeholder="Username"
                            type="text"
                            onFocus={() => setFirstFocus(true)}
                            onBlur={() => setFirstFocus(false)}
                            className={`form-control${
                              errors.username && touched.username ? ' is-invalid' : ''
                              }`}
                          />
                          <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </InputGroup>

                        <InputGroup
                          className={
                            "no-border input-lg" +
                            (lastFocus ? " input-group-focus" : "")
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons text_caps-small"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Field
                            name="password"
                            type="password"
                            placeholder="Password"
                            onFocus={() => setLastFocus(true)}
                            onBlur={() => setLastFocus(false)}
                            className={`form-control${
                              errors.password && touched.password ? ' is-invalid' : ''
                              }`}
                          />
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </InputGroup>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button
                          type="submit"
                          className='btn-round'
                          color='info'
                          onClick={handleSubmit}
                          size='lg'
                        >
                          Get Started
                       </Button>
                        {loggingIn && (
                          <center>
                            <FontAwesomeIcon icon={faSpinner} className="fa fa-spinner fa-spin" />
                          </center>
                        )}
                        <div>
                        <div className="pull-left">
                            <h6>
                              <NavLink
                                to="/registration-page"
                                tag={Link}
                                className="link">
                                Create an Account
                              </NavLink>
                            </h6>
                          </div>
                          <div className="pull-right">
                            <h6>
                              <NavLink
                                to="#"
                                tag={Link}
                                className="link">
                                Need help?
                              </NavLink>
                            </h6>
                          </div>
                        </div>
                      </CardFooter>
                    </Form>
                  )}
                </Formik>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default withRouter(LoginPage);