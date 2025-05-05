const mongoose = require('mongoose');
const Recipe = require('../models/recipe');

const getRecipe = async (req, res) => {
    try {
        const getRecipe = await Recipe.find();
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFilterRecipe = async (req, res) => {
    try {
        const getFilterRecipe = await Recipe.findById(req.params.id);
        res.json(recipe);
    } catch (error) {
        res.status(500), json({ message: error.message });
    }
};

const createRecipe = async (req, res) => {
    try {
        const { title, ingredients , steps, cookingTime } = req.body;
        const recipe = new Recipe({ title, ingredients, steps, cookingTime});
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteRecipe = async (req, res) => {
    try {
        await recipe.findByIdAndDelete(req.params.id);
        res.json({ message: "recipe deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateRecipe = async (req, res) => {
    try {
        await recipe.updateOne(req.param.id);
        res.json({ message: " recipe updated " });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getRecipe,
    createRecipe,
    deleteRecipe,
    getFilterRecipe,
    updateRecipe
};


