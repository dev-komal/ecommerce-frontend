import { Component } from "react";
import { MenuOutlined, PhoneOutlined, LockOutlined } from "@ant-design/icons";
import { Drawer, Button, Input, Menu, Space } from "antd";
import "./header.css";
import laxmitara from "../../../assets/images/laxmitara.png";
import cart from "../../../assets/images/cart.png";
import user from "../../../assets/images/user3.png";
import login from "../../../assets/images/login.png";
import register from "../../../assets/images/register.png";
import { Link } from "react-router-dom";
import MainProfile from "../profile/profile";
import Navbar from "../../components/shoppingCart/components/Navbar/Navbar";

const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;
const { Search } = Input;

class Head extends Component {
  state = { visible: false, placement: "left" };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };
  render() {
    const { visible } = this.state;
    const islogin = localStorage.getItem("token");
    return (
      <>
        <div className="Header-container-fluid">
          <div className="header">
            <Link to="/">
              <img className="logoSize" alt="not found" src={laxmitara} />
            </Link>
            {/* <MainSearch className="mobileVisibleSerchBar" /> */}
            <div>
              <div className="mobileHidden">
                <Menu style={{ display: "flex" }}>
                  <SubMenu
                    style={{ color: "black" }}
                    key="Latest"
                    title={
                      <Link to="/products">
                        <Button
                          type="text"
                          className="menuFont"
                          style={{ fontWeight: "bold" }}
                        >
                          All Products
                        </Button>
                      </Link>
                    }
                  ></SubMenu>

                  <SubMenu
                    key="cart"
                    title={
                      <div>
                        {/* <Link to="/cart"> */}
                        <Navbar />
                        {/* </Link> */}
                      </div>
                    }
                  ></SubMenu>
                  <div className="profile-Margin">
                    {islogin ? (
                      <MainProfile />
                    ) : (
                      <>
                        <Link to="/register">
                          <Button className="registerBtn">Register</Button>
                        </Link>
                        <Link to="/login">
                          <Button className="loginBtn">Login</Button>
                        </Link>
                      </>
                    )}
                  </div>
                  {/* </div> */}
                </Menu>
              </div>
            </div>
            <div className="mobileVisible">
              <div className="drawerBtn">
                <Button className="" type="primary" onClick={this.showDrawer}>
                  <MenuOutlined />
                </Button>
              </div>
              <Drawer
                placement="right"
                closable={true}
                onClose={this.onClose}
                visible={visible}
              >
                <Menu mode="vertical" style={{ fontWeight: 700 }}>
                  <div className="drawerlogo">
                    <img
                      className="logoSizeDrawer"
                      alt="not found"
                      src={laxmitara}
                    />
                  </div>
                  <Link to="/register">
                    <SubMenu
                      key="account"
                      title={
                        <span style={{ color: "black" }}>
                          {islogin ? (
                            <>
                              <Link to="/register">Profile</Link>
                            </>
                          ) : (
                            <>
                              <img
                                height="18"
                                width="23"
                                alt="not found"
                                src={register}
                              />
                              Register
                            </>
                          )}
                        </span>
                      }
                    />
                  </Link>
                  <SubMenu
                    key="sub1"
                    title={
                      <Link to="/product">
                        <span style={{ color: "black" }}>Material</span>
                      </Link>
                    }
                  ></SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <Link to="/product">
                        <span style={{ color: "black" }}>Latest</span>
                      </Link>
                    }
                  ></SubMenu>
                  <SubMenu
                    key="cart"
                    title={
                      <span>
                        <Link to="/cart">
                          <Space style={{ color: "black" }}>
                            {/* <img height="18" width="18" alt="not found" src={cart} /> */}
                            Your Cart
                          </Space>
                        </Link>
                      </span>
                    }
                  ></SubMenu>
                </Menu>
                <div style={{ color: "white", backgroundColor: "#dd5e76" }}>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      padding: 5,
                      fontFamily: "revert",
                    }}
                  >
                    <PhoneOutlined />
                    Need help? : 8780767057
                  </p>
                </div>
                <Menu>
                  <div style={{ textAlign: "center" }}>
                    {" "}
                    <Link to="/login">
                      {" "}
                      <Button
                        style={{
                          backgroundColor: "#dd5e76",
                          color: "white",
                          marginBottom: 10,
                          fontWeight: 700,
                        }}
                      >
                        <LockOutlined />
                        Login
                      </Button>
                    </Link>
                  </div>
                  <br />
                </Menu>
              </Drawer>
            </div>
          </div>
        </div>
        <Search
          className="mobileVisibleSerchBarBottom"
          placeholder="Search...."
          style={{ width: "101%", color: "red", border: "red" }}
        />
      </>
    );
  }
}
export default Head;
