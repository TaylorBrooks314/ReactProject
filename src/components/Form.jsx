import {useState} from "react"


export default function Form(){
    const [input,setInput]=useState({
        item:"",
        cuisine:"",
        diet:""
    })
    
    function handleChange(evt){
        setInput({
            ...input,
            [evt.target.id]: evt.target.value})
    }
    console.log(input)
    function handleSubmit(){
        // go to page with recipe details
    }
//  value={input} onChange={handleChange()}
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="item">Search by Item</label>
            <input  id="item"value={input.item} onChange={handleChange} ></input>
            <br/>
            <label htmlFor="cuisine"> Search by Cuisine</label>
            <select name="cuisine" id="cuisine" value={input.cuisine} onChange={handleChange}>
                <option></option>
                <option>African</option>
                <option>Asian</option>
                <option>American</option>
                <option>British</option>
                <option>Cajun</option>
                <option>Caribbean</option>
                <option>Chinese</option>
                <option>Eastern European</option>
                <option>European</option>
                <option>French</option>
                <option>German</option>
                <option>Greek</option>
                <option>Indian</option>
                <option>Irish</option>
                <option>Italian</option>
                <option>Japanese</option>
                <option>Jewish </option>
                <option>Korean</option>
                <option>Latin American</option>
                <option>Mediterranean</option>
                <option>Mexican</option>
                <option>Middle Eastern</option>
                <option>Nordic</option>
                <option>Southern</option>
                <option>Spanish</option>
                <option>Thai</option>
                <option>Vietnamese</option>
            </select>
            <br/>
            <label htmlFor="diet">Select a Diet</label>
            <select name="diet" id="diet"value={input.diet} onChange={handleChange}>
                <option></option>
                <option>Gluten Free</option>
                <option>Ketogenic</option>
                <option>Vegetarian</option>
                <option>Lacto-Vegetarian</option>
                <option>Ovo-Vegetarian</option>
                <option>Vegan</option>
                <option>Pescatarian</option>
                {/* The api spells it Pescetarian */}
                <option>Paleo</option>
                <option>Primal</option>
                <option>Low FODMAP</option>
                <option>Whole30</option>
            </select>
            <br/>
            <button>Search</button>
        </form>
    )
}