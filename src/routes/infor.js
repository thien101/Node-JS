const express = require('express');
const router = express.Router();

// tạo tuyến đường của infor
const inforController = require('../app/controllers/inforController');

router.use('/:slug', inforController.show);
router.use('/', inforController.index);

module.exports = router;
