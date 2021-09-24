// import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import isAuthenticated from './auth';
import { SideNav } from './components/layout/Sidebar';
import { NavBar } from './components/layout/NavBar'

const { Header, Sider, Content } = Layout;

export function PrivateRoute({ component: Component, ...rest }) {
  // const [collapse, setCollapse] = useState(false);
  
  // const handleToggle = (event) => {
  //   event.preventDefault();
  //   return collapse ? setCollapse(false) : setCollapse(true);
  // }

  // useEffect(() => {
  //   // eslint-disable-next-line no-unused-expressions
  //   window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  // }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Layout>
            <Header className="siteLayoutBackground pl-0" >
              <NavBar  />
            </Header>
            <Layout>
              <Sider 
                trigger={null} 
                collapsible 
                // collapsed={collapse}
              >
                <SideNav />
              </Sider>
              <Content className="content">
                <Component {...props} />
              </Content>
            </Layout>
          </Layout>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
