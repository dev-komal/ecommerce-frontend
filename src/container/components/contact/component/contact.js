import React, { Component } from "react";
import "../style.css";
import { Form, Input, Button, Checkbox, Result, message } from "antd";
import { connect } from "react-redux";
import { requestContact, addContact } from "../actions/contact";
import get from "lodash/get";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import remove from "lodash/remove";
import isUndefined from "lodash/isUndefined";

const _ = { get, remove, isEmpty, isUndefined, find };
const { TextArea } = Input;
const key = 'updatable';
class MainContact extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      message: "",
    };
  }
  componentDidMount() {
    this.props.onGetAllContact();
  }
  success = () => {
    message.success('Message Sent Sucessfully');
  };

  error = () => {
    message.error('please fill data');
  };
  reset = () => {
    this.formRef.current.resetFields();
  }
  handleSubmit = (e) => {
    const { fullname, email, message } = this.state;
    if (
      fullname === "" || email === "" || message === ""
    ) {

    } else {

      e.preventDefault()
      const addData = {
        fullname: this.state.fullname,
        email: this.state.email,
        message: this.state.message,
      }
      this.props.onAddAllContact(addData);
      this.success()
      this.reset()
    }
  }
  render() {
    return (
      <>
        <div id="contact" className="contactBlock">
          <div className="container-fluid">
            <div className="contactTitleHolder">
              <div className="contactTilte" >
                Contact Us
              </div>
              <p className="titleMore">For More Enquiry</p>
            </div>
            <Form
              ref={this.formRef}
              id="myForm"
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Full Name..!",
                  },
                ]}
              >
                <Input
                  value={this.state.fullname}
                  onChange={(e) => this.setState({ fullname: e.target.value })}
                  placeholder="Full Name"
                  required
                  ref="fieldName"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },

                ]}
              >
                <Input
                  onChange={(e) => this.setState({ email: e.target.value })}
                  placeholder="Enter Email Address"
                  required
                  ref="fieldEmail"
                />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your message..!",
                  },
                ]}
              >
                <TextArea
                  onChange={(e) => this.setState({ message: e.target.value })}
                  placeholder="message"
                  required
                  ref="fieldMessage"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  noStyle
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject("Should accept agreement"),
                    },
                  ]}
                >
                  <Checkbox /> I agree with terms and conditions.
                </Form.Item>
              </Form.Item>
              <Form.Item>
                <div className="contactBtn">
                  <Button
                    style={{ backgroundColor: "#f83656" }}
                    onClick={(e) => this.handleSubmit(e)}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Submit
                  </Button>
                </div>
              </Form.Item>
              {this.error}
            </Form>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contactData: _.get(state, "contact.contactData", []),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllContact: (payload) => dispatch(requestContact(payload)),
    onAddAllContact: (payload) => dispatch(addContact(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContact);
