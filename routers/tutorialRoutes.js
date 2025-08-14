import express from 'express';
import { getTutorials, createTutorial } from '../controllers/tutorialController.js';
import { upload } from "../middlewares/upload.js";
const router = express.Router();

router.get('/tutorial', getTutorials);
router.post('/tutorial',upload.single("video"), createTutorial);

export default router;
