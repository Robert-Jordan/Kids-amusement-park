import * as React from 'react';
// redux components
import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useSelector } from '../types';
import { UserProfileModel, UpdateProfileResultModel } from './types';
import { update } from './actions';
// router
import { withRouter, RouteComponentProps } from 'react-router-dom';
// reactstrap components
import {
  InputGroupAddon, InputGroupText, InputGroup, Container,
  Alert,  CardBody, Col, Button } from "reactstrap";
// formik+yup
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// redux
import * as actions from './actions';
// core components
import SignInNavbar from "../../shared/Navbars/SignInNavbar";
import ProfilePageHeader from "../../shared/Headers/ProfilePageHeader";
import DarkFooter from "../../shared/Footers/DarkFooter";

const ProfilePage: React.FunctionComponent<RouteComponentProps> = props => {
  React.useEffect(() => {
    dispatch(actions.getUserCredentials(userId));
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passFocus, setPassFocus] = React.useState(false);
  const [newPassFocus, setNewPassFocus] = React.useState(false);
  const [successfulMessage, setSuccessfulMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const isUpdating = useSelector(state => state.profile.isUpdating);
  const userId = useSelector(state => state.authentication.userId);
  const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
  // const successfullOrders = useSelector(state => state.checkout.successfullOrders); TODO FIX

  const generateId = () => {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + "-" + S4() + "-" + S4());
  }

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

  const handleSubmit = (user: UserProfileModel) => {
    const updatedUser = {
      email: user.email,
      password: user.password,
      newPassword: user.newPassword
    };
    if ((updatedUser.password && (user.newPassword || user.email))) {
      dispatch(actions.update(updatedUser))
        .then(response => {
          if (response.profileDataUpdated) {
            setSuccessfulMessage('Your data was successfully updated!')
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
      <SignInNavbar transparent={false} />
      <div className="wrapper">
        {/* <ProfilePageHeader {...props} /> */}

        <div className="section">
          <div
            className="page-header clear-filter card-profile-user"
            filter-color="blue"
          >
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
                    <i className="now-ui-icons ui-2_like" />
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
                        <img alt="..." src={require("../../assets/img/default-avatar.png")}></img>
                      </div>
                      {/* todo: add logic */}
                      {/* <h3 className="title">{props.firstName + ' ' + props.lastName}</h3> */}
                      <h3 className="title">test user</h3>
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
                              errors.newPassword && touched.newPassword ? ' is-invalid' : ''
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
                            placeholder="Current password"
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
                          // <center>
                            <FontAwesomeIcon icon={faSpinner} className="fa fa-spinner fa-spin" />
                          // </center>
                        )}
                      </CardBody>
                    </Form>
                  </Col>
                )}
              </Formik>
            </Container>
          </div>
          <Container>
            <h3 className="title">Your orders</h3>
              <table style={{ width: "100%", }}>
                <tr>
                  <th>Id</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Total</th>
                </tr>
                {/* {successfullOrders && successfullOrders.length &&
                 successfullOrders.map(order =>
                  <tr>
                    <td>{generateId()}</td>
                    <td>{order.serviceData.title}</td>
                    <td>{order.selectedDate}</td>
                    <td>{order.selectedTime.startTime}-{order.selectedTime.endTime}</td>
                    <td>{order.total}&#8372;</td>
                  </tr>
                )} */}
              </table>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default withRouter(ProfilePage);
