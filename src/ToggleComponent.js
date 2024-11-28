import React, {useState} from "react";
 
function ToggleComponent() { 
    const [isVisible, setIsVisible] = useState(true); 
 
    return ( 
        <div> 
            {isVisible && <p>Этот текст можно скрыть</p>} 
            <button onClick={() => setIsVisible(!isVisible)}> 
                {isVisible ? 'Есть' : 'Нет'}   
            </button> 
        </div> 
    ) 
} 
 
export default ToggleComponent;