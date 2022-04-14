import { Component } from 'react';
import Head from './header';
import { Layout } from 'antd';

const { Header } = Layout;
class MainHeader extends Component {
    render() {
        return (<>
            <Header><Head /></Header>
        </>);
    }
}
export default MainHeader;