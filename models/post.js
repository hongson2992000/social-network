const mongoose = require("mongoose");
const { LikeSchema } = require("./like");
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: { type: [LikeSchema], default: [] },
  //comment thực hiện bucketing
});

const Post = mongoose.model("Post", PostSchema);

module.exports = { Post };
