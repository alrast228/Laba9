import React, { useState } from "react";
import FoodItem from "./FoodItem";

function ParentCaloriesCalculator() {
    const [totalCalories, setTotalCalories] = useState(0);

    const handleCaloriesChange = (calories) => {
        setTotalCalories(prevTotal => prevTotal + calories);
    };

    return (
        <div>
            <h3>Калькулятор калорий</h3>
            <h4>Общее количество калорий: {totalCalories}</h4>
            <FoodItem name="Яблоко" calories={52} onCaloriesChange={handleCaloriesChange} />
            <FoodItem name="Банан" calories={89} onCaloriesChange={handleCaloriesChange} />
            <FoodItem name="Апельсин" calories={47} onCaloriesChange={handleCaloriesChange} />
            <FoodItem name="Яйцо" calories={68} onCaloriesChange={handleCaloriesChange} />
        </div>
    );
}

export default ParentCaloriesCalculator;