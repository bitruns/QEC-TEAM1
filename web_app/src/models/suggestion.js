const { mongoose } = require('.');

const suggestionSchema = new mongoose.Schema({
  habitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Habits' },
  suggestion: String,
});

const Suggestion = mongoose.model('Suggestions', suggestionSchema);

Object.assign(module.exports, {
  Suggestion,
});
