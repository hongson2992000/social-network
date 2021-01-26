const { modelName } = require("../models/user");
const {User} = require("../models/user");
const Group = require("../models/group");
const createUser = async (req) => {
  const user = req.body;

  /**B1: find user voi usename hoac email
   * yes => err
   * B2: tạo instance từ model User với thông tin từ front end gửi
   * B3:save vào db
   */
  try {
    const foundedUser = await User.findOne().or([
      { username: req.body.username },
      { email: req.body.email },
    ]);

    //falsy: null, undefined , 0 , "",false

    if (foundedUser) {
      throw new Error("Người dùng đã tồn tại");
    }

    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      name: req.body.name,
      dob: req.body.dob,
      profile: req.body.profile,
    });
    const res = await newUser.save();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
const addUserToGroup = async (req) => {
  // kiểm tra userID
  try {
    const foundedUser = await User.findById(req.body.userId);

    if (!foundedUser) {
      throw new Error("Người dùng k hợp lệ");
    }
    // kiểm tra groupID
    const foundedGroup = await Group.findById(req.body.groupId);

    if (!foundedGroup) {
      throw new Error("Group k hợp lệ");
    }
    // kiểm tra userId có trong group k

    //push userID to group
    foundedGroup.users.push(req.body.userId);

    //push groupID to user
    foundedUser.group.push(req.body.groupId);
    await foundedGroup.save();
    await foundedUser.save();
  } catch (err) {
    console.log(err);
  }
};

// const findUser = async (res) => {
//   const res = await User.find({ email: req.body.email }).explain(
//     "explainStats"
//   );
// };
//update User findById , findOneAndUpdate

const updateUser = async (req) => {
  try {
    const foundedUser = await User.findById(req.body.userId);

    if (!foundedUser) {
      throw new Error("Người dùng này không tồn tại");
    }
    foundedUser.username = req.body.username;
    foundedUser.password = req.body.password;
    foundedUser.name = req.body.name;
    foundedUser.email = req.body.email;
    foundedUser.dob = req.body.dob;

    await foundedUser.save();
  } catch (err) {
    console.log(err);
  }
};
const deleteUser = async (req) => {
  try {
    await User.findOneAndRemove(req.body.userId);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  createUser,
  addUserToGroup,
  updateUser,
  deleteUser,
};
/** TODOLIST
 * 1.createPost (userId,title,contents,createdDate)
 * 2.comment to Post
 * 3.deletePost
 * 4.updatePost
 * 5.deleteComment
 * 6.updateComment
 *
 */
