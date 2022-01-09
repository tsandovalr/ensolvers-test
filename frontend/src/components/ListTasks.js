import React, { Fragment, useEffect, useState } from "react";
import { Checkbox } from "@material-ui/core";

import EditTask from "./EditTask";

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await fetch(
        "https://ensolvers-back.herokuapp.com/api/tasks"
      );
      const jsonData = await response.json();

      setTasks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      const deleteTask = await fetch(
        `https://ensolvers-back.herokuapp.com/api/tasks/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log(deleteTask);

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Fragment>
      <h1 style={{ color: "white" }} className="text-center my-5">
        Got any plans?{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-clipboard-check"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
        </svg>
      </h1>
      <table className="table mt-5 text-white bg-dark text-center">
        <thead>
          <tr>
            <th>Status</th>
            <th>Task</th>
            <th>Edit your Task</th>
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
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                <Checkbox />
              </td>
              <td style={{ paddingTop: "15px" }}>{task.title}</td>

              <td>
                <EditTask task={task} />
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
  );
};

export default ListTasks;
