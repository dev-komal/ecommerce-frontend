import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Space } from "antd";
import "../style.css";
import laxmitara from "../../../../assets/images/laxmitara.png";
import { connect } from "react-redux";
import { addRegister } from "../actions/register";
import get from "lodash/get";
import { Link } from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";
import history from "../../../../utills/history";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const _ = { get };
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      mobile: "",
      password: "",
      confirm_password: "",
    };
  }
  resetfield = () => {
    document.getElementsByName("login-form").reset();
  };

  addUser = async (e) => {
    const { first_name, last_name, email, phone, password } = this.state;
    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      phone === "" ||
      password === ""
      // confirm_password === ""
    ) {
      alert("please  fill all the fields");
    } else {
      e.preventDefault();
      const addUserData = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        password: this.state.password,
        //confirm_password: this.state.confirm_password,
      };
      this.props.onAddAllUser(addUserData);
    }
  };

  componentDidUpdate(prevProps) {
    const { updateStatus, errors } = this.props;
    if (updateStatus !== prevProps.updateStatus) {
      if (updateStatus === true) {
        history.push("/");
        // window.location.reload();
        toast.success("Register Succeefully");
      } else if (!_.isEmpty(error)) {
        toast.error("Error");
      }
    }
  }
  render() {
    return (
      <>
        <div className="login-page">
          <div className="box-margin">
            <div className="login-box">
              <ToastContainer />
              <Form name="login-form">
                <center>
                  <p className="">
                    <Link to="/">
                      <img
                        height="35"
                        width="160"
                        alt=" not found"
                        src={laxmitara}
                      />
                    </Link>
                  </p>
                </center>
                <Form.Item
                  name="first_name"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Your Full Name..!",
                    },
                  ]}
                >
                  <Input
                    className="input-field"
                    onChange={(e) =>
                      this.setState({ first_name: e.target.value })
                    }
                    placeholder="FIRST NAME"
                  />
                </Form.Item>
                <Form.Item
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Your Full Name..!",
                    },
                  ]}
                >
                  <Input
                    className="input-field"
                    onChange={(e) =>
                      this.setState({ last_name: e.target.value })
                    }
                    placeholder="LAST NAME"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input
                    className="input-field"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    placeholder="ENTER EMAIL"
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone no!",
                    },
                  ]}
                >
                  <Input
                    className="input-field"
                    onChange={(e) => this.setState({ phone: e.target.value })}
                    placeholder="ENTER MOBILE"
                  />
                </Form.Item>
                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Your Address..!",
                    },
                  ]}
                >
                  <TextArea
                    className="input-field"
                    onChange={(e) => this.setState({ address: e.target.value })}
                    placeholder="Address"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    className="input-field"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    placeholder="PASSWORD"
                  />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                  <Space>
                    <Checkbox />I agree to the receive news letters from
                    laxmitara
                  </Space>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    onClick={(e) => this.addUser(e)}
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Sign Up
                  </Button>
                  <p className="AlreadyAccount">
                    Already have Account ?<Link to="/login"> Login</Link>
                  </p>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    registerData: _.get(state, "register.registerData", []),
    updateStatus: _.get(state, "register.updateStatus", false),
    registerFails: _.get(state, "register.registerFails", false),
    errors: _.get(state, "register.errors", {}),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddAllUser: (payload) => dispatch(addRegister(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
