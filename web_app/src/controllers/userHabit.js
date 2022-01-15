const { User } = require('../models/user');
const { Habit } = require('../models/habit');

const create = async (req, res) => {

  const user = await User.findById(req.query._id).exec();

  if(!user) {
    res.status(400).send("User does not exist");
    return;
  }

  for(const obj of req.body) {
    let habitId;
    if(obj.habit) {
      // create habit in db
      const habit = new Habit(obj.habit);
      try {
        await habit.save();
      } catch(e) {
        console.log('here ' + e);
        res.status(500).send(e);
      }
      habitId = habit._id.toString();
    } else {
      habitId = obj.ref;
    }

    user.habits.push({
      habitId,
      totalNum: 0,
      numSuccess: 0,
      reminder: obj.reminder,
      score: obj.score,
    })
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

const read = async (req, res) => {
  console.log(req.query._id);
  const user = await User.findById(req.query._id).exec();
  console.log(user);

  const habits = [];
  for(const userHabit of user.habits) {
    console.log(userHabit);
    const habitId = userHabit.habitId.toString();
    console.log('habitId: ' + habitId);
    const habit = await Habit.findById(habitId).exec();
    console.log(habit);
    if(habit) {
      habits.push(habit);
    } else {
      res.status(400).send("Habit does not exist");
      return;
    }
  }

  try {
    res.json({
      habits,
    });
  } catch(e) {
    res.status(500).send(e);
  }
};

Object.assign(module.exports, {
  create,
  read,
});
