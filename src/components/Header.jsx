import { useNavigate } from "react-router-dom"
export default function Header(){
    const navigate = useNavigate()

    function handleClick(){
        navigate("/");
        window.location.reload();
    }
    console.log("version 1")
    return(
        <div>
           
            <button onClick={handleClick} className="top">Search again</button>
            <div className="Header">
            <img src="src\assets\logo.jpeg" className="headerImg"/>
            </div>
        </div>
    )
}