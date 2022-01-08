import React, {Fragment, useState} from "react";

const InputTask = () => {

    const [title, setTitle] = useState('');

    const onSubmitForm = async e =>{
        e.preventDefault();
        try {
            const body = {title};
            const response = await fetch("http://localhost:3000/api/tasks",
            {
                method:"POST", 
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(body) 
            });

        console.log(response);
        } catch (err) {
            console.log(err.message);
        }
    }
    return ( 
        <Fragment>
            <h1 className="text-center my-5">Input Task</h1>
            <form className="d-flex"
            onSubmit={onSubmitForm}>
                <input type="text" placeholder="add
                 task" className="form-control"
                 value={title} onChange={e=> setTitle(e.target.value)} /> 
                 <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
        
        
 )};

export default InputTask;