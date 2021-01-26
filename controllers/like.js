const {Like} = require("../models/like");
const {Post}= require("../models/post");

const likeAndDislike = async (req) => {
  try {
    const foundedPost = await Post.findById(req.body.postId);

    if (!foundedPost) {
      throw new Error("Post not exsit");
    }
    const index = -1;
    const userId = req.body.userId;

    for (const i = 0; i < foundedPost.likes.length; i++) {
      if (foundedPost.likes[i].userId.equals(userId)) {
        foundedPost.likes.splice(i, 1);
        index = i;
        break;
      }
    }

    if (index === -1) {
      const newLike = new Like({
        userId: req.body.userId,
      });
      foundedPost.likes.push(newLike);
    }
    const res = await foundedPost.save();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { likeAndDislike };
