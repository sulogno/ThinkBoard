import express from "express";
import {
  deletenotes,
  getallnotes,
  postnotes,
  updatenotes,
  getnotebyid
} from "../controllers/controllers.js";

const router = express.Router();

// GET route for notes
router.get("/", getallnotes);

// GET route for notes by id
router.get("/:id", getnotebyid);

// POST route to create notes
router.post("/", postnotes);

//put route to update note
router.put("/:id", updatenotes);
//delete routes to delete note
router.delete("/:id", deletenotes);

export default router;
