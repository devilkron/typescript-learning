import {FC} from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const UserNav: FC = () => {
  return (
    <Menu theme="dark" mode="horizontal">
     
      <Menu.Item key="home">
        <Link to="/Home">Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/About">About</Link>
      </Menu.Item>
    </Menu>
  );
};

export default UserNav;
