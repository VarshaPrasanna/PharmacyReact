const express = require('express');
const router = express.Router();
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg') //Appending .jpg
    }
})

const upload = multer({ storage: storage });


const { PrescriptionContoller } = require('../controllers');
const { authenticationVerifier, accessLevelVerifier, isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', PrescriptionContoller.get_prescriptions);
router.get('/:userId', PrescriptionContoller.get_prescription);
router.post('/', upload.single('prescriptionImage'), PrescriptionContoller.post_prescription)
router.patch('/reply/:id', PrescriptionContoller.update_prescription)
router.delete('/', PrescriptionContoller.delete_prescriptions);
router.delete('/:id', PrescriptionContoller.delete_prescription);

module.exports = router;