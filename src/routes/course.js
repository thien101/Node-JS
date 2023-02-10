const express = require('express');
const router = express.Router();

// tạo tuyến đường của infor
const courseController = require('../app/controllers/courseController');

// craate course
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forcedelete);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);
// router.use('/', inforController.index);

module.exports = router;
