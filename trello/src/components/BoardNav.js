import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";

import Squares from "../images/Squares";
import BoardIcon from "../images/BoardIcon";
import Plus from "../images/Plus";
import Bell from "../images/Bell";

const Nav = ({ background }) => {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();
  // const { backgroundColor, setBackgroundColor } = useState()

  const menu = (
    <Menu>
      <Menu.Item style={{ textAlign: "center" }} key="0">
        Account
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <div style={{ display: "flex" }}>
          <img
            src={user.picture}
            alt={user.name}
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              marginRight: "3px",
            }}
          ></img>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#172b4d", fontSize: "1rem" }}>
              {user.nickname || "nickname"}
            </div>
            <span style={{ color: "#b3bac5" }}>{user.email || "email"}</span>
          </div>
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <a onClick={() => logout()}>Log Out</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        background: `${background || "#0079bf"}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container
        style={{
          background: `${background || "#0079bf"}`,

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box>
          <Squares style={{ fontSize: "1.5rem", color: "white" }} />
        </Box>{" "}
        <Box>
          <BoardIcon style={{ fontSize: "1.5rem", color: "white" }} />
        </Box>
        <Box>
          <SearchOutlined style={{ fontSize: "1.5rem", color: "white" }} />
        </Box>{" "}
        <Logo>
          <Image
            height="32px"
            src="https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png"
          />
        </Logo>
        <Box>
          <Plus style={{ fontSize: "1.5rem", color: "white" }} />
        </Box>{" "}
        <Box>
          <Bell style={{ fontSize: "1.5rem", color: "white" }} />
        </Box>{" "}
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <img
              src={user.picture}
              alt={user.name}
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            ></img>
          </a>
        </Dropdown>
      </Container>
    </Header>
  );
};

export default Nav;

const Header = styled.nav`
  /* background: #0079bf; */
  z-index: 1;
  width: 100%;
`;
const Image = styled.img`
  position: relative;
  float: left;
  right: 0;
  left: 14px;
  width: 105px;
`;

const LogIn = styled.a`
  position: relative;
  top: 5px;
  display: block;
  padding: 0.25rem 0.5rem;
  font-size: 1.09375rem;
  border-radius: 0.2rem;
  font-weight: 400;
  white-space: nowrap;
  float: right;
  color: white;
  font-family: "Charlie Text", sans-serif;
  text-decoration: none;
`;

const SignUp = styled.a`
  position: relative;
  top: 15px;
  display: block;
  float: right;
  padding: 0.35rem 0.55rem;
  margin-right: 1rem;
  border-radius: 3.2px;
  background: white;
  color: #0079bf;
  font-weight: 550;
  font-family: "Charlie Text", sans-serif;
  font-size: 16px;
  text-align: center;
  border-style: none;
  box-shadow: rgba(0, 121, 195, 0.25) 0px 0px 0px 3.2px;
  text-decoration: none;
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  /* max-height: 40px; */
  overflow: hidden;
  padding: 4px;
  display: flex;
`;

const Box = styled.div`
  background-color: hsla(0, 0%, 100%, 0.3);
  border-radius: 5px;
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  margin-right: 0.2rem;
  cursor: pointer;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  opacity: 0.6;
`;
