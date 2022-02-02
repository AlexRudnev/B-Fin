import './Landing.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';



function Landing () {
    const [isActive, setActive] = useState(false);

   const hide = () => {
        setActive(!isActive);
        isActive ? console.log("a"): console.log("b");
   }
    return (
    <div>
        <div className = { isActive ? "closeField" : "field"} >
           <div className="formelement logotype">
                <h3>B-fin</h3>
            </div>
            <div className ="formelement links">
                <Link to = "/home">
                    <div className="element home">
                        <h3>Главная</h3>
                    </div>
                </Link>
                <Link onClick={hide} to ="/registration"  >
                    <div  className="element registration" >
                        <h3>Регистрация</h3>
                    </div>
                </Link>
            </div>
            
        </div>
        
    </div>
    )
}

export default Landing;