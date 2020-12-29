import React from "react";

const PostBoard = (props) => {
  console.log(props, "propsss");
  async function postData() {
    // const url = "http://localhost:5000/api/boards";
    const response = await fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.name,
        boardData: props.data,
        userID: props.userID,
        background: props.background,
        date: new Date(),
      }),
    });
    // console.log("res:", response.json());
    return response.json();
  }

  postData();

  return <div></div>;
};

export default PostBoard;
