import express from "express";
import { controllers } from "../controllers/contactsControllers.js";
import validateBody from "../middlewars/validateBody.js";
import isValidId from "../middlewars/isValidId.js";
import {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", controllers.getAllContacts);

contactsRouter.get("/:id", isValidId, controllers.getOneContact);

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  controllers.createContact
);

contactsRouter.delete("/:id", isValidId, controllers.deleteContact);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(updateContactSchema),
  controllers.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  isValidId,
  controllers.updateFavorite
);

export default contactsRouter;
