import { Component } from "react";
import { Typography } from "antd";
import "./style.css";
const { Title } = Typography;

class BestSallerTitle extends Component {
  render() {
    return (
      <>
        <div className="margin">
          <Title>TOP COLLECTIONS</Title>
        </div>
      </>
    );
  }
}
export default BestSallerTitle;
