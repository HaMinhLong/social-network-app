const express = require("express");
const { fetchPosts, createPost, deletePost } = require("../controllers/post");

const router = express.Router();

router.get("/", fetchPosts);
router.post("/", createPost);
router.delete("/:id", deletePost);

module.exports = router;
