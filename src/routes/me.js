const express = require('express');
const router = express.Router();

// tạo tuyến đường của me
const meController = require('../app/controllers/meController');

// craate
router.get('/stored/courses', meController.storedCourse);


module.exports = router;
