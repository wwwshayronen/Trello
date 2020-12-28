import React, { useState } from "react";
import Board from "react-trello";
import BoardNav from "./BoardNav";
import "./board.css";
import usePrevious from "../hooks/usePrevious";
import { useAuth0 } from "@auth0/auth0-react";
import PostBoard from "../handlers/PostBoard";

const DUMMY_DATA = {
  lanes: [
    {
      id: "PLANNED",
      title: "Planned Tasks",
      label: "20/70",
      style: {
        width: 280,
      },
      cards: [
        {
          id: "Milk",
          title: "Buy milk",
          label: "15 mins",
          description: "2 Gallons of milk at the Deli store",
        },
        {
          id: "Plan2",
          title: "Dispose Garbage",
          label: "10 mins",
          description: "Sort out recyclable and waste as needed",
        },
        {
          id: "Plan3",
          title: "Write Blog",
          label: "30 mins",
          description: "Can AI make memes?",
        },
        {
          id: "Plan4",
          title: "Pay Rent",
          label: "5 mins",
          description: "Transfer to bank account",
        },
      ],
    },
    {
      id: "WIP",
      title: "Work In Progress",
      label: "10/20",
      style: {
        width: 280,
      },
      cards: [
        {
          id: "Wip1",
          title: "Clean House",
          label: "30 mins",
          description:
            "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses",
        },
      ],
    },
    {
      id: "BLOCKED",
      title: "Blocked",
      label: "0/0",
      style: {
        width: 280,
      },
      cards: [],
    },
    {
      id: "COMPLETED",
      title: "Completed",
      style: {
        width: 280,
      },
      label: "2/5",
      cards: [
        {
          id: "Completed1",
          title: "Practice Meditation",
          label: "15 mins",
          description: "Use Headspace app",
        },
        {
          id: "Completed2",
          title: "Maintain Daily Journal",
          label: "15 mins",
          description: "Use Spreadsheet for now",
        },
      ],
    },
    {
      id: "REPEAT",
      title: "Repeat",
      style: {
        width: 280,
      },
      label: "1/1",
      cards: [
        {
          id: "Repeat1",
          title: "Morning Jog",
          label: "30 mins",
          description: "Track using fitbit",
        },
      ],
    },
    {
      id: "ARCHIVED",
      title: "Archived",
      style: {
        width: 280,
      },
      label: "1/1",
      cards: [
        {
          id: "Archived1",
          title: "Go Trekking",
          label: "300 mins",
          description: "Completed 10km on cycle",
        },
      ],
    },
    {
      id: "ARCHIVED2",
      title: "Archived2",
      style: {
        width: 280,
      },
      label: "1/1",
      cards: [
        {
          id: "Archived2",
          title: "Go Jogging",
          label: "300 mins",
          description: "Completed 10km on cycle",
        },
      ],
    },
    {
      id: "ARCHIVED3",
      title: "Archived3",
      style: {
        width: 280,
      },
      label: "1/1",
      cards: [
        {
          id: "Archived3",
          title: "Go Cycling",
          label: "300 mins",
          description: "Completed 10km on cycle",
        },
      ],
    },
  ],
};

const BoardPage = (props) => {
  const [data, setData] = useState(DUMMY_DATA);
  const [dataIsReady, setDataIsReady] = useState(false);
  const { user, isAuthenticated, logout, isLoading } = useAuth0();

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

  const handleDataChange = (newData) => {
    setData(newData);
    console.log("new data");
    setDataIsReady(true);
  };

  const prevValue = usePrevious(props);
  console.log("prev val: ", prevValue);
  console.log(props.location.state.background);

  if (isAuthenticated)
    return (
      <>
        <main
          style={{
            background: `${props.location.state.background}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <BoardNav background={"rgba(0,0,0,.32)"} />
          <h1 style={{ margin: "0", color: "white" }}>
            {props.location.state.title}
          </h1>
          <Board
            data={data}
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
            name={props.location.state.name}
            background={props.location.state.background}
            userID={props.location.state.id}
            data={data}
            method="PUT"
            url={`http://localhost:5000/api/boards/${props.location.state.id}`}
          />
        )}
      </>
    );
  return <div>loading...</div>;
};

export default BoardPage;
