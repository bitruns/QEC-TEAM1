const { Habit } = require('../models/habit');

const create = async (req, res) => {
  let newObj = {
    ...req.body,
  };
  let newHabit = new Habit(newObj);

  try {
    await newHabit.save();
  } catch(e) {
    res.status(500).send(e);
  }

  res.json({
    habit: newHabit,
  });
};

const read = async (req, res) => {
  const id = req.query._id;
  if(id) {
    const habit = await Habit.findById(id).exec();

    if(habit) {
      res.json(habit);
    } else {
      res.status(400).send("Habit does not exist");
    }
  } else {
    const habits = await Habit.find().exec();

    if(habits) {
      res.json({ habits, });
    } else {
      res.status(400).send("Habits do not exist");
    }
  }
  
};

const update = async (req, res) => {
  const updateObj = {
    property: "",
    ...req.body,
  };

  const habit = await Habit.findByIdAndUpdate(req.query._id, updateObj, {new: true}).exec();

  if(habit) {
    res.json(habit);
  } else {
    res.status(400).send("Habit does not exist");
  }
};

const delete_ = async (req, res) => {
  const habit = await Habit.findByIdAndDelete(req.query._id).exec();

  if(habit) {
    res.status(200).send("Successfully deleted habit");
  } else {
    res.status(400).send("Habit does not exist");
  }
};

Object.assign(module.exports, {
  create,
  read,
  update,
  delete: delete_,
});
