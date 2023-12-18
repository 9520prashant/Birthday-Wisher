import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const HomeCard:React.FC = () => {
 const navigate = useNavigate();
 const [name, setName] = useState("");

 const handleClick = () =>{
    if(name === ''){
        return alert("You did not Enter any Name!");
    }
     navigate(`/birthday?name=${name}`)
 }

  return (
    <div className="upper-wrapper">
    <div className="home-card-wrapper">
        <p>Enter Your Name</p>
        <div className="input-container"> 
            <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleClick}>Done</button>
        </div>
        {/* <span onClick={() => navigate('/me')}>Made by- Praash</span> */}
    </div>
    </div>
  )
}

