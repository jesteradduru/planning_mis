import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Row, Col, Container } from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VerticalMenuBar from '../../components/VerticalMenuBar/VerticalMenuBar'
import View from "../../components/Forms/View";
import Submit from "../../components/Forms/Submit";
import Login from "../../components/Login/Login";
import Banner from "../../components/Banner/Banner"
import { rememberUser } from "../../components/Login/actions"
import {connect}  from "react-redux";
import Cookies from "universal-cookie";
const cookies = new Cookies();


const mapStateToProps = (state) => ({
  user: state.signIn.user
})
const mapDispatchToProps = (dispatch) => ({
  onRememberUser : (user) => dispatch(rememberUser(user))
})

class App extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount () {
    if(cookies.get("user") !== undefined){
      this.props.onRememberUser(cookies.get("user"));
    }
  }

  render() {
    const {user} = this.props;

    if(user.length === 0){
      return (
        <>  
          <div className="bg-dark" style={{height: "100vh", position: "absolute", top: 0, width: "100%"}}>
            <Login />
          </div>
        </>
      );
    } else {
      return (
        <Container fluid>
          <Router>
            <Row>
              <Col md="2" >
                <VerticalMenuBar />
              </Col>
              <Col md="10" className="m-0">
              <Switch>
                  <Route exact path={["/dashboard", "/", "/planning_mis"]}>
                    <Banner username={user[0].username}/>
                  </Route>
                  <Route path="/submitForm">
                    <Submit />
                  </Route>
                  <Route path="/viewForms">
                    <View />
                  </Route>
              </Switch>
              </Col>
            </Row>
          </Router>
          
        </Container>
      );
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
