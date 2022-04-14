import React, { Component } from "react";
import { List, Card, Skeleton } from "antd";
import "../style.css";
import { connect } from "react-redux";
import { Button } from "antd";
import CollectionTypesTilte from "../../allTitles/collectionTypeTitle/collectionTypeTitle";
import { Link } from "react-router-dom";
import _ from "lodash";
import { requestCollectionType } from "../../CollectionType/actions/collectionType";

class MainCollectionTypes extends Component {
  componentDidMount() {
    this.props.onGetAllList();
  }

  render() {
    const data1 = Object.values(this.props.collectionTypeData);
    return data1.length ? (
      <>
        <CollectionTypesTilte />
        <div className="mainDivCollection">
          <List
            pagination={{ pageSize: 4 }}
            grid={{
              gutter: 10,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 3,
              xl: 4,
              xxl: 4,
            }}
            dataSource={data1}
            renderItem={(item) => (
              <Link to="/">
                <List.Item>
                  <Card className="type-ant-card-body">
                    <div className="single-team">
                      <div className="team-img">
                        <img
                          src={`${process.env.REACT_APP_ASSETS_END_POINT}/categories/${item.category_image}`}
                          alt="not found"
                          className=""
                        />
                      </div>
                      <div className="team-content">
                        <div className="team-info">
                          <h3>
                            <Button className="type-text" shape="round">
                              {item.category_name}
                            </Button>
                          </h3>
                        </div>
                        <p className="team-text">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </List.Item>
              </Link>
            )}
          />
        </div>
        ,
      </>
    ) : (
      <div style={{ display: "flex", width: '100vw', height: '15vh' }}>
        <Skeleton.Input style={{ width: "100vw", height: '45vh', marginBottom: 20 }} active />
        <Skeleton.Input style={{ width: "100vw", height: '45vh', marginBottom: 20 }} active />
        <Skeleton.Input style={{ width: "100vw", height: '45vh', marginBottom: 20 }} active />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    collectionTypeData: _.get(state, "collectionType.collectionTypeData", []),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllList: (payload) => dispatch(requestCollectionType(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainCollectionTypes);
