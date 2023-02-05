const express = require('express');
const router = express.Router();

// tạo tuyến đường của infor
const inforController = require('../app/controllers/inforController');

router.get('/:slug', inforController.show);
router.get('/', inforController.index);

module.exports = router;
