const { Suggestion } = require('../models/suggestion');

const create = async (req, res) => {
  let newObj = {
    ...req.body,
  };
  let newSuggestion = new Suggestion(newObj);

  try {
    await newSuggestion.save();
  } catch(e) {
    res.status(500).send(e);
  }

  res.json({
    suggestion: newSuggestion,
  });
};

const read = async (req, res) => {
  const suggestion = await Suggestion.findById(req.query._id).exec();

  if(suggestion) {
    res.json(suggestion);
  } else {
    res.status(400).send("Suggestion does not exist");
  }
};

const update = async (req, res) => {
  const updateObj = {
    property: "",
    ...req.body,
  };

  const suggestion = await Suggestion.findByIdAndUpdate(req.query._id, updateObj, {new: true}).exec();

  if(suggestion) {
    res.json(suggestion);
  } else {
    res.status(400).send("Suggestion does not exist");
  }
};

const delete_ = async (req, res) => {
  const suggestion = await Suggestion.findByIdAndDelete(req.query._id).exec();

  if(suggestion) {
    res.status(200).send("Successfully deleted suggestion");
  } else {
    res.status(400).send("Suggestion does not exist");
  }
};

Object.assign(module.exports, {
  create,
  read,
  update,
  delete: delete_,
});
