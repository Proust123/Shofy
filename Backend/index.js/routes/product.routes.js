const express = require('express')
const { addItem, allProds, deleteProd, paymentController, singleCategory, paymentSuccess, singleOrder } = require('../controllers/product.Controller')
const { isLoggedIn } = require('../middleware/isLoggedin')

const router = express.Router()

router.post('/addItem', addItem)
router.delete('/deleteProd/:id', deleteProd)
router.get('/allProds', allProds)
router.get(`/singleCategory/:category`, singleCategory)

router.post("/create-checkout-session", paymentController)
router.post("/webhook-auto-complete", paymentSuccess)

router.get("/singleOrder", isLoggedIn, singleOrder)
module.exports = router

