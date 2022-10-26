const express = require('express');
const router = express.Router();

const { ProductController } = require('../controllers');
const { isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', ProductController.get_products);
router.get('/:id', ProductController.get_product);
router.post('/', ProductController.create_product);
router.put('/:id', ProductController.update_product);
router.delete('/:id', ProductController.delete_product);

module.exports = router;