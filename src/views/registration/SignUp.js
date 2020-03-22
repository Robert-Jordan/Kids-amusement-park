import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import SignInNavbar from "components/Navbars/SignInNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";


const SignUp = () => {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
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
  return (
    <>
      <SignInNavbar />
      <div 
        className="page-header clear-filter" filter-color="blue"
        id='signup-section'
      >
        <Container>
        <Col className="ml-auto mr-auto" md="4">
            <Card className='card-signup card-plain'>
              <Form action='' className='form' method=''>
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
                    <Input
                      placeholder='First Name'
                      type='text'
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
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
                    <Input
                      placeholder='Last Name'
                      type='text'
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
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
                    <Input
                      placeholder='Email'
                      type='text'
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
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
                      <Input
                        placeholder="Password"
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
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
                      <Input
                        placeholder="Confirm password"
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                </CardBody>
                <CardFooter className='text-center'>
                  <Button
                    className='btn-round'
                    color='info'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                    size='lg'
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Form>
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

export default SignUp;
