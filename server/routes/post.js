const express = require("express");
const {
  fetchPosts,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/post");

const router = express.Router();

router.get("/", fetchPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
