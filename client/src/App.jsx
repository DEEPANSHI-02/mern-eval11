import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import recipeManager from './pages/recipeForm'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="./pages/recipeForm" element={<recipeManager/>} />
    
    </Routes>
  </BrowserRouter>
  )
}

export default App





