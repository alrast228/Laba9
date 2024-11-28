import React, { useState } from "react";
import ToggleButton from './ToggleButton';

function ToggleParent() {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <div>
            <ToggleButton onToggle={toggleVisibility} />
            {isVisible ? <p>АААААААААА</p> : null}
        </div>
    );
}

export default ToggleParent;