import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
import { useHistory }  from 'react-router-dom';

export function SideNav() {
  const history = useHistory();
  
  const handleProfileClick = () => {
    history.push('/registerPassword');
  }
  
  const handleHomeClick = () => {
    history.push('/dashboard');
  }
  
  const handleFileClick = () => {
    history.push('/other');
  }
  return (
    <Menu theme="dark" mode="inline" selectedKeys={[history.location.pathname]}>
      <Menu.Item key="/registerPassword" onClick={handleProfileClick}>
        <UserOutlined />
        <span> Register Password</span>
      </Menu.Item>
      <Menu.Item key="/dashboard" onClick={handleHomeClick}>
        <VideoCameraOutlined />
        <span> Dashboard</span>
      </Menu.Item>
      <Menu.Item key="/" onClick={handleFileClick}>
        <UploadOutlined />
        <span> Other</span>
      </Menu.Item>
    </Menu>
  );
}
