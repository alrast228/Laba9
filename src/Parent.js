import React, { useState } from "react";
import ColorPicker from './ColorPicker';

function Parent() {
    const [color, setColor] = useState('#00ff00');

    return (
        <div>
            <ColorPicker onChange={setColor} />

            <p style={{ color }}>Выберите цвет</p>
        </div>
    );
}

export default Parent;