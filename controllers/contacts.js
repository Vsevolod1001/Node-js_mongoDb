const createError = require("../helpers/createError");
const { route } = require("../routes/api/contacts");
const { contacts } = require("../services");

const getAll = async (req, res, next) => {
  try {
    const all = await contacts.getAll();
    res.json(all);
  } catch (error) {
    next(error);
  }
};
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await contacts.getById(id);
    if (!user) {
      throw createError(404, "Not found");
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};
const create = async (req, res, next) => {
  try {
    const users = await contacts.create(req.body);
    res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};
const removeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await contacts.deleteById(id);
    if (!deleteUser) {
      throw createError(404, "Not found");
    }
    res.json(deleteUser);
  } catch (error) {
    next(error);
  }
};
const updateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await contacts.updateById(id, req.body);
    if (!user) {
      throw createError(404, "not found");
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};
const updateFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await contacts.updateById(id, req.body);
    if (!user) {
      throw createError(404, "not found");
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAll,
  getById,
  create,
  removeById,
  updateById,
  updateFavorite,
};
