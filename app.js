const mongoose = require("mongoose");
const {} = require("./models/group");
const {
  createUser,
  addUserToGroup,
  updateUser,
  deleteUser,
} = require("./controllers/user");
const {
  createProfile,
  updateProfile,
  deleteProfile,
} = require("./controllers/profile");
const { createPost, updatePost, deletePost } = require("./controllers/post");
const { createGroup } = require("./controllers/group");
const { likeAndDislike } = require("./controllers/like");
mongoose
  .connect("mongodb://localhost:27017/socialnetwork", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected !!");
    // create new user
    // createUser({
    //   body: {
    //     username: "HongSon",
    //     password: "123",
    //     email: "hongson@gmail.com",
    //     name: "Dao Hong Son",
    //     dob: new Date("2000/9/29"),
    //     // profile: {

    //     // },
    //   },
    // }
    //createGroup
    // createGroup({
    //   body: {
    //     name: "Fan",
    //     description: "Vui ve",
    //   },
    // });
    // addUserToGroup({
    //   body: {
    //     userId: "5ff850c2fbfdb74630ddc028",
    //     groupId: "5ff857369cdc862584583bd5",
    //   },
    // });
    // updateUser({
    //   body: {
    //     userId: "5ff850c2fbfdb74630ddc028",
    //     username: "thuminh",
    //     password: "456",
    //     name: "Thu Minh",
    //     email: "thuminh@gmail.com",
    //     dob: new Date("2000/9/29"),
    //   },
    // });
    // deleteUser({
    //   body:{
    //     userId:"5ff850c2fbfdb74630ddc028"
    //   }
    // })
  });
// })
// createProfile({
//   body: {
//     userId: "600b8b911a494525000b54a8",
//     university: "FPT",
//     description: "Hoc Ngu",
//     major: "SE",
//   },
// })
// updateProfile({
//   body: {
//     userId: "600b8b911a494525000b54a8",
//     university: "HUTECH",
//     description: "Hoc Ngu",
//     major: "SA",
//   },
// })
// deleteProfile({
//   body: {
//     userId: "600b8b911a494525000b54a8",
//   },
// })
// createPost({
//   body:{
//     userId: "60101f4e98e47b615824b8df",
//       title: "Vui ve k quao",
//       content: "Tra Xanh",

//   }
// })
// deletePost({
//   body: {
//     postId: "600c3990aa7c1b22d019471a",
//   },
// })
likeAndDislike({
  body: {
    postId: "60102e984145bb5e0cc72d80",
    userId:"60101f4e98e47b615824b8df",
  },
})
.catch((err) => {
  console.log("Error:", err);
});
