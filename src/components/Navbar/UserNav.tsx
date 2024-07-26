import {FC} from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavContext } from '../../context/Navcontext';
const UserNav: FC = () => {
  const { selectedKey } = useNavContext();
  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>
     
      <Menu.Item key="home">
        <Link to="/Home">Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/About">About</Link>
      </Menu.Item>
      <Menu.Item key="Cart">
        <Link to="/Cart"><FontAwesomeIcon icon={faCartShopping} className="mr-2" /></Link>
      </Menu.Item>
    </Menu>
  );
};

export default UserNav;
