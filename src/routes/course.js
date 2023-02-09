const express = require('express');
const router = express.Router();

// tạo tuyến đường của infor
const courseController = require('../app/controllers/courseController');

// craate course
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);
// router.use('/', inforController.index);

module.exports = router;
