import  {useSelector} from "react-redux"
import { useState, useEffect } from "react"
// import Data from "./sampleData"
import {Link} from "react-router-dom"

export default function Recipes(){
 //to access input  
    const input =useSelector((state)=> state.input)
    // input.item, input.cuisine, input.diet, input.type

    // this allows for the user to narrow the search without errors
    let item
    let cuisine
    let diet
    let type
    if (input.item.length >0){
        item=`&query=${input.item}`
    }else{
        item=""
    }

    if(input.cuisine.length >0){
        cuisine=`&cuisine=${input.cuisine}`
    }else{
        cuisine=""
    }

    if(input.diet.length > 0){
        diet=`&diet=${input.diet}`
    }else{
        diet=""
    }
    if(input.type.length > 0){
        type=`&type=${input.type}`
    }else{
        type=""
    }
    const[data,setData]=useState([])
    console.log(item)
    console.log(cuisine)
    console.log(diet)

    useEffect(() => {
        getData()
        console.log("in the useEffect")
        },[])

 // retrieves data based on input
    async function getData(){
        console.log("in the getData")
        let apiKey= `apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}`
     // gets the ID
        let baseUrl= `https://api.spoonacular.com/recipes/complexSearch?`//{apiKey}&query=${input}
        const response= await fetch(`${baseUrl}${apiKey}${item}${cuisine}${diet}${type}&instructionsRequired=true`)
        const fetchedRecipes= await response.json()
        setData(fetchedRecipes.results)
        console.log(fetchedRecipes)
    }
    
    console.log(data)
    
    return(
        <div className="pageBackground recipes">
            <p className="title">Recipes</p>
            {data.map((recipe)=>{
                return(
                    <div key={recipe.id} >
                        <Link to={`/Recipes/${recipe.id}`} className="Link">{recipe.title}</Link>
                        <br />
                        <br/>
                        <img src={recipe.image} alt={recipe.title}/>
                    </div>
                )
            })}
            
        </div> 
    )
}
// {data.results.map((recipe) => {
    // return(
    //     <div key={recipe.id} >
    //         <Link to={`/Recipes/${recipe.id}`}>{recipe.title}</Link>
    //         <br />
    //         {/* wont allow me to do alt= `${recipe.title} Image` */}
    //         <img src={recipe.image} alt={recipe.title}/>
    //     </div>
//     )
// })}