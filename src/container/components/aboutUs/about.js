import { Component } from "react";
import "./about.css";
import img from "../../../assets/images/whatsappme.jpg";
class MainAbout extends Component {
  render() {
    return (
      <>
        <div className="containerA">
          <img src={img} alt="not found" />
        </div>
      </>
    );
  }
}

export default MainAbout;
