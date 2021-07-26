const Task = require("../../db/models/task/index");

module.exports.getTasks = async (req, res) => {
  Task.find().then((result) => res.send({ tasks: result }));
};

module.exports.createTask = async (req, res) => {
  const values = new Task(req.body);
  values
    .save()
    .then((result) => {
      Task.find().then((result) => res.send({ tasks: result }));
    })
    .catch((err) => res.send(err));
};

module.exports.changeTask = async (req, res) => {
  const { body } = req;
  Task.updateOne({ _id: body._id }, body)
    .then((result) => {
      Task.find().then((result) => res.send({ tasks: result }));
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.deleteTask = async (req, res) => {
  const { query } = req;
  Task.deleteOne({ _id: query.id })
    .then((result) => {
      Task.find().then((resl) => res.send({ tasks: resl }));
    })
    .catch((err) => res.send(err));
};
