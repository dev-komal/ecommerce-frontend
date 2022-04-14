import { Button, Space } from "antd";
import { Component } from "react";
import "../style.css";

class MainMiddleBanner extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <div className="block worksBlock">
          <div className="titleHolder">
            <h2>OUR STORES</h2>
            Indian Silk House Agencies have 4 Showrooms across Kolkata –
            Brasso Avenue Banarasi (2010),
            New Market (2014). are OPEN Now.{" "}  All Safety taken according to the guidelines of
            Government.
            <p className="titleHolder">By Indian Artisans</p>
            <div className="BannerButton">
              <Space>
                <Button className="btnStyle">
                  SHOP THIS
                </Button>
                <Button className="btnStyle">
                  SHOP BANARASI
                </Button>
              </Space>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainMiddleBanner;
