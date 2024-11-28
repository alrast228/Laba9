import React, { useState } from "react";

function FoodItem({ name, calories, onCaloriesChange }) {
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10) || 0;
        setQuantity(newQuantity);
        onCaloriesChange(newQuantity * calories); 
    };

    return (
        <div>
            <label>{name}: </label>
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="0"
            />
            <span> шт. (Калорий: {quantity * calories})</span>
        </div>
    );
}

export default FoodItem;