const express = require('express')
const router = express.Router()

const FormController = require('../controllers/FormController')
const upload = require('../Middleware/upload')

router.post('/store', upload.single('cv'), FormController.store)
router.patch('/store/:id', FormController.updateScore)
router.get('/store', FormController.getAll)

module.exports = router