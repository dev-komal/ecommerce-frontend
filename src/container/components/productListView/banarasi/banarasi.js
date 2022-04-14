import { Component } from "react";
import "./style.css";
import { List, Card, Tag, Button, Image, Space, Skeleton } from "antd";
import FilterDrawer from "./filterDrawer";
import { requestList } from "../../list/actions/list";
import { connect } from "react-redux";
import ShowMoreText from "react-show-more-text";

const { Meta } = Card;
class MainBanarasi extends Component {
  state = { visible: false, placement: "left" };

  componentDidMount() {
    this.props.onGetAllList();
    console.log(
      "mnessage from product page component",
      this.props.onGetAllList()
    );
  }

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

  render() {
    const data = Object.values(this.props.listData);
    return (
      <>
        <div className="filterBG" style={{ marginTop: 15 }}>
          <p>29,914 Items Found</p>
        </div>
        <div className="mainDiv">
          <div className="alert-info">
            <FilterDrawer />
            <Button className="buttonHeader">
              <Space>
                <span style={{ fontWeight: 900, color: "#d63956" }}>
                  {data.length}
                </span>
                <span style={{ fontWeight: 600, color: "#d63956" }}>
                  Items found !
                </span>
              </Space>
            </Button>
          </div>

          <div className="listHeader"></div>
          <Tag>{/* <Link to="/login">hello</Link> */}</Tag>
          <div className="containerDiv">
            <List
              pagination={{
                onChange: (page) => {},
                pageSize: 16,
              }}
              grid={{
                gutter: 10,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 5,
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item align="middle">
                  <Card
                    hoverable
                    cover={
                      <Image
                        preview={false}
                        width={230}
                        height={250}
                        src={
                          `${process.env.REACT_APP_ASSETS_END_POINT}/products/${item.product_image}` || (
                            <Skeleton active />
                          )
                        }
                      />
                    }
                  >
                    <Meta
                      title={item.title}
                      description={
                        <>
                          <ShowMoreText
                            expanded={false}
                            more="Show more"
                            width={410}
                            less="Show less"
                            lines={1}
                          >
                            {item.description}
                          </ShowMoreText>
                        </>
                      }
                    />
                    <div style={{ fontWeight: 900, color: "green" }}>
                      <>₹{item.price}/- Only</>
                    </div>
                    <Button className="button-style" type="primary">
                      Add To Cart
                    </Button>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listData: _.get(state, "list.listData", []),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllList: (payload) => dispatch(requestList(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBanarasi);
