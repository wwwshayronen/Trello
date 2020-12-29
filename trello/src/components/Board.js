import React, { useState, useEffect } from "react";
import Board from "react-trello";
import BoardNav from "./BoardNav";
import "./board.css";
import usePrevious from "../hooks/usePrevious";
import { useAuth0 } from "@auth0/auth0-react";
import PostBoard from "../handlers/PostBoard";

const BoardPage = (props) => {
  const [data, setData] = useState();
  const [savedBoard, setSavedBoard] = useState();
  const [dataIsReady, setDataIsReady] = useState(false);
  // const [info, setInfo] = useState()
  const { user, isAuthenticated, logout, isLoading } = useAuth0();


  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/boards/v2/${props.location.state.id}`
        );
        const json = await res.json();
        console.log(json);
        setSavedBoard(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBoards();
  }, [props]);
  console.log("saved boards:", savedBoard);

  const handleDataChange = (newData) => {
    setData(newData);
    console.log("new data");
    setDataIsReady(true);
  };

  const prevValue = usePrevious(props);
  console.log("prev val: ", prevValue);
  console.log(props.location.state.background);

  const info =
    (savedBoard && savedBoard[0].boardData[0]) || props.location.state.data[0];
  const backgroundColor =
    (savedBoard && savedBoard[0].background) || props.location.state.background;
  const name = (savedBoard && savedBoard[0].name) || props.location.state.title;
  const id = (savedBoard && savedBoard[0]._id) || props.location.state.id;

  console.log(info);

  if (isAuthenticated)
    return (
      <>
        <main
          style={{
            background: `${backgroundColor}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <BoardNav background={"rgba(0,0,0,.32)"} />
          <h1 style={{ margin: "0", color: "white" }}>{name}</h1>
          <Board
            data={info}
            canAddLanes={true}
            editable={true}
            editLaneTitle={true}
            hideCardDeleteIcon={false}
            onDataChange={(newData) => handleDataChange(newData)}
            style={{ background: `${"none"}` }}
          />
        </main>
        {dataIsReady && (
          <PostBoard
            name={name}
            background={backgroundColor}
            userID={user.sub}
            data={data}
            method="PUT"
            url={`http://localhost:5000/api/boards/${id}`}
          />
        )}
      </>
    );
  return <div>loading...</div>;
};

export default BoardPage;
