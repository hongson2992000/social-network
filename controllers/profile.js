const { User, Profile } = require("../models/user");

// create Profile

//

const createProfile = async (req) => {
  const user = req.body;
  try {
    const foundedUser = await User.findById(req.body.userId);

    if (!foundedUser) {
      throw new Error("Nguoi dung k ton tại");
    }
    if (foundedUser.profile) {
      throw new Error("Profile exited");
    }
    const newProfile = new Profile({
      university: req.body.university,
      description: req.body.description,
      major: req.body.major,
    });
    foundedUser.profile = newProfile;
    const res = await foundedUser.save();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const updateProfile = async (req) => {
  try {
    const foundedUser = await User.findById(req.body.userId);

    if (!foundedUser) {
      throw new Error("Nguoi dùng này k tồn tại");
    }
    if (!foundedUser.profile) {
      throw new Error("Profile not exsit");
    }

    foundedUser.profile.university = req.body.university;
    foundedUser.profile.description = req.body.description;

    foundedUser.profile.major = req.body.major;

    const res = await foundedUser.save();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
const deleteProfile = async (req) => {
  try {
    const foundedUser = await User.findById(req.body.userId);
    if (!foundedUser) {
      throw new Error("User not exsit");
    }
    const newProfile = new Profile({
        // university: req.body.university,
        // description: req.body.description,
        // major: req.body.major,
      });
      foundedUser.profile == undefined;
    
     const res= await foundedUser.save();
     console.log(res)
  } catch (err) {
    console.log(err);
  }
};
module.exports = { createProfile, updateProfile,deleteProfile };
