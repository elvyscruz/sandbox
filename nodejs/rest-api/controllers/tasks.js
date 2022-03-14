const Task = require('../models/tasks')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: 'Error getting the data' })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (err) {
    res.status(500).json({ msg: 'Error creating task' })
  }
}

const getTask = async (req, res) => {
  const { id: taskId } = req.params

  try {
    const task = await Task.findOne({ _id: taskId })
    res.status(200).json({ task })
  } catch (error) {
    res.status(404).json({ message: `No task with Id ${taskId}` })
  }
}

const updateTask = async (req, res) => {
  const { id: taskId } = req.params
  try {
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, { new: true, runValidators: true })
    res.status(200).json({ task })
  } catch (err) {
    res.status(500).json({ msg: 'Error updating task' })
  }
}

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params
  try {
    const task = await Task.findOneAndDelete({ _id: taskId })
    res.status(200).json({ task })
  } catch (err) {
    res.status(500).json({ msg: 'Error deleting  task' })
  }
}
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }
