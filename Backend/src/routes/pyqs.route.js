import express from "express";
import { Router } from "express";
// import RateLimit from "express-rate-limit";
import { 
    createPYQ, 
    getPYQ, 
    updatePYQ, 
    downloadPYQ 
} from '../controllers/pyqs.controller.js'
import {upload} from '../middlewares/multer.middleware.js';
import {verifyJWT} from '../middlewares/auth.middleware.js';

const router = Router();


// set up rate limiter: maximum of 100 requests per 15 minutes

// const limiter = RateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // max 100 requests per windowMs
// });

// router.use();
router.post('/create',upload.single("questionPaper"), createPYQ);
router.get('/', getPYQ);
router.patch('/:pyqId/update',upload.single("questionPaper"), updatePYQ);
router.get('/:pyqId/download', downloadPYQ);

export default router

