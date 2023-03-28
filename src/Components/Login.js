import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { GetUsersInfo } from "../Actions/UserAction";
import { getlogOutInfo } from "../Selectors/loginSelector";
import { useNavigate } from "react-router-dom";
import "./scss/login.scss";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [messagevisible, setMessage] = useState(false);
  const [loginclick, setloginSearch] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const apiResponse = useSelector(getlogOutInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = () => {
    dispatch(GetUsersInfo(userName, passWord));
    setloginSearch(true);
  };

  useEffect(() => {
    if (apiResponse === null || !apiResponse) {
      navigate("/loginUser");
    } else {
      navigate("/");
    }
    loginclick && setMessage(!apiResponse);
  }, [apiResponse]);

  const updateUserName = (e) => {
    const userName = e.target.value;
    setUserName(userName);
  };

  const updatePassword = (e) => {
    const password = e.target.value;
    setPassWord(password);
  };

  return (
    <div className="loginContainer">
      <div className="InputContainer">
        {userName && passWord && messagevisible && (
          <label> Enter valid user name or password</label>
        )}

        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          value={userName}
          onChange={updateUserName}
          className="usernameInput"
        />
        <Space direction="horizontal">
          <Input.Password
            prefix={<UnlockOutlined />}
            placeholder="Password"
            className="passwordInput"
            value={passWord}
            onChange={updatePassword}
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </Space>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button loginButton"
          onClick={onFinish}
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Login;
