import React from 'react';
import { Card, Space } from 'antd';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css';

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
const { Meta } = Card;

function MainSimilarProduct() {
  const data = [
    {
      img: "https://webmerx.sgp1.cdn.digitaloceanspaces.com/vastraqueen/product_images/1584184849.Bollywood_Style_Hot_look_Party_Wear_Saree_(1).jpeg",
      title: 'Title 1',
    },
    {
      img: "https://webmerx.sgp1.cdn.digitaloceanspaces.com/vastraqueen/product_images/1584184849.Bollywood_Style_Hot_look_Party_Wear_Saree_(1).jpeg",
      title: 'Title 2',
    },
    {
      img: "https://webmerx.sgp1.cdn.digitaloceanspaces.com/vastraqueen/product_images/1584184849.Bollywood_Style_Hot_look_Party_Wear_Saree_(1).jpeg",
      title: 'Title 3',
    },
    {
      img: "https://webmerx.sgp1.cdn.digitaloceanspaces.com/vastraqueen/product_images/1584184849.Bollywood_Style_Hot_look_Party_Wear_Saree_(1).jpeg",
      title: 'Title 4',
    },
    {
      img: "https://webmerx.sgp1.cdn.digitaloceanspaces.com/vastraqueen/product_images/1584184849.Bollywood_Style_Hot_look_Party_Wear_Saree_(1).jpeg",
      title: 'Title 1',
    },
    {
      img: "https://webmerx.sgp1.cdn.digitaloceanspaces.com/vastraqueen/product_images/1584184849.Bollywood_Style_Hot_look_Party_Wear_Saree_(1).jpeg",
      title: 'Title 2',
    },
    {
      img: "https://webmerx.sgp1.cdn.digitaloceanspaces.com/vastraqueen/product_images/1584184849.Bollywood_Style_Hot_look_Party_Wear_Saree_(1).jpeg",
      title: 'Title 3',
    },
    {
      img: "https://webmerx.sgp1.cdn.digitaloceanspaces.com/vastraqueen/product_images/1584184849.Bollywood_Style_Hot_look_Party_Wear_Saree_(1).jpeg",
      title: 'Title 4',
    },
  ];


  return (<>

    <Card style={{ height: 350 }}>
      <Carousel autoPlay infinite={true} responsive={responsive}>
        {
          data.map((item) =>
            <div style={{ padding: 12 }}>
              <Card style={{ borderRadius: 8 }} hoverable cover={

                <img style={{ width: "100%", height: "85%", borderRadius: 8 }} className="product-Image"
                  src={item.img}
                  alt=" Not Found"

                />
              }>
                <Meta
                  title={item.title}
                  description={item.title || '-----------------------------------------------------'}
                />
              </Card></div>)
        }
      </Carousel>
    </Card>
    {/* <List>
      <Carousel autoPlay infinite={true} responsive={responsive}>
        {items.map((item) => (
          <div className="mainContainer">
            <div className="flex">
              <div className="box">
                <img className="ImgStyle" src={item.image} />
                <p>{item.title}</p>

                <p>{item.discription}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </List> */}
  </>);

}
export default MainSimilarProduct;