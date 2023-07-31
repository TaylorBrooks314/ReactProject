// import { useState,useEffect } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Recipes from './pages/Recipes'
import Recipe from "./pages/Recipe"
import {Routes, Route} from "react-router-dom"
import Header from './components/Header'

function App() {

  // const [data, setData]=useState([])

  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Recipes" element={<Recipes/>} />
      <Route path="/Recipes/:id" element={<Recipe/>} />
    </Routes>
    </div>
  )
}

export default App
