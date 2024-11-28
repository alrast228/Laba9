import React from "react";

function TodoList2({ tasks }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    );
}

export default TodoList2;