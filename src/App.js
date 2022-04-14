import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import MainAppHome from './views';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ width: "100%" }} className="mainLayout">
      <Content>
        <MainAppHome />
      </Content>
    </Layout>
  );
}

export default App;
