const express = require('express')
const router = express.Router()

const tasksController = require('./controllers/tasksController')
const taskMiddleware = require('./middlewares/tasksMiddleware')

router.get('/tasks', tasksController.getAll)
router.post('/tasks', taskMiddleware.validateBody, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTasks)

module.exports = router;