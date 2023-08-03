import { useEffect, useState } from "react"
// import { Data2, } from "./sampleData"
import { useParams } from "react-router-dom"



export default function Recipe() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    // use params to get id to make call for single recipe
    let params = useParams()
    let id = params.id

    useEffect(() => {
        getData()
    }, [])

    // retrieves data based on input
    async function getData() {
        console.log("in the getData")
        let apiKey =  `apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}`
        let baseUrl = `https://api.spoonacular.com/recipes/${id}/information?`//{apiKey}&query=${input}
        const response = await fetch(`${baseUrl}${apiKey}`)
        const fetchedRecipe = await response.json()
        setLoading(false)
        setData(fetchedRecipe)
        //got it !!  
        console.log(fetchedRecipe)
        console.log(data)
    }
    
    console.log(data)
    return (
        // we need the 
        // ingredients
        // summary 
        // servings
        // price per serving
        // instructions
        <div className="recipe">
            {loading? <>Loading...</>:
            <p className="title">{data.title}</p>}
            <div className="all">
                <img src={data.image} className="dish"/>
                {/* formatted weird */}
                <div className="summary">
                    <p className="Label">Summary</p>
                    <p >{data.summary && data.summary.replace(/<[^>]*>?/gm, '')}</p>
                </div>
                <div className="servings">
                    <p className="Label">Serving Information</p>
                    <p >Number of servings: {data.servings}</p>
                    <p >Price per serving: ${(data.pricePerServing/100).toFixed(2)}</p>
                    <p> Total price: ${data.servings * (data.pricePerServing/100).toFixed(2)}</p>
                    <img src={`https://api.spoonacular.com/recipes/${id}/nutritionLabel.png?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}`} className="nutriLabel"/>
                </div>
                <div className="instructions">
                    <p className="Label">Instructions</p>
                    <ol >
                        {data.analyzedInstructions && data.analyzedInstructions[0].steps.map((step) => {
                            return (
                                    
                                <div key={step.number}>
                                    <li>{step.step}</li>
                                    <input type="checkbox"></input>
                                </div>

                            )
                        })}
                    </ol>
                </div>

                <div className="ingredientList">
                    <p className="Label">Ingredients</p>
                    <ul>
                        {data.extendedIngredients && data.extendedIngredients.map((ingredient) => {
                            return (
                                // can add {ingredient.image}?
                                <div key={ingredient.id} className="ingredient">
                                    <input type="checkbox"></input>
                                    <li>{ingredient.name}</li>
                                    <p>{ingredient.amount} {ingredient.unit}</p>
                                </div>

                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
