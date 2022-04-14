import React from "react";
import { Button, Popover, Avatar, Upload, Space, Image } from "antd";
import "./style.css";
import MainOrderHistory from "../../components/orderHistory/orderHistory";
import {
  SettingOutlined,
  OrderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { getTokenUser } from "../../../core/utils/appUser";
import historyToken from "../../../core/utils/history";
import defaultUser from "../../../assets/images/defaultUser.jpg";

// url = "https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg"
const MainProfile = () => {
  const removeItem = () => {
    localStorage.removeItem("token");
    historyToken.push("/");
    window.location.reload();
  };
  const user = getTokenUser();
  const profile = `${process.env.REACT_APP_ASSETS_END_POINT}users/${user.profile_image} `;
  const content = (
    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ padding: 8, marginTop: -5 }}>
          {/* <img className="profileImg" src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" /> */}
        </div>
        <div>
          <Image width={55} height={60} src={profile || user3} />
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          {user.email}
        </div>
        {/* <p><Space><SettingOutlined /> Account</Space></p> */}
        <div style={{ display: "flex", marginTop: 5 }}>
          <p style={{ display: "flex" }}>
            <MainOrderHistory />{" "}
          </p>
          <Button onClick={removeItem} type="text" style={{ color: "red" }}>
            {" "}
            <LogoutOutlined /> Logout
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Popover trigger="click" content={content} placement="bottomRight">
        <Button style={{ fontSize: "2vh" }} type="text">
          <Avatar src={profile ? profile : defaultUser} />
          <b style={{ fontSize: 13 }}>
            {user.first_name} {""} {user.last_name}
          </b>
        </Button>
      </Popover>
    </>
  );
};
export default MainProfile;
