import {RequestHandler} from 'express';
import Category from '../routes/category';


export const getCategories: RequestHandler = async (req, res) => {
    try{
        const categories = await Category.find();
        return res.json(categories);
    }
    catch(error) {
        return res.json(error)
    }
}

export const getCategory: RequestHandler = async (req, res) => {
    try{
        const categoryFound = await Category.findById(req.params.id);
        /*if(!categoryFound) return res.status(204).json();*/
        return res.json(categoryFound);
    }
    catch(error) {
        //res.json(error);
        return res.status(204).json("Category not found");
    }
    

}

export const createCategory: RequestHandler = async (req, res) => {
    const categoryFound = await Category.findOne({url: req.body.url});
    if(categoryFound)
        return res.status(301).json({message: 'The title already exists.'});

    const category = new Category(req.body);
    const savedCategory = await category.save();
    console.log(category);
    return res.json(savedCategory);
}

export const updateCategory: RequestHandler = async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!category) return res.status(204).json("Category not found");
        return res.json({
            message: "category updated",
            category
        });
}

export const deleteCategory: RequestHandler = async (req, res) => {
        const category = await Category.findByIdAndDelete(req.params.id);
        if(!category) return res.status(204).json("Category not found");
        return res.json({
            message: "category deleted",
            category
        });
    
}