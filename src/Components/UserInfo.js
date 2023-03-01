import React, { useEffect, useState } from "react";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, message, Space, Anchor, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../Selectors/loginSelector";
import { setShowLogout } from "../Reducers/UserReducer";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const UserInfo = () => {
  const userInfo = useSelector(selectUser);
  const [login, setLogin] = useState(false);
  const [items, setMenuItems] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.hasOwnProperty("email")) {
      setLogin(true);
      const items = [
        {
          label: userInfo.email,
          key: "1",
          icon: <MdEmail />,
        },
        {
          label: "Log Out",
          key: "2",
          icon: <LogoutOutlined />,
        },
      ];

      setMenuItems(items);
    } else {
      setLogin(false);
    }
  }, [userInfo]);

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      message.info(`Current User is- ${userInfo.username}`);
    } else {
      message.success("Logged Out!!");
      dispatch(setShowLogout(false));
      navigate("/");
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      {!login && userInfo ? (
        <Space wrap className="loginpage">
          <Button type="primary" size={"large"} danger>
            <Anchor>
              <FaUserCircle size={"20px"} className="loginInfosvg" />
              <Link to="/loginUser" className="loginInfo">
                &nbsp; Login
              </Link>
            </Anchor>
          </Button>
        </Space>
      ) : (
        <Space wrap>
          <Dropdown.Button
            menu={menuProps}
            placement="bottom"
            icon={<UserOutlined />}
          >
            {`${userInfo.firstName} , ${userInfo.lastName}`}
          </Dropdown.Button>
        </Space>
      )}
    </>
  );
};
export default UserInfo;
