const express = require('express');
const router = express.Router();

const { OrderController } = require('../controllers');
const { authenticationVerifier, accessLevelVerifier, isAdminVerifier } = require('../middlewares/verifyToken');
router.get('/popular', OrderController.get_popular);
router.get('/', OrderController.get_orders);
router.get('/:userId', OrderController.get_order);
router.post('/', OrderController.create_order);

router.put('/:id', OrderController.update_order);

router.delete('/:id', isAdminVerifier, OrderController.delete_order);


module.exports = router;