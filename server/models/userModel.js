const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	empName: {
		type: String,
		required: [true, "Please provide employee name."],
		unique: false,
	},
	accType: {
		type: String,
		required: [true, "Select account type."],
		unique: false,
	},
	section: {
		type: String,
	},
	email: {
		type: String,
		required: [true, "Provide email."],
		unique: false,
	},
	contactNo: {
		type: Number,
		required: [true, "Please provide contact number."],
		unique: false,
	},
	username: {
		type: String,
		required: [true, "Please provide a Username."],
		unique: [true, "Username exists."],
	},
	password: {
		type: String,
		required: [true, "Please enter a Password"],
		unique: false,
	},
});

const Users = mongoose.model("Users", userSchema);

module.exports = mongoose.model.Users || Users;
