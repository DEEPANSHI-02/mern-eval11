const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    
    title: {
        type:String
    },
    ingredients: {
        type: String
    },
    steps: {
        type:String
    },
    cookingTime: {
        type: Number
    }

})
    
module.exports = mongoose.model("Recipe", recipeSchema);
    
