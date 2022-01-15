const { mongoose } = require('.');

const habitSchema = new mongoose.Schema({
  explanation: String,
});

const Habit = mongoose.model('Habits', habitSchema);

Object.assign(module.exports, {
  Habit,
});
