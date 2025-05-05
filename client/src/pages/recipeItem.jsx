import { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeQueries() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios.get('https://mern-eval11.onrender.com/recipe').then((res) => {
      setQueries(res.data);
    });
  });

  return (
   
      <h2>All Recipe </h2>
   
      
    {
      queries.length === 0 ? (
      <p>No queries yet.</p>
      ) 
  {
    queries.map((q) => {
      <h3>{q.title}</h3>
    
  }) }}
  );
}

export default RecipeQueries;
