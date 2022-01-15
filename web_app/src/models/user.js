const { mongoose } = require('.');

const userSchema = new mongoose.Schema({
    property: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('Users', userSchema);

Object.assign(module.exports, {
  User,
});
