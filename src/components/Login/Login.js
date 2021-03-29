import React from "react";
import { Input, Button, Card, FormGroup, Form } from "reactstrap";
import ErrorMessage from "../ErroMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import Logo from "../../assets/P-MIS_LOGO.png"
import { signIn} from "./actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  user: state.signIn.user,
  errorMsg: state.signIn.errorMsg,
  isLoaderHidden: state.signIn.isLoaderHidden,
  isLoading: state.signIn.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  onSignIn: (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(signIn(formData));
  }
})

const  Login = ({errorMsg, isLoading, isLoaderHidden, onSignIn, onInputChange}) => {
    return (
      <Card
        className="mx-auto py-5 px-4 shadow mt-md-5 my-5"
        style={{ maxWidth: "330px" }}
      >
        <div className="d-flex flex-column align-items-center">
          <img src={Logo} alt="" className="w-25" />
          <hr className="bg-warning w-100" />
          <h3 className="text-warning">Login</h3>
        </div>
        <hr />
        <Form
          onSubmit={onSignIn}
          method="POST"
        >
          <FormGroup>
            <Input
              name = "username"
              id="username"
              type="text"
              placeholder="Username"
              onKeyUp={onInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="password"
              id="password"
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
          <Button color="success" type="submit" className="mx-auto d-block">
            Login
          </Button>
        </Form>
      </Card>
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
