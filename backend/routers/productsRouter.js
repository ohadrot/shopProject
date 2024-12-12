import express from 'express'
import { get10MoreProductsByCategory, getAllProductsByIndex, getAllUniqueCategories} from '../controller/productsController.js';


const router = express.Router();



router.route('/:nextIndex').get(getAllProductsByIndex);
router.route('/category/all').get(getAllUniqueCategories);
// router.route('/:category').get(getProductsByCategory)
router.route('/:category/:nextIndex').get(get10MoreProductsByCategory);

export default router;