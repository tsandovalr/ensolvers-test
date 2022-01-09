import { Fragment } from 'react';
import InputTask from './components/InputTask';
import './App.css';
import ListTasks from './components/ListTasks';

function App() {
  return (
    <Fragment>
      <div className='container'>
      <ListTasks />
      <InputTask />
      </div>
     
    </Fragment>
  );
}

export default App;
