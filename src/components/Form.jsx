// import {useState} from "react"
import { setItem,setCuisine,setDiet, setType } from "./inputSlice";
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

export default function Form(){
 // state variable just incase not using redux
    // const [input,setInput]=useState({
    //     item:"",
    //     cuisine:"",
    //     diet:""  
    // })
    
 // for redux
    const input=useSelector((state)=> state.input)
    const dispatch=useDispatch()

 // for Router
    const navigate=useNavigate()

 // stores input into initial state(in slice file)
    function handleChange(evt){
        if(evt.target.id == "item"){
        dispatch(setItem(evt.target.value))
        }else if(evt.target.id == "cuisine"){
            dispatch(setCuisine(evt.target.value))
        }else if (evt.target.id == "diet"){
            dispatch(setDiet(evt.target.value))
        }else if(evt.target.id == "type"){
            dispatch(setType(evt.target.value))
        }
    
    // logic to setInput incase not using redux
        // setInput({
        //     ...input,
        //     [evt.target.id]: evt.target.value})
    }
    // console.log(input)

    function handleSubmit(e){
        // go to page with recipe details
        e.preventDefault();
        navigate('/Recipes')
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="item" className="Label">Search by Item </label>
            <input  id="item"value={input.item} onChange={handleChange} ></input>
            </div>
            <br/>
            <div>
            <label htmlFor="cuisine" className="Label"> Search by Cuisine </label>
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
            </div>
            <br/>
            <div>
            <label htmlFor="diet" className="Label">Select a Diet </label>
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
            </div>
            <br/>
            <div>
                <label htmlFor="type" className="Label">Select a type of meal</label>
                <select name="type" id="type" value={input.type} onChange={handleChange}>
                    <option></option>
                    <option>Main Course</option>
                    <option>Side Dish</option>
                    <option>Dessert</option>
                    <option>Appetizer</option>
                    <option>Salad</option>
                    <option>Bread</option>
                    <option>Breakfast</option>
                    <option>Soup</option>
                    <option>Beverage</option>
                    <option>Sauce</option>
                    <option>Marinade</option>
                    <option>Finger-food</option>
                    <option>Snack</option>
                    <option>Drink</option>
                </select>
            </div>
            <br />
            <button>Search</button>
        </form>
    )
}
{/* <label htmlFor="cuisine"> Search by Cuisine</label>
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
            //     <option>Paleo</option>
            //     <option>Primal</option>
            //     <option>Low FODMAP</option>
            //     <option>Whole30</option>
            // </select>
            // <br/> */}