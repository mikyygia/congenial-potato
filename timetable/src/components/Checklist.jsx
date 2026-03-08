import { useRef, useState } from "react";

function Checklist() {
    const [tasks, setTasks] = useState([]);
    const taskRef = useRef(null);
    

    const handleTasks = () => {
        const newTask = taskRef.current.value;

        if (newTask == "") { return; } // don't log empty tasks

        const updatedTasks = [...tasks, {text: newTask, done: false}];
        setTasks(updatedTasks);
    };

    const handleDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i != index);
        setTasks(updatedTasks)
    }

    const handleToggle = (index) => {
        console.log("toggled");
        const updatedTasks = tasks.map((task, i) => {
            return i === index ? {...task, done: !task.done} : task
        })

        setTasks(updatedTasks)
    }

    return (
        <div>
            <input
                type="text"
                ref={taskRef}
                onClick={(e) => {e.target.value = null}}
                placeholder="add a task"
            /> 

            <button onClick={() => handleTasks()}>+</button>
            <div className="tasks-area">
                <ul>
                    {tasks.map((task, index) => {
                        return (
                        <li key={index}>
                            <button 
                                className={task.done ? "checked-task" : "unchecked-task"} 
                                onClick={() => handleToggle(index)}></button>
                            {task.text}
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Checklist;
    