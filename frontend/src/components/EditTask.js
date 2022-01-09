import React, { Fragment, useState } from "react";

const EditTask = ({ task }) => {
  const [title, setTitle] = useState(task.title);

  const updateTitle = async e => {
    e.preventDefault();
    try {
      const body = { title };
      const response = await fetch(
        `https://ensolvers-back.herokuapp.com/api/tasks/${task.id}`,
        {
          method: "PATCH",
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
        data-bs-toggle="modal"
        data-bs-target={`#id${task.id}`}
      >
        Edit
      </button>
      <div
        className="modal fade"
        id={`id${task.id}`}
        role="dialog"
        aria-hidden="true"
        aria-labelledby="title-label"
        onClick={() => setTitle(task.title)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"
              id="title-label">Edit Task</h4>
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
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-light border-primary text-primary "
                data-dismiss="modal"
                onClick={e => updateTitle(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn bg-light border-danger text-danger"
                data-dismiss="modal"
                onClick={() => {window.location = "/";}}
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
