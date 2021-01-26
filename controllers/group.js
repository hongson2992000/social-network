const Group = require("../models/group");

const createGroup = async (req) => {
  try {
    const newGroup = new Group({
      name: req.body.name,
      description: req.body.description,
    });
    const res = await newGroup.save();
    console.log(res);
  } catch (err) {}

 
};
module.exports = {
  createGroup,
};
