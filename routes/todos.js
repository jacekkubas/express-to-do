const router = require("express").Router();
const { v4 } = require("uuid");
const checkAuth = require("../middleware/checkAuth");

let todos = [];

router.get("", checkAuth, (req, res) => {
  return res.json(todos);
})

router.get("/:id", checkAuth, (req, res) => {
  const { id } = req.params;
  const todo = todos.find(el => el.id === id);

  return res.json(todo);
})

router.post("", checkAuth, (req, res) => {
  const { title } = req.body;
  const todo = {
    id: v4(),
    title,
    completed: false,
  }
  todos.push(todo);

  return res.json(todos);
})

router.put("/:id", checkAuth, (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(el => el.id === id);
  todos[index].completed = !todos[index].completed;

  return res.json(todos[index]);
})

router.delete("todos/:id", checkAuth, (req, res) => {
  const { id } = req.params;
  todos = todos.filter(el => el.id !== id);

  return res.json(todos);
})

module.exports = router;