const Post = require("../models/post");
const mongoose = require("mongoose");

const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    console.log("Fetch Posts Success");
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json("Error Fetch Posts (server) " + error.message);
  }
};

const createPost = async (req, res) => {
  const { tags, title, content, image } = req.body;
  const newPost = new Post({
    tags,
    title,
    content,
    image,
  });
  try {
    newPost.save();
    console.log("Create New Post Success");
    res.status(200).json(newPost);
  } catch (error) {}
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json("No post with that id");

  const updatePost = await Post.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatePost);
};

const deletePost = async (req, res) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.id);
  res.send(deletedPost);
};

module.exports = { fetchPosts, createPost, updatePost, deletePost };
