require("dotenv").config();
const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// endpoint
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`);
});

module.exports = app;
