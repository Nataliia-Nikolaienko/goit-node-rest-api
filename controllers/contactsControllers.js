import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
} from "../services/contactsServices.js";

import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";

const getAllContacts = async (req, res) => {
  const result = await listContacts();
  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await removeContact(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json({ message: "Delete success" });
};

const createContact = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await updateContactById(id, req.body);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

export const controllers = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
};
