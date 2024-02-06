import express from "express";
import { controllers } from "../controllers/contacts.js";
import { validateBody, authenticate, isValidId } from "../middlewars/index.js";
import {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, controllers.getAllContacts);

contactsRouter.get("/:id", authenticate, isValidId, controllers.getOneContact);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(createContactSchema),
  controllers.createContact
);

contactsRouter.delete(
  "/:id",
  authenticate,
  isValidId,
  controllers.deleteContact
);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(updateContactSchema),
  controllers.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  validateBody(updateFavoriteSchema),
  isValidId,
  controllers.updateFavorite
);

export default contactsRouter;
