import React from "react"
import Logo from "../assets/P-MIS_LOGO.png"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Row, Col, Container } from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VerticalMenuBar from '../components/VerticalMenuBar/VerticalMenuBar'
import ParseExcel from "../components/ParseExcel/ParseExcel";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (

      <Container fluid>
        <Router>
          <Row>
            <Col md="2">
              <VerticalMenuBar />
            </Col>
            <Col md="10" className="m-0">
            <Switch>
                <Route exact path="/">
                  <div style={{position:"absolute", top:"45%", left: "50%", transform: "translate(-45%, -50%)" }}>
                    <img src={Logo} className="img-fluid mx-auto d-block" style={{width:"60%"}} alt=""/>
                    <marquee className="mt-3">Welcome Jackson Golinggan Ampogi Pogi mo!</marquee>
                  </div>
                </Route>
                <Route path="/parseExcel">
                  <ParseExcel />
                </Route>
            </Switch>
            </Col>
          </Row>
        </Router>
        
      </Container>
    );
  }
}

export default App;
