import { useNavigate } from "react-router-dom"
export default function Header(){
    const navigate = useNavigate()

    function handleClick(){
        navigate("/");
        window.location.reload();
    }
    return(
        <div>
            <button onClick={handleClick} className="top">Search again</button>
            <div className="Header">
            <img src="./assets/images/logo.jpeg" className="headerImg"/>
            </div>
        </div>
    )
}