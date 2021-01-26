const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  postId: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  users: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  content: {
    type: String,
    require: true,
  },
  createdDate: {
    type: Date,
    default: new Date().getDate(),
  },
});
const Comment = new mongoose.model("Comment", CommentSchema);

module.exports = { Comment, CommentSchema };
