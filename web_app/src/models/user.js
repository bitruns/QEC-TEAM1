const { mongoose } = require('.');

/*
  This is the user database structure for storing information about the user and their corresponding habits.
*/

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  habits: [
    {
      habitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Habits' },
      totalNum: Number,
      numSuccess: Number,
    },
  ],
});

const User = mongoose.model('Users', userSchema);

Object.assign(module.exports, {
  User,
});
