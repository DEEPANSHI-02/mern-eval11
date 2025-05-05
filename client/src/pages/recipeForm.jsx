import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function recipeManager  () {
    
    const [title, setTitle] = useState('');
    const [Ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [time, setTime] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !Ingredients || !steps) {
            alert('All fields are required!');
            return;
          }
        
    await axios.post('http://localhost:8001/recipe', {
        title,
        Ingredients,
        steps,
        time
    });
    // navigate('/recipeItem');
    };

    return (
        <>
             <form onSubmit={handleSubmit}>
            <input placeholder="Recipe title" type="text" name="Recipe title"  value ={title}   onChange= {(e) => setTitle(e.target.value)}/>
            <input placeholder="enter ingredients" type="text" name="Ingredients"  value={Ingredients} onChange= {(e) => setIngredients(e.target.value)}/>
            <textarea placeholder="enter steps" name="Steps"  value={steps}  onChange= {(e) => setSteps(e.target.value)}/> 
                <input placeholder="enter time" name="CookingTime" value={time} onChange={(e) => setTime(e.target.value)} />
                <button>Add</button>
            </form>
        </>
    )
}

export default recipeManager;



