const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { generateCode, fixCode, correctCode, generateImage, generateProject } = require('../controllers/aiController');

router.post('/generate-code', protect, generateCode);
router.post('/fix-code', protect, fixCode);
router.post('/correct-code', protect, correctCode);
router.post('/generate-image', protect, generateImage);
router.post('/generate-project', protect, generateProject);

module.exports = router;
