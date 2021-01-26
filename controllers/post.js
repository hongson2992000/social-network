const {Post} = require("../models/post");
const { User } = require("../models/user");

const createPost = async (req) => {
  try {
    const foundedUser = await User.findOne(req.body.UserId);

    if (!foundedUser) {
      throw new Error("Nguoi dung này k tồn tại");
    }
    const newPost = new Post({
      userId: req.body.userId,
      title: req.body.title,
      content: req.body.content,
      likes: req.body.likes,
    });

    const res = await newPost.save();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
const updatePost = async (req) => {
  try {
    await Post.updateOne(
      { _id: req.body.postId },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};
const deletePost = async (req) => {
  try {
    await Post.findOneAndDelete(req.body.postId);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { createPost, updatePost,deletePost };
