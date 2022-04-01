import { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './Header.js';
import TaskList from './TaskList.js';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import axios from "axios";

// Free fake API for testing: https://jsonplaceholder.typicode.com/todos/

function App(props) {
  const [data, setData] = useState(props.initialData);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/", {
      params: {
        _limit: 5
      }
    })
    .then((res) => {
      setData(res.data)
    })
  }, [])

  function handleTaskCreate(newContent) {
    const newTask = {
      id: generateUniqueID(),
      title: newContent,
      completed: false
    }
    setData((data) => [...data, newTask])
  }

  function toggleTaskComplete(taskID) {
    setData(data.map((task) =>
      (task.id === taskID) ? {...task, 'completed': !task.completed} : {...task}
    ))
  }

  function handleTaskDelete(taskID) {
    setData(data.filter((task) => {
      return task.id !== taskID;
    }))
  }

  return (
    <div className='wrapper'>
      <div className='app-frame'>
        <Header onTaskCreate={handleTaskCreate} />
        <TaskList data={data} onToggleTaskComplete={toggleTaskComplete} onTaskDelete={handleTaskDelete} />
      </div>
    </div>
  );
}

export default App;
