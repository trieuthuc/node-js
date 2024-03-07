const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create',courseController.create); // tạo
router.post('/store',courseController.store); // tổng hợp
router.get('/:id/edit',courseController.edit); // sửa khóa học
router.patch('/:id/restore',courseController.restore); // khôi phục lại 
router.put('/:id',courseController.update); // cập nhật
router.delete('/:id',courseController.destroy);// xóa 
router.delete('/:id/force',courseController.forceDestroy);
router.get('/:slug',courseController.show); // xem 
module.exports = router;
