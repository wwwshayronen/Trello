import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Nav = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Header>
      <Router>
        <a href="/index.html">
          <Image
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/trello-header-logos/af7af6ed478d3460709d715d9b3f74a4/trello-logo-white.svg"
            alt="home_logo"
            width="130"
            height="60"
          ></Image>
        </a>
        <SignUp onClick={() => loginWithRedirect()}>
          Sign Up
        </SignUp>
        <LogIn onClick={() => loginWithRedirect()}>
          <Link
            onClick={() => loginWithRedirect()}
            style={{
              color: "white",
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Log In
          </Link>
        </LogIn>
      </Router>
    </Header>
  );
};

export default Nav;

const Header = styled.nav`
  background: #0079bf;
  padding-top: 0.2rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
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
  top: 15px;
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
