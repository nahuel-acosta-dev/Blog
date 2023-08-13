import {Router} from 'express';
import * as categoryCtrl from './category.controller';

const router = Router();

router.get('/categories', categoryCtrl.getCategories);

router.get('/category/:id', categoryCtrl.getCategory);

router.post('/category', categoryCtrl.createCategory);

router.delete('/category/:id', categoryCtrl.deleteCategory);

router.put('/category/:id', categoryCtrl.updateCategory);


export default router;