const mongoose = require("mongoose");
const validator = require("validator");
const ProfileSchema = new mongoose.Schema({
  university: {
    type: String,
  },
  description: {
    type: String,
  },
  major: {
    type: String,
  },
});
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Invalid Email!");
      }
    },
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  registerDate: {
    type: String,
    default: new Date(),
  },
  group: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
      },
    ],
    default: [],
  },
  profile: ProfileSchema,
});

const User = mongoose.model("User", UserSchema);
const Profile = mongoose.model("Profile", ProfileSchema);
module.exports = { User, Profile };
