import React, { Fragment, useState } from "react";

const EditTask = ({ task }) => {
  const [title, setTitle] = useState(task.title);

  const updateTitle = async (e) => {
    e.preventDefault();
    try {
      const body = { title };
      const response = await fetch(
        `https://ensolvers-back.herokuapp.com/api/tasks/${task.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn bg-light border-primary text-primary "
        data-toggle="modal"
        data-target={`#id${task.id}`}
      >
        Edit
      </button>
      <div
        className="modal"
        id={`id${task.id}`}
        onClick={() => setTitle(task.title)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Task</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setTitle(task.title)}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-light border-primary text-primary "
                data-dismiss="modal"
                onClick={(e) => updateTitle(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn bg-light border-danger text-danger"
                data-dismiss="modal"
                onClick={() => setTitle(task.title)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTask;
