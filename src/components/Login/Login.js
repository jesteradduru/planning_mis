import React from "react";
import { Input, Button, Card, FormGroup, Form } from "reactstrap";
import ErrorMessage from "../ErroMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { signIn, onInputChange} from "./actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  user: state.signIn.user,
  username: state.signIn.username,
  password: state.signIn.password,
  errorMsg: state.signIn.errorMsg,
  isLoaderHidden: state.signIn.isLoaderHidden,
  isLoading: state.signIn.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(onInputChange(e)),
  onSignIn: (username, password) => dispatch(signIn(username, password))
})

const  Login = ({username, password, errorMsg, isLoading, isLoaderHidden, onSignIn, onInputChange}) => {
    return (
      <Card
        className="mx-auto py-5 px-4 shadow mt-md-5 my-5"
        style={{ maxWidth: "330px" }}
      >
        <h1 className="text-center text-primary">Login</h1>
        <h5 className="text-center text-primary">Planning Management Information System</h5>
        <hr />
        <Form
          onSubmit={(e) => { 
            e.preventDefault()
            onSignIn(username, password)
           }}
        >
          <FormGroup>
            <Input
              name = "username"
              type="text"
              placeholder="Username"
              onKeyUp={onInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onKeyUp={onInputChange}
            />
          </FormGroup>
          <FormGroup>
            {" "}
            <Loader
              isLoading={isLoading}
              text="Login Successful"
              hidden={isLoaderHidden}
            />
          </FormGroup>
          <ErrorMessage errMsg={errorMsg} />
          <Button color="primary" type="submit" className="mx-auto d-block">
            Login
          </Button>
        </Form>
      </Card>
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
