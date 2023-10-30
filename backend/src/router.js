const express = require('express')
const router = express.Router()

const tasksController = require('./controllers/tasksController')
const taskMiddleware = require('./middlewares/tasksMiddleware')

router.get('/tasks', tasksController.getAll)
router.post('/tasks', taskMiddleware.vlidateFieldTitle, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTasks)
router.put('/tasks/:id',taskMiddleware.validateFieldStatus,taskMiddleware.vlidateFieldTitle , tasksController.updateTask)

module.exports = router;