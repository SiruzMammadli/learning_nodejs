import express from "express";
import * as photoController from "../controllers/photoController.js";

const router = express.Router();

router
  .route("/")
  .post(photoController.createPhoto)
  .get(photoController.getListPhotos);

// router.route("/:id").get(photoController.getSimplePhoto);

export default router;
