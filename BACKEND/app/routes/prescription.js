const express = require('express');
const router = express.Router();

const { PrescriptionContoller } = require('../controllers');
const { authenticationVerifier, accessLevelVerifier, isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', PrescriptionContoller.get_prescriptions);
router.get('/:userId', PrescriptionContoller.get_prescription);
router.post('/', PrescriptionContoller.post_prescription)
router.patch('/reply/:id', PrescriptionContoller.update_prescription)

module.exports = router;