const express = require("express");
const {
  getAll,
  getById,
  create,
  removeById,
  updateById,
  updateFavorite,
} = require("../../controllers/contacts");
const { validatorRequest } = require("../../middlewars/validatorRequest");
const { schemaCreate, schemaFavorite } = require("../../models/contacts");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", validatorRequest(schemaCreate), create);
router.delete("/:id", removeById);
router.put("/:id", updateById);
router.patch("/:id/favorite", validatorRequest(schemaFavorite), updateFavorite);

module.exports = router;
