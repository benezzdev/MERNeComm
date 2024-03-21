import React, { useContext, useState } from "react";
import {
  HeartOutlined,
  HomeOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu as AntdMenu } from "antd";
import { Link } from "react-router-dom";

const AuthenticatedMenu = () => {
  const [current, setCurrent] = useState("home");

  const authenticatedItems: MenuProps["items"] = [
    {
      label: <Link to="/">Deals</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="favorites">Favorites</Link>,
      key: "favorites",
      icon: <HeartOutlined />,
    },
    {
      label: <Link to="account">Account</Link>,
      key: "account",
      icon: <UserOutlined />,
    },

    {
      label: <Link to="signin">SignIn</Link>,
      key: "signin",
      icon: <UserOutlined />,
    },
    {
      label: <Link to="signup">SignUp</Link>,
      key: "signUp",
      icon: <UserOutlined />,
    },
    {
      label: <Link to="about">About </Link>,
      key: "about",
      icon: <ReadOutlined />,
    },
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <AntdMenu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={authenticatedItems}
    />
  );
};
export const Menu = () => {
  return <AuthenticatedMenu />;
};
