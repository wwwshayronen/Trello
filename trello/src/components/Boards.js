import React, { useState, useEffect } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import styled from "styled-components";
import BoardNav from "./BoardNav";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading3QuartersOutlined, LoadingOutlined } from "@ant-design/icons";
import { Modal, Input } from "antd";
import "./modal.css";
import Board from "./Board";
import PostBoard from "../handlers/PostBoard";

// const openSearchBar = () => {};

const Boards = () => {
  const [savedBoards, setSavedBoards] = useState([]);
  const [boardTitle, setBoardTitle] = useState("");
  const [boardBackGround, setBoardBackGround] = useState("rgb(210, 144, 52)");
  const [visible, setVisible] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [redirectToBoard, setRedirectToBoard] = useState(false);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/boards/${user.sub}`);
        const json = await res.json();
        console.log(json);
        setSavedBoards(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBoards();
  }, [user]);
  console.log("saved boards:", savedBoards);

  if (redirectToBoard) {
    console.log("redirectBoard is true");
    return (
      <>
        <PostBoard
          background={boardBackGround}
          name={boardTitle}
          userID={user.sub}
        />
        <Redirect
          to={{
            pathname: `/board/${boardTitle}`,
            state: { background: boardBackGround, title: boardTitle },
          }}
        />
      </>
    );
  }

  console.log(user);
  if (isAuthenticated) {
    return (
      <div>
        <BoardNav />
        {/* <Search type="text" id="sd"></Search>
            <SearchOutlined />
            <div> shay thee</div>
            <a href="/boards"><Image src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/trello-header-logos/af7af6ed478d3460709d715d9b3f74a4/trello-logo-white.svg" alt="home_logo" width="130" height="60"></Image></a> */}
        <Headers>🕔 Recently Viewed</Headers>
        <Recently>
          <Item>
            <Link to="/board">Board 1</Link>
          </Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          {/* TODO: FUNCTION for adding new board */}
        </Recently>
        <Headers>👤 Personal Boards</Headers>

        <Recently>
          {savedBoards.map((board) => {
            return (
              <>
                {" "}
                <Item key={board._id}>
                  {" "}
                  <Link
                    to={{
                      pathname: `/board/${board.name}`,
                      state: { background: board.background, title: board.name, date: board.boardData },
                    }}
                  >
                    {board.name}
                  </Link>
                </Item>
              </>
            );
          })}
          <button
            style={{
              backgroundColor: "rgba(9,30,66,.06)",
              borderRadius: "2px",
              boxShadow: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              marginTop: "1rem",
              width: "189",
              height: "80px",
              padding: "5%",
            }}
            onClick={() => setVisible(true)}
          >
            <span style={{ color: "#172b4d" }}>Create new board</span>
          </button>
          <Modal
            title={
              <header
                style={{
                  width: "100%",
                  background: boardBackGround,
                  padding: "3%",
                  backgroundPosition: "50%",
                }}
              >
                <ModalInput
                  style={{
                    color: "white",
                    border: "none",
                    boxShadow: "none",
                    background: "transparent !important",
                    boxSizing: "border-box",
                  }}
                  value={boardTitle}
                  onChange={(e) => setBoardTitle(e.target.value)}
                  placeholder="Add board title"
                />
                <div style={{ color: "white", marginTop: "0.1rem" }}>
                  {user.nickname}
                </div>
                <div style={{ color: "white" }}>{user.email}</div>
              </header>
            }
            centered
            visible={visible}
            onOk={() => setRedirectToBoard(true)}
            onCancel={() => setVisible(false)}
            width={"90%"}
            okText="Create board"
            maskStyle={{ backgroundColor: "rgba(0,0,0,.85)" }}
          >
            <ModalContainer style={{ backgroundColor: "none" }}>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  listStyle: "none",
                  flexWrap: "wrap",
                  backgroundColor: "none",
                }}
              >
                <li>
                  <Button
                    style={{
                      backgroundColor: "rgb(176, 70, 50)",
                    }}
                    value="rgb(176, 70, 50)"
                    onClick={(e) => setBoardBackGround(e.target.value)}
                  ></Button>
                </li>
                <li>
                  <Button
                    style={{
                      backgroundColor: "rgb(210, 144, 52)",
                    }}
                    value="rgb(210, 144, 52)"
                    onClick={(e) => setBoardBackGround(e.target.value)}
                  ></Button>
                </li>
                <li>
                  <Button
                    style={{
                      backgroundColor: "rgb(0, 121, 191)",
                    }}
                    value="rgb(0, 121, 191)"
                    onClick={(e) => setBoardBackGround(e.target.value)}
                  ></Button>
                </li>
                <li>
                  <Button
                    style={{
                      backgroundColor: "rgb(81, 152, 57)",
                    }}
                    value="rgb(81, 152, 57)"
                    onClick={(e) => setBoardBackGround(e.target.value)}
                  ></Button>
                </li>
                <li>
                  <Button
                    style={{
                      backgroundImage:
                        'url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2409x1600/5f1f8a763a88f69005c46d61ddd4e439/photo-1480074568708-e7b720bb3f09.jpg")',
                    }}
                    value='url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2409x1600/5f1f8a763a88f69005c46d61ddd4e439/photo-1480074568708-e7b720bb3f09.jpg")'
                    onClick={(e) => setBoardBackGround(e.target.value)}
                  ></Button>
                </li>
                <li>
                  <Button
                    style={{
                      backgroundImage:
                        'url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/0190996059c58bbb62b2b348846345b2/photo-1607981478049-c452cafc8b9c.jpg")',
                    }}
                    value='url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/0190996059c58bbb62b2b348846345b2/photo-1607981478049-c452cafc8b9c.jpg")'
                    onClick={(e) => setBoardBackGround(e.target.value)}
                  ></Button>
                </li>
                <li>
                  <Button
                    style={{
                      backgroundImage:
                        'url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2402x1600/1b101b2674301e95f8ed6abfb4f0181e/photo-1581896184337-1330180ac3e6.jpg")',
                    }}
                    value='url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2402x1600/1b101b2674301e95f8ed6abfb4f0181e/photo-1581896184337-1330180ac3e6.jpg")'
                    onClick={(e) => setBoardBackGround(e.target.value)}
                  ></Button>
                </li>
                <li>
                  <Button
                    style={{
                      backgroundImage:
                        'url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1271x1920/07f7673faae96dcd525e4d455204d1ad/photo-1608411404709-ef3f142afe3f.jpg")',
                    }}
                    value='url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1271x1920/07f7673faae96dcd525e4d455204d1ad/photo-1608411404709-ef3f142afe3f.jpg")'
                    onClick={(e) => setBoardBackGround(e.target.value)}
                  ></Button>
                </li>
              </ul>
            </ModalContainer>
          </Modal>
        </Recently>
      </div>
    );
  } else {
    return <LoadingOutlined />;
  }
};

export default Boards;

const Header = styled.header`
  background: #0079bf;
  padding-top: 0.2rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 30px;
`;
const Image = styled.img`
  position: relative;
  left: 25%;
  width: 105px;
  height: 25px;
  opacity: 0.5;

  :hover {
    opacity: 0.8;
  }
`;

const Search = styled.input`
  background-color: #fff;
  padding: 8px 12px;
  position: relative;
  bottom: 6px;
  left: 2px;
  color: #172b4d;
  border: none;
  box-shadow: none;
  padding-right: 54px;
  width: 180px;
  height: 10px;
  border-radius: 3px;
  opacity: 0.5;
`;

const Recently = styled.ul`
  position: relative;
  right: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 4fr));
  grid-auto-rows: 80px;
  grid-gap: 8px;
  list-style: none;
  font-weight: bold;
`;

const Item = styled.li`
  background-color: #0079bf;
  color: #ffffff;
  text-align: left;
  border-radius: 4px;
  cursor: pointer;
  flex: 1 0 15%;
  margin: 5px;
  padding: 5%;
  width: 90%;
  height: 80px;
  :hover {
    opacity: 0.8;
  }
`;

const Headers = styled.h2`
  color: #172b4d;
  font-size: 1rem;
`;

const ModalContainer = styled.div``;

const ModalInput = styled.input`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: white;
  outline: none;
  background-color: rgba(255, 255, 255, 0);

  :focus {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    padding: 2px;
  }
`;

const Button = styled.button`
  border-radius: 4px;
  width: 50px;
  height: 50px;
  border: none;
  margin-left: 5px;
  margin-top: 5px;
  background-position: 50%;
  background-size: cover;
  cursor: pointer;
`;
