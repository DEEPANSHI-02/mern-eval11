
const express = require('express');
const router = express.Router();
const {getRecipe, createRecipe, deleteRecipe, updateRecipe } = require('../controllers/recipeController');

router.post('/recipe', createRecipe);
router.get('/recipe', getRecipe);
// router.put('/recipe', updateRecipe)
router.delete('/recipe', deleteRecipe)
router.put('/recipe', updateRecipe)

module.exports = router;
