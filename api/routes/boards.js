const express = require("express");
const router = express.Router();

// GOAL model import
const Board = require("../../models/Boards");

// route GET api/boards
// get all boards by id
router.get("/:userID", (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.userID;
    Board.find({ userID: id })
      .sort({ date: -1 })
      .then((board) => res.json(board));
  } catch (error) {
    res.send({ message: error });
    console.log("Error with get board by id:", error);
  }
});

// route post api/boards
// save new goal to DB
router.post("/", (req, res) => {
  try {
    console.log("request was received by the server:", req.body);
    const newBoard = new Board({
      name: req.body.name,
      boardData: req.body.boardData,
      userID: req.body.userID,
      background: req.body.background,
      date: req.body.date,
    });

    // save item to db
    newBoard.save().then((item) => res.json(item));
  } catch (error) {
    console.log("error msg in handling post req:", error);
  }
});

// route delete api/boards
// delete board
router.delete("/delete/:id", (req, res) => {
  console.log("request for deleting obj:", req.params);
  Board.findById(req.params.id).then((board) =>
    board.remove().then(() => {
      res
        .json({ success: true })
        .catch((err) => res.status(404).json({ message: err }));
    })
  );
});

// route put api/boards
// edit board
router.put('/:id', (req, res, next) => {
  console.log("id:", req.params)
  const board = new Board({
    _id: req.params.id,
    name: req.body.name,
    boardData: req.body.boardData,
    userID: req.body.userID,
    background: req.body.background,
    date: req.body.date,
  });
  Board.updateOne({_id: req.params.id}, board).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

module.exports = router;
