const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController')

/* GET home page. */
router.get('/', postsController.index);

module.exports = router;