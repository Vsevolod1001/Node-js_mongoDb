const { Schema, model } = require("mongoose");
const Joi = require("joi");

const schema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const schemaCreate = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.bool(),
});
const schemaFavorite = Joi.object({
  favorite: Joi.bool().required(),
});
const Contact = model("contact", schema);

module.exports = { Contact, schemaFavorite, schemaCreate };
