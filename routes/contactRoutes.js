const express = require("express");
const router = express.Router();
const {getContacts, deleteContact} = require("../controllers/contactController");
const {getContact} = require("../controllers/contactController");
const {createContact} = require("../controllers/contactController");
const {updateContact} = require("../controllers/contactController");

router.route("/").get(getContacts);

router.route("/:id").get(getContact);

router.route("/").post(createContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;