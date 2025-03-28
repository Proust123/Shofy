const express = require('express');
const {
  signup,
  login,
  allUsers,
  change,
} = require('../controllers/user.Controller');
const { isLoggedIn } = require('../middleware/isLoggedin');
const { isAdmin } = require('../middleware/isAdmin');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.patch('/change-password', isLoggedIn, change);

router.get('/allUsers', isLoggedIn, isAdmin, allUsers);

module.exports = router;
