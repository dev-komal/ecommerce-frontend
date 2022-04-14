import { Component } from 'react';
import { Drawer, Button, Space } from 'antd';
import filter from '../../../../assets/images/filter1.png';



class FilterDrawer extends Component {
  state = { visible: false, placement: 'left' };

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

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };
  render() {
    const { placement, visible } = this.state;
    return (<>

      <Button onClick={this.showDrawer} style={{ float: 'left', marginLeft: 18, marginTop: 3 }} >
        <Space><img height="25" width="25" alt="not founds" src={filter} />Filter</Space>
      </Button>

      <Drawer style={{ width: 180 }}
        title={<b><img height="25" width="25" alt="not founds" src={filter} /> Filter menu</b>}
        placement={placement}
        closable={true}
        onClose={this.onClose}
        visible={visible}
      >
        <p>banarasi</p>
        <p>silk</p>
        <p>chanderi</p>
      </Drawer>
    </>);
  }
}
export default FilterDrawer;