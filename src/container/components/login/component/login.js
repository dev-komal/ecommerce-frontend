import React, { Component } from "react";
import { Form, Input, Button, Checkbox, message, Space } from "antd";
import "../style.css";
import { connect } from "react-redux";
import laxmitara from "../../../../assets/images/laxmitara.png";
import facebook from "../../../../assets/images/facebook.png";
import google from "../../../../assets/images/google.png";
import { get, isNil, isEmpty } from "lodash";
import "antd/dist/antd.css";
import { Redirect } from "react-router-dom";
import history from "../../../../core/utils/history";
import { Link } from "react-router-dom";
import { loginRequest } from "../actions/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const _ = { get, isNil, isEmpty };
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidUpdate() {
    const { errors, success } = this.props;

    if (!_.isEmpty(success)) {
      toast.success("Login Succeefully");
      history.push("/");
    }
  }

  signInUser = (e) => {
    const { errors, success } = this.props;

    e.preventDefault();
    const { email, password } = this.state;
    const { loginAction: callLogin } = this.props;
    callLogin({ email, password });
    if (!_.isEmpty(errors)) {
      toast.success("errors");
      history.push("/");
    }
  };

  render() {
    return (
      <>
        <div className="login-page">
          <div className="login-box">
            <ToastContainer />
            <Form name="login-form" initialValues={{ remember: true }}>
              <p>
                <Link to="/">
                  <center>
                    <img
                      style={{ alignContent: "center" }}
                      height="35"
                      width="130"
                      src={laxmitara}
                      alt="not found"
                    />
                  </center>
                </Link>
              </p>

              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  onChange={(e) => this.setState({ email: e.target.value })}
                  placeholder={"USERNAME"}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  onChange={(e) => this.setState({ password: e.target.value })}
                  placeholder={"PASSWORD"}
                />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox /> Remember me
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={(value) => this.signInUser(value)}
                >
                  LOGIN
                </Button>
              </Form.Item>
              <div>
                Have an account?<Link to="/register"> Sign Up</Link>
                <div style={{ textAlign: "center", padding: 30 }}>
                  <div style={{ float: "left" }}>
                    <a>
                      <img height="30" width="30" src={google} />
                    </a>{" "}
                  </div>
                  <b>Or</b>
                  <div style={{ float: "right" }}>
                    <a>
                      {" "}
                      <img height="30" width="30" src={facebook} />
                    </a>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: _.get(state, "login.errors", {}),
  success: _.get(state, "login.success", {}),
  status: _.get(state, "login.status", {}),
  token: _.get(state, "login.token", {}),
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (payload) => dispatch(loginRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
