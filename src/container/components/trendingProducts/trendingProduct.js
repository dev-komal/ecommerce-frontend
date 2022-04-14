import { Component } from "react";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainTopCollections from "../allTitles/topCollections/topcollections";
import saree10 from "../../../assets/images/projectImg/topSelling/saree10.jpg";
import saree2 from "../../../assets/images/projectImg/topSelling/saree2.jpg";
import saree3 from "../../../assets/images/projectImg/topSelling/saree3.jpg";
import saree4 from "../../../assets/images/projectImg/topSelling/saree4.jpeg";
import saree5 from "../../../assets/images/projectImg/topSelling/saree5.jpg";
import saree6 from "../../../assets/images/projectImg/topSelling/saree6.png";
import saree7 from "../../../assets/images/projectImg/topSelling/saree7.jpg";
import saree8 from "../../../assets/images/projectImg/topSelling/saree8.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class MainTrendingProduct extends Component {
  state = {
    items: [
      {
        id: 1,
        image: saree10,
        title: "Best collection in banarasi ",
      },
      {
        id: 2,
        image: saree2,
        title: "Best collection in banarasi",
      },
      {
        id: 3,
        image: saree3,
        title: "Best collection in banarasi",
      },
      {
        id: 4,
        image: saree4,
        title: "Best collection in banarasi",
      },
      {
        id: 1,
        image: saree5,
        title: "Best collection in banarasi",
      },
      {
        id: 2,
        image: saree6,
        title: "Best collection in banarasi",
      },
      {
        id: 3,
        image: saree7,
        title: "Best collection in banarasi",
      },
      {
        id: 4,
        image: saree8,
        title: "Best collection in banarasi",
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <div className="Trending-title">
          <MainTopCollections />
        </div>

        <Carousel autoPlay infinite={true} responsive={responsive}>
          {items.map((item) => (
            <div key={item.id} className="mainContainer">
              <div className="flex">
                <div className="box">
                  <img className="ImgStyle" alt="not found" src={item.image} />
                  <p className="trendingTitle">{item.title}</p>
                  <p>{item.discription}</p>
                  {/* <Button shape="round" size="small" type="default" style={{ marginBottom: 8, color: 'White', backgroundColor: 'black' }} >Open</Button> */}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </>
    );
  }
}

export default MainTrendingProduct;
