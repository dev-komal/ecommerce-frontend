import { Component } from 'react';
import Foot from './footer';
import { Layout } from 'antd';


const { Footer } = Layout;


class MainFooter extends Component {
    render() {
        return (<>
            <Footer><Foot /></Footer>
        </>);
    }
}
export default MainFooter;