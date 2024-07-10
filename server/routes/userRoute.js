const router = require("express").Router();
let User = require("../models/userModel");

router.route("/:id").get((request, response) => {
	User.findOne({ _id: request.params.id })
		.then((license) => response.json(license))
		.catch((error) => response.status(400).json("Error: " + error));
});

module.exports = router;
