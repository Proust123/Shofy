const express = require('express')
const {addCategory, allCategories, delCategory} = require('../controllers/category.Controller')

const router = express.Router()

router.post('/addCategory', addCategory)
router.delete('/delCategory/:id', delCategory)
router.get('/allCategories', allCategories)


module.exports = router