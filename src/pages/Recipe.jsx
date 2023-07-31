import { useEffect, useState } from "react"
// import { Data2, } from "./sampleData"
import { useParams } from "react-router-dom"



export default function Recipe() {
    let [data, setData] = useState({})
    let [nutriLabel,setNutriLabel]=useState([])
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
        setData(fetchedRecipe)
        //got it !!  
        console.log(fetchedRecipe)
        console.log(data)
        let baseUrl2=`https://api.spoonacular.com/recipes/${id}/nutritionLabel.png?`
        const response2= await fetch(`${baseUrl2}${apiKey}`)
        const fetchedImg = await response2.blob()
        setNutriLabel(fetchedImg)

    }
    console.log(data)
    return (
        // we need the ingredients
        // summary 
        // servings
        // price per serving
        // instructions
        <div className="recipe">
            
            <p className="title">{data.title}</p>
            <div className="all">
                <img src={data.image} />
                {/* formatted weird */}
                <div className="summary">
                    <p className="Label">Summary</p>
                    <p >{data.summary && data.summary.replace(/<[^>]*>?/gm, '')}</p>
                </div>
                <div className="servings">
                    <p className="Label">Serving Information</p>
                    <p >Number of servings: {data.servings}</p>
                    <p >Price per serving: ${(data.pricePerServing/100).toFixed(2)}</p>
                    <img src={nutriLabel}/>
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
