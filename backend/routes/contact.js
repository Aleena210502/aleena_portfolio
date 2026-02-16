const express = require("express")
const {
  submitContact,
  getContacts,
  updateContactStatus,
  deleteContact
} = require("../controllers/contactController")

const router = express.Router()

router.post("/", submitContact)
router.get("/", getContacts)
router.patch("/:id", updateContactStatus)
router.delete("/:id", deleteContact)

module.exports = router
