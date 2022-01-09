import React, { Fragment, useState } from "react";


const EditTask = ({ task, updateTask }) => {
  const { id } = task;
  const [title, setTitle] = useState(task.title);
  const [open, setOpen] = useState(false);
  let taskTitleModal = '';

//  const updateTask = async e => {
//    e.preventDefault();
 //   try {
   //     const body = {title};
     //   const response = await fetch(`http://localhost:3000/api/tasks/${task.id}`,{
       //     method: "PUT",
         //   headers: {"Content-Type": "application/json"},
           // body: JSON.stringify(body)
  //      });
    //    console.log(response);
      //  window.location = "/";
        
 //   } catch (err) {
     //   console.error(err.message);
   // }
//};



const handleUpdateTitleTask = () => {
  updateTask(id,taskTitleModal);
  handleClose();
}

const updateNewTitleTaskForm = (e) => {
  taskTitleModal = e.target.value
}
const handleClose = () => {
  setOpen(false);
};

return (
    <Fragment>
      <button
        type="button"
        className="btn bg-light border-primary text-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${task.id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        className="modal fade text-white bg-dark"
        id={`id${task.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
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
                onChange={updateNewTitleTaskForm}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-light border-primary text-primary"
                data-dismiss="modal"
                onClick={handleUpdateTitleTask}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn bg-light border-danger text-danger"
                data-dismiss="modal"
                onClick={handleClose}
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