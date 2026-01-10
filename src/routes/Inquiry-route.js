import express from 'express';
import { createInquiry, getInquiries } from '../controllers/Inquiry-controller.js';
const router = express.Router();

router.get('/',getInquiries)
router.post('/',createInquiry)


export default router