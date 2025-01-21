import express from "express";
import { Router } from "express";
import { 
    createSyllabus, 
    getSyllabus, 
    updateSyllabus, 
    downloadSyllabus 
} from '../controllers/syllabus.controller.js'
import {upload} from '../middlewares/multer.middleware.js';
import {verifyJWT} from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/create',upload.single("syllabus"), createSyllabus);
router.get('/', getSyllabus);
router.patch('/:syllabusId/update',upload.single("syllabus"), updateSyllabus);
router.get('/:syllabusId/download', downloadSyllabus);

export default router

