import { FC } from "react";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavContext } from "../../context/Navcontext";

const UserNav: FC = () => {
  const { selectedKey } = useNavContext();
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("sessUsername");
    sessionStorage.removeItem("sessRole");
    navigate("/login");
  };

  const sessUsername = sessionStorage.getItem("sessUsername");

  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]} className="flex justify-between">
      <div className="flex">
        <Menu.Item key="home">
          <Link to="/Home">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/About">About</Link>
        </Menu.Item>
        <Menu.Item key="cart">
          <Link to="/Cart">
            <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
          </Link>
        </Menu.Item>

      </div>
      <div className="ml-auto">
        {sessUsername ? (
          <>
            <Menu.Item key="logout" onClick={logout}>
              <a href="#">Logout</a>
            </Menu.Item>
          </>
        ) : (
          <Menu.Item key="login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
      </div>
    </Menu>
  );
};

export default UserNav;
