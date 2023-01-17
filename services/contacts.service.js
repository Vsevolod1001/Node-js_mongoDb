const { Contact } = require("../models/contacts");

const getAll = async () => {
  return Contact.find({});
};
const getById = async (id) => {
  return Contact.findById(id);
};
const create = async (contact) => {
  return Contact.create(contact);
};
const deleteById = async (id) => {
  return Contact.findByIdAndRemove(id);
};
const updateById = async (id, product) => {
  return Contact.findByIdAndUpdate(id, product, { new: true });
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};
