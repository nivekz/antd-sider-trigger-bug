import React from 'react';
import { Icon, Layout, List, Menu } from 'antd';
import './App.css';

const { Content, Footer, Sider } = Layout;

const data = [
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
]

function App() {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
        <Content style={{ margin: '24px 16px 0' }}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            // pagination={pagination}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={item}
                  description={item}
                />
              </List.Item>
            )}
          />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
