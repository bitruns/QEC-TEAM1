const { User } = require('../models/user');

const create = async (req, res) => {
  let newObj = {
    ...req.body,
  };
  let newUser = new User(newObj);

  try {
    await newUser.save();
    res.json({
      user: newUser,
    });
  } catch(e) {
    res.status(500).send(e);
  }
};

Object.assign(module.exports, {
  create,
});
