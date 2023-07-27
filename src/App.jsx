import { useState,useEffect } from 'react'
import './App.css'
import Homepage from './pages/Homepage'

function App() {

  // const [data, setData]=useState([])

  // async function getdata(){
    // let url= ""
    // // apiKey=8257c75632784d01af59abaed081edd6
    // let baseSearch= `https://api.spoonacular.com/recipes/complexSearch?`
    // const response= await fetch(`baseSearch`)
    // const data= await response.json()
    // let id=""
    // let baseInfo=`https://api.spoonacular.com/recipes/${id}/information?`
    // const response= await fetch()
    // const data= await response.json()
  // }
  useEffect(() => {
// getData()
  },[])
  return (
    <>
      <Homepage/>
    </>
  )
}

export default App
