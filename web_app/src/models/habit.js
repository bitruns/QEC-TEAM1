const { mongoose } = require('.');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  explanation: String,
});

const Habit = mongoose.model('Habits', habitSchema);

Object.assign(module.exports, {
  Habit,
});
