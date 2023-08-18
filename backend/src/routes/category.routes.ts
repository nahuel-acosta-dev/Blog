import {Router} from 'express';
import * as categoryCtrl from '../controllers/category.controller';
import { validateSchema } from '../middlewares/validateSchema.middleware';
import {CreateCategorySchema} from '../schema/category.schema';
const router = Router();

router.get('/categories', categoryCtrl.getCategories);

router.get('/category/:id', categoryCtrl.getCategory);

router.post('/category', validateSchema(CreateCategorySchema), categoryCtrl.createCategory);

router.delete('/category/:id', categoryCtrl.deleteCategory);

router.put('/category/:id', categoryCtrl.updateCategory);


export default router;