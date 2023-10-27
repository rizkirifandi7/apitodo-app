const app = require("../index");
const request = require("supertest");

describe("Todo Unit Test", () => {
	test("Berhasil menambah Todo", (done) => {
		const newTodo = {
			title: "Todo 6",
		};

		request(app)
			.post("/api/todos/add")
			.send(newTodo)
			.expect("Content-Type", /json/)
			.then((response) => {
				expect(response.body.message).toBe("Berhasil membuat data Todo!");
				done();
			})
			.catch(done);
	});

	test("Mendapatkan semua data", (done) => {
		request(app)
			.get("/api/todos/all")
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body.data.length).toBe(6);
				done();
			})
			.catch(done);
	});

	test("Mendapatkan data dengan id", (done) => {
		request(app)
			.get(`/api/todos/2`)
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body.data.title).toBe("Todo 2");
				done();
			})
			.catch(done);
	});

	test("Edit data todo", (done) => {
		const id = 5;
		const updatedTodo = {
			title: "Todo Test",
		};

		request(app)
			.put(`/api/todos/edit/${id}`)
			.send(updatedTodo)
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body.message).toBe("Berhasil update data Todo!");
				expect(response.body.data).toHaveProperty("title", "Todo Test");
				done();
			})
			.catch(done);
	});

	test("Delete Todo", (done) => {
		const id = 5;

		request(app)
			.delete(`/api/todos/delete/${id}`)
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body.message).toBe("Berhasil hapus data Todo!");
				done();
			})
			.catch(done);
	});
});
