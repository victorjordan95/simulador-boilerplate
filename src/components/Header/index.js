import { Menu } from 'antd';
import React, { useState } from 'react';

const { SubMenu } = Menu;

export function Header() {
  const [current, setcurrent] = useState('mail');

  const handleClick = (e) => {
    setcurrent(e.key);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail">Navigation One</Menu.Item>
      <Menu.Item key="app" disabled>
        Navigation Two
      </Menu.Item>
      <SubMenu key="SubMenu" title="Navigation Three - Submenu">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
  );
}
