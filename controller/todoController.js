const { Todo } = require("../models");

// Mendapatkan seluruh data todo
exports.getTodos = (req, res) => {
	Todo.findAll()
		.then((todos) => {
			res.status(200).json({ data: todos, message: "Berhasil mendapatkan seluruh data Todo!" });
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || "Gagal mendapatkan data Todo!",
			});
		});
};

// Mendapatkan data todo berdasarkan id
exports.getTodo = (req, res) => {
	const { id } = req.params;
	Todo.findByPk(id)
		.then((todo) => {
			res.status(200).json({
				data: todo,
				message: "Berhasil mendapatkan data Todo dengan id " + id + "!",
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || "Gagal mendapatkan data Todo dengan id " + id + "!",
			});
		});
};

// Membuat data todo
exports.createTodo = (req, res) => {
	const { title } = req.body;
	Todo.create({
		title: title,
	})
		.then((todo) => {
			res.status(201).json({
				data: todo,
				message: "Berhasil membuat data Todo!",
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || "Gagal membuat data Todo!",
			});
		});
};

// Update data todo
exports.updateTodo = (req, res) => {
	const { id } = req.params;
	const { title } = req.body;
	Todo.findByPk(id)
		.then((todo) => {
			todo.title = title;
			return todo.save();
		})
		.then((todo) => {
			res.status(200).json({
				data: todo,
				message: "Berhasil update data Todo!",
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || "Gagal update data Todo!",
			});
		});
};

// delete data todo
exports.deleteTodo = (req, res) => {
	const { id } = req.params;
	Todo.findByPk(id)
		.then((todo) => {
			return todo.destroy();
		})
		.then((todo) => {
			res.status(200).json({
				data: todo,
				message: "Berhasil hapus data Todo!",
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || "Gagal hapus data Todo!",
			});
		});
};
