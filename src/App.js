import { useState } from 'react';
import './App.css';
import MainNavigation from './Components/Navigation/MainNavigation';
import AddTask from './Components/Tasks/AddTask';
import ShowTask from './Components/Tasks/ShowTask';
import SignIn from './Components/UserActivity/SignIn';


function App() {
  const [tasks, setTasks] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const AddTaskHandler = (task) => {
    setTasks([...tasks, task])
  }
  const deleteTask = (id) => {
    setTasks((current) => {
      return (
        current.filter(task => task.id !== Number(id)))
    })
    // setTasks(tasks.filter(task => task.id !== Number(id)))

  }
  const findTask = (taskSearched) => {

    setSearchValue(taskSearched);
  }

  return (
    <>
      <SignIn />
      {/* <MainNavigation findTask={findTask} />
      <AddTask onAdd={AddTaskHandler} />
      <ShowTask searchedValue={searchValue} tasks={tasks} onDLT={deleteTask} /> */}
    </>
  );
}

export default App;
