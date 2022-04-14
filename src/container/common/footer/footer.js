import React, { Component } from "react";
import "./footer.css";
import { List } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";

class Foot extends Component {
  render() {
    return (
      <>

        <List>
          <footer className="Allfonts">
            <section className="ft-main">
              <div className="ft-main-item">
                <h2 className="ft-title">About</h2>
                <ul>
                  <li>Services</li>
                  <li>Gallery</li>
                  <li>Feedback</li>
                  <li>Customers</li>
                </ul>
              </div>
              <div className="ft-main-item ">
                <h2 className="ft-title">Customer Services</h2>
                <ul>
                  <li>Contact Details</li>
                  <li>Return Policy</li>
                  <li>Shipping & Tax</li>

                  <li>Wholesale</li>
                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">Contact Us</h2>
                <ul>
                  <li>Mobile: +91-8048371532</li>
                  <li>
                    Address:-Shop No-358 Millennium Textile Market-2, <br />
                    Ring Road, Surat-395002, Gujarat.
                  </li>
                  <li>LAXMITARA FASHION</li>
                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">Stay Updated</h2>
                <li>Subscribe to get our latest collection.</li>
                <form>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    required
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="subscribeBtn"
                  />
                </form>
              </div>
            </section>

            <section className="ft-social">

              <ul className="ft-social-list">


                <li>
                  <a href="https://www.facebook.com/login/web/">
                    <FacebookOutlined style={{ fontSize: 30 }} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/LOGIN">
                    <TwitterOutlined />
                  </a>
                </li>
                <li>
                  <a href="instagram.com">
                    <InstagramOutlined />
                  </a>
                </li>

                <li>
                  <a href="https://in.linkedin.com/">
                    <LinkedinFilled />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">
                    <YoutubeFilled />
                  </a>
                </li>

              </ul>
              <p className="Copy-Right-align">
                Copyright © 2021 LAXMITARA FASHION Terms &amp; Conditions
              </p>
            </section>
            {/* <section className="ft-legal">
                        <ul className="ft-legal-list">
                            <li><a href="#"><li class="visa"></li></a></li>
                            <li>Copyright © 2021 Laxmitara Fashion<br/>Terms & Conditions</li>
                        </ul>
                    </section> */}
          </footer>{" "}
        </List>
      </>
    );
  }
}

export default Foot;
