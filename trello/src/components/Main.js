import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Main = () => {
  const { loginWithRedirect } = useAuth0()
  const { user, isAuthenticated } = useAuth0();

    return (
    <Container>
      <BigText onClick={() => loginWithRedirect()}>Log in to Trello</BigText>
        <p><SecText onClick={() => loginWithRedirect()}>or create an account</SecText></p>
         <Btn onClick={() => loginWithRedirect()}><Image src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg" alt="google-logo"></Image>Log in with google</Btn>
           <ThirText onClick={() => loginWithRedirect()}>Log in with email and password</ThirText>
    </Container>
    )
}

export default Main;

const Container = styled.div`
 background: linear-gradient(#0079bf,#0079bf
, #3c4fa0);
text-align: center;
height: 50vh;
width: 100vw;
margin-top: 2rem;
 `

const BigText = styled.h1`
 padding-top: 3rem;
 height: 3vh;
 font-size: 2.2rem;
 color: white;
 text-decoration: none;
`
const SecText = styled.a`
 display: inline-block;
 height: 2vh;
 padding: 1rem 2rem;
 font-size: 1.2rem;
 font-weight: 550;
 color: white;
 text-decoration: none;
 margin-top: 1rem;
`

const ThirText = styled.a`
 display: inline-block;
 padding-top: 2rem;
 width: 100vw;
 font-size: 1.2rem;
 color: white;
 text-decoration: none;
`

const Btn = styled.a`
  display: inline-block;
  width: 140px;
  text-align: center;
  background: white;
  border-radius: 2.2px;
  font-size: 15px;
  padding: 0.6rem;
  font-weight: 550;
  color: #4d4d4d;
  text-decoration: none;
  
  :hover {
    box-shadow: 1px 1.5px 1px #4a4a4a;
    opacity: 0.96;  }
`
const Image = styled.img`
  position: relative;
  right: 5px;
  top: 3px;
`