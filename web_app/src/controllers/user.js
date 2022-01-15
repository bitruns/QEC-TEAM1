const { User } = require('../models/user');

const create = async (req, res) => {
  let newObj = {
    ...req.body,
  };
  let newUser = new User(newObj);

  try {
    await newUser.save();
  } catch(e) {
    res.status(500).send(e);
  }

  res.json({
    user: newUser,
  });
};

const read = async (req, res) => {
  const user = await User.findById(req.query._id).exec(); // .populate('habits/habitId') ?

  if(user) {
    res.json(user);
  } else {
    res.status(400).send("User does not exist");
  }
};

const update = async (req, res) => {
  const updateObj = {
    property: "",
    ...req.body,
  };

  console.log(req.query._id);

  const user = await User.findByIdAndUpdate(req.query._id, updateObj, {new: true}).exec();

  if(user) {
    res.json(user);
  } else {
    res.status(400).send("User does not exist");
  }
};

const delete_ = async (req, res) => {
  const user = await User.findByIdAndDelete(req.query._id).exec();

  if(user) {
    res.status(200).send("Successfully deleted user");
  } else {
    res.status(400).send("User does not exist");
  }
};

Object.assign(module.exports, {
  create,
  read,
  update,
  delete: delete_,
});
