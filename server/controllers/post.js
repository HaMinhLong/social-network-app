const Post = require("../models/post");

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

const deletePost = async (req, res) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.id);
  res.send(deletedPost);
};

module.exports = { fetchPosts, createPost, deletePost };
