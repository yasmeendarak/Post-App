import { checkSchema } from "express-validator";
import express = require("express");
import postValidationSchema = require("./postValidationSchema");
import { createPost, updatePost, getPostById, getAllPosts, deletePost } from "../controllers";

const router = express.Router();

router.post('/', checkSchema(postValidationSchema), createPost);
router.get('/', getAllPosts);
router.put('/:id', checkSchema(postValidationSchema), updatePost);
router.delete('/:id',deletePost);
router.get('/:id', getPostById);

module.exports = router;
