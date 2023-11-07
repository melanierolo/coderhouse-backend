import express from 'express';
import {
  renderIndex,
  renderQuienesSomos,
  renderAllProducts,
} from '../controllers/index.js';
import { apiBaseUrl } from '../config.js';
import ProductManager from '../controllers/ProductManager.js';

const router = express.Router();

router.get('/', renderIndex);

router.get('/quienesSomos', renderQuienesSomos);

// In your route handler
router.get('/productos', renderAllProducts);

export default router;
