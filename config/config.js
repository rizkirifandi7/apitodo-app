require("dotenv").config();

module.exports = {
	development: {
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: "todo_data",
		host: "dbpgsql",
		dialect: "postgres",
	},
	test: {
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: "todo_data",
		host: "dbpgsql",
		dialect: "postgres",
	},
	production: {
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: "database_production",
		host: "dbpgsql",
		dialect: "postgres",
	},
};

