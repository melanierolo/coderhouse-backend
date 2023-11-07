import express from 'express';
import { renderIndex, renderQuienesSomos } from '../controllers/index.js';

const router = express.Router();

router.get('/', renderIndex);

router.get('/quienesSomos', renderQuienesSomos);

export default router;
