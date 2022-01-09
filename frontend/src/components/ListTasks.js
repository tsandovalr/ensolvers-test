import React, { Fragment, useEffect, useState } from "react";
import { Checkbox} from "@material-ui/core";

import EditTask from "./EditTask";

const ListTasks = () => {

    const [tasks, setTasks] = useState([]);
    
    


    const getTasks = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/tasks")
            const jsonData = await response.json();

            setTasks(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    const deleteTask = async (id) => {
        try {
            const deleteTask = await fetch(`http://localhost:3000/api/tasks/${id}`, {
                method: "DELETE"
            });
            console.log(deleteTask);

            setTasks(tasks.filter(task => task.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTasks();
    }, []);

    return <Fragment>
        <table className="table mt-5 text-white bg-dark text-center">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {/*
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                */}
                {tasks.map(task => (
                    <tr key={task.id}>
                        
                        <td>
                        <Checkbox  />
      
                        </td>
                        <td>{task.title}</td>
                        
                        <td>
                            <EditTask task={task}/>
                        </td>
                        <td>
                            <button
                                className="btn bg-light border-danger text-danger"
                                onClick={() => deleteTask(task.id)}
                            >
                                Delete
                                </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
};

export default ListTasks;