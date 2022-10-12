import React from 'react';
import './App.css';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


function App() {
  return (
    <>
      <Layout>
        <Header>Subject Watch</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;