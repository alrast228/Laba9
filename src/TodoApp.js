import React, { useState } from "react";
import TodoList2 from './TodoList2';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask(""); 
        }
    };

    return (
        <div>
            <h3>Список задач</h3>
            
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Добавьте новую задачу"
            />
            <button onClick={handleAddTask}>Добавить</button>

            <TodoList2 tasks={tasks} />
        </div>
    );
}

export default TodoApp;