const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  content: String,
  image: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const post = mongoose.model("posts", postSchema);

module.exports = post;
