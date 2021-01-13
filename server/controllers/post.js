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
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Post.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};


const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await Post.findById(id);
  const updatePost = await Post.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatePost);
};
module.exports = { fetchPosts, createPost, updatePost, deletePost, likePost };

