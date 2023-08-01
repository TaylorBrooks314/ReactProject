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
            <img src="assets\images\Web capture_31-7-2023_125848_www.logomaker.com.jpeg" className="headerImg"/>
            </div>
        </div>
    )
}