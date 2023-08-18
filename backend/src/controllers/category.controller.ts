import {RequestHandler, Response, Request, NextFunction} from 'express';
import Category from '../models/category.model';
import { CreateCategoryType } from '../schema/category.schema';


export const getCategories: RequestHandler = async (req, res) => {
    try{
        const categories = await Category.find();
        return res.json(categories);
    }
    catch(error) {
        return res.json(error)
    }
}

export const getCategory: RequestHandler = async (
    req: Request, 
    res: Response,
    next: NextFunction
    ) => {
    try{
        const categoryFound = await Category.findById(req.params.id);
        /*if(!categoryFound) return res.status(204).json();*/
        return res.json(categoryFound);
    }
    catch(error) {
        //res.json(error);
        next(error);
        return res.status(204).json("Category not found");
    }
    

}

export const createCategory: RequestHandler = async (
    req: Request<unknown, unknown, CreateCategoryType>, 
    res: Response,
    next: NextFunction
    ) => {
    try{
        const {title, description} = req.body;
        //const categoryFound = await Category.findOne({title: req.body.title});
        const categoryFound = await Category.findOne({title});
        
        if(categoryFound)
            return res.status(301).json({message: 'The title already exists.'});
    
        //const category = new Category(req.body);
        const category = new Category({title, description});
        const savedCategory = await category.save();
        console.log(category);
        return res.json(savedCategory);
    }
    catch(error) {
        next(error);
    }
}

export const updateCategory: RequestHandler = async (
    req: Request, 
    res: Response
    ): Promise<Response> => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!category) return res.status(204).json("Category not found");
        return res.json({
            message: "category updated",
            category
        });
}

export const deleteCategory: RequestHandler = async (
    req: Request, 
    res: Response
    ) => {
        const category = await Category.findByIdAndDelete(req.params.id);
        if(!category) return res.status(204).json("Category not found");
        return res.json({
            message: "category deleted",
            category
        });
    
}