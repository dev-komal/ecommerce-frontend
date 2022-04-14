import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style.css";
import { connect } from "react-redux";
import { requestSlider } from "../actions/slider";
import get from "lodash/get";
import bannerProfile1 from "../../../../assets/images/projectImg/banner/bannerProfile1.jpeg";
import { Skeleton } from "antd";
const _ = { get };
class MainSlider extends Component {
  state = {
    items: [
      {
        id: 1,
        image: bannerProfile1,
        title: "15% discount",
        discription: "THIS IS COLLECTION ALL OF BRASO SAREES",
        type: "BRASO",
      },
    ],
  };

  componentDidMount() {
    this.props.onGetAllList();
  }

  render() {
    const data1 = Object.values(this.props.sliderData);
    return data1.length ? (
      <>
        <div className="parent-carousel">
          <Carousel className="marginCarausel" infiniteLoop={true} autoPlay={true} >
            {data1.map((banner) => (
              <div key={banner.id}>
                <img alt="not found" src={`${process.env.REACT_APP_ASSETS_END_POINT}banner/${banner.banner_image}`}
                />
                <p className="legend">{banner.banner_name}</p>

              </div>
            ))}
          </Carousel>
        </div>

      </>
    ) : (
      <Skeleton.Input style={{ width: "100vw", height: '50vh', marginBottom: 20 }} active />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sliderData: _.get(state, "slider.sliderData", []),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllList: (payload) => dispatch(requestSlider(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSlider);
