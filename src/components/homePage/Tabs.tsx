import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
const Tabs = () => {
  const [gameRooms, setgameRooms] = React.useState("1");
  const [birthdays, setBirthdays] = React.useState("1");
  const [specialRooms, setSpecialRooms] = React.useState("1");
  const [halls, setHalls] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
        <div className="content-center brand">
            <h1 className="h1-seo">Our services</h1>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Game rooms</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={gameRooms === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setgameRooms("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        Ball pool
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={gameRooms === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setgameRooms("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Trampoline arena
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={gameRooms === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setgameRooms("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Foam pit
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={gameRooms === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setgameRooms("4");
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        Bungee
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={gameRooms === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setgameRooms("5");
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        Mazes
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"gameRooms" + gameRooms}
                  >
                    <TabPane tabId="gameRooms1"  >
                      <img src={require("../../assets/img/BallPool.jpg")}/>
                    </TabPane>
                    <TabPane tabId="gameRooms2">
                    <img src={require("../../assets/img/TrampolineArena.jpg")}/>
                    </TabPane>
                    <TabPane tabId="gameRooms3">
                    <img src={require("../../assets/img/FoamPit.jpg")}/>
                    </TabPane>
                    <TabPane tabId="gameRooms4">
                    <img src={require("../../assets/img/Bungee.png")}/>
                    </TabPane>
                    <TabPane tabId="gameRooms5">
                    <img src={require("../../assets/img/Mazes.jpg")}/>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>                   
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Birthdays</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={birthdays === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setBirthdays("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        FestivalTable
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={birthdays === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setBirthdays("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Themed rooms
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={birthdays === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setBirthdays("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Themed rooms
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={birthdays === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setBirthdays("4");
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        Themed rooms
                      </NavLink>
                    </NavItem>
                    
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"birthdays" + birthdays}
                  >
                    <TabPane tabId="birthdays1"  >
                      <img src={require("../../assets/img/FestivalTable.jpg")}/>
                    </TabPane>
                    <TabPane tabId="birthdays2">
                    <img src={require("../../assets/img/AngryBirds.jpg")}/>
                    </TabPane>
                    <TabPane tabId="birthdays3">
                    <img src={require("../../assets/img/Masha.jpg")}/>
                    </TabPane>
                    <TabPane tabId="birthdays4">
                    <img src={require("../../assets/img/Dogs.jpg")}/>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>           
          </Row>
          <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Special rooms</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={specialRooms === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setSpecialRooms("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        Laughter room
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={specialRooms === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setSpecialRooms("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Room of fear
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={specialRooms === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setSpecialRooms("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Room of fear
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"specialRooms" + specialRooms}
                  >
                    <TabPane tabId="specialRooms1"  >
                      <img src={require("../../assets/img/LaughterRoom.jpg")}/>
                    </TabPane>
                    <TabPane tabId="specialRooms2">
                    <img src={require("../../assets/img/RoomOfFear1.jpg")}/>
                    </TabPane>
                    <TabPane tabId="specialRooms3">
                    <img src={require("../../assets/img/RoomOfFear2.jpg")}/>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>                   
          <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Large halls</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={halls === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setHalls("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        Rollerdrome
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={halls === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setHalls("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        LaserTag
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"halls" + halls}
                  >
                    <TabPane tabId="halls1"  >
                      <img src={require("../../assets/img/Rollerdrome.jpg")}/>
                    </TabPane>
                    <TabPane tabId="halls2">
                    <img src={require("../../assets/img/LaserTag.jpg")}/>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>                 
          </Row>
       
        </Container>
      </div>
    </>
  );
}

export default Tabs;
