const express = require('express');
const router = express.Router();

const { DiscussionBoardController } = require('../controllers');
const { authenticationVerifier, accessLevelVerifier, isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', DiscussionBoardController.get_messages);
router.get('/:userId', DiscussionBoardController.get_message);
router.post('/', DiscussionBoardController.post_message)
router.patch('/reply/:id', DiscussionBoardController.update_message)
router.delete('/', DiscussionBoardController.delete_messages);
module.exports = router;