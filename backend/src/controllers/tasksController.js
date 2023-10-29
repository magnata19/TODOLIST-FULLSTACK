const tasksModel = require("../models/tasksModel");

// o _ antes do req é apenas p mostrar q não estamos utilizando o req
const getAll = async (_req, res) => {
  const tasks = await tasksModel.getAll();

  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const createdTask = await tasksModel.createTask(req.body)
  return res.status(201).json(createdTask)
}

const deleteTasks = async (req, res) => {
  const { id } = req.params;
  await tasksModel.deleteTask(id)
  return res.status(204).json();
}

module.exports = {
  getAll,
  createTask,
  deleteTasks
};
