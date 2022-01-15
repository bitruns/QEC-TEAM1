const { User } = require('../models/user');

const create = async (req, res) => {
  const user = await User.findById(req.body.userId).exec();

  for(const userHabit of user.habits) {
    console.log(userHabit);
    const habitId = userHabit.habitId.toString();
    console.log('habitId: ' + habitId);
    if(habitId == req.body.habitId) {
      if(req.body.success) {
        userHabit.numSuccess++;
      }
      userHabit.totalNum++;
    }
  }

  try {
    await user.save();
    res.json({
      user,
    });
  } catch(e) {
    res.status(500).send(e);
  }
};

Object.assign(module.exports, {
  create,
});
