const route = require("express").Router();
const todoController = require("../controller/todoController");

route.get("/all", todoController.getTodos);
route.get("/:id", todoController.getTodo);
route.post("/add", todoController.createTodo);
route.put("/edit/:id", todoController.updateTodo);
route.delete("/delete/:id", todoController.deleteTodo);

module.exports = route;
