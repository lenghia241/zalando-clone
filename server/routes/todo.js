const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");

// @route   GET Api/todo/test
// @desc    Tests todo route
// @access   Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route   GET Api/todo/
// @desc    Get all todos
// @access   Public
router.get("/", (req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(404).json({ notodo: "No Todos found" }));
});

// @route   Post Api/todo/
// @desc    Post a todo
// @access   Public
router.post("/", (req, res) => {
  const newTodo = new Todo({
    todo: req.body.todo
  });

  newTodo.save().then(post => res.json(post));
});

// @route   delete Api/todo/:id
// @desc    Delete a todo
// @access   Public
router.delete("/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ success: true });
    })
    .catch(err => res.status(404).json({ todonotfound: "no todo found" }));
});

// @route   Update Api/todo/:id
// @desc    Update a todo
// @access   Public
router.put("/:id", (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, { todo: req.body.todo })
    .then(() => {
      res.json({ success: true });
    })
    .catch(err => res.status(404).json({ todonotfound: "no todo found" }));
});

module.exports = router;
