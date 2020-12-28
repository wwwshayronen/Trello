import React from "react";
import styled from "styled-components";

const SecondMain = () => {
  return (
    <Container>
      <Header>
        Trello lets you work more collaboratively and get more done.
      </Header>
      <Paragragh>
        Trello’s boards, lists, and cards enable you to organize and prioritize
        your projects in a fun, flexible, and rewarding way.
      </Paragragh>
      <Image src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"></Image>
      <Button style={{marginTop: "2rem"}}>Sign Up - Its Free!</Button>
    </Container>
  );
};

export default SecondMain;

const Container = styled.div`
  /* position: static; */
  text-align: center;
  background: #0079bf;
  height: 80vh;
  color: white;
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  padding: 1rem;
`;

const Header = styled.h1`
  display: block;
  font-size: 1.7rem;
  margin-bottom: 0.5rem;

  @media (min-width: 993px) {
    position: relative;
    font-size: 2.5rem;
    top: 0px;
    left: 10%;
    width: 35%;
    line-height: 1.2;
  }
`;

const Paragragh = styled.p`
  display: block;
  font-size: 19px;
  font-family: "Charlie Text", sans-serif;
  letter-spacing: 1.3px;

  @media (min-width: 993px) {
    position: relative;
    font-size: 1.2rem;
    top: 0px;
    left: 10%;
    width: 35%;
    line-height: 1.2;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding-bottom: 1rem;
  text-align: center;
  background: #61bd4f;
  border-style: none;
  cursor: pointer;
  color: white;
  border-radius: 3.4px;
  padding: 10px 24px;
  font-size: 20px;
  letter-spacing: 1.3px;

  :hover {
    background: #4b9e3b;
  }

  @media (min-width: 993px) {
    position: relative;
    font-size: 1rem;
    top: 0;
    left: 0;
  }
`;
const Image = styled.img`
  display: block;
  float: right;
  padding-right: 0.5rem;
  width: 90%;

  @media (min-width: 993px) {
    position: relative;
    bottom: 280px;
    right: 5%;
    max-width: 45%;
  }
`;
