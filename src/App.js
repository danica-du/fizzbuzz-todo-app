import { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './Header.js';
import TaskList from './TaskList.js';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import axios from "axios";

// Free fake API for testing: https://jsonplaceholder.typicode.com/todos/

function App(props) {
  // const [data, setData] = useState(props.initialData);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/", {
      params: {
        _limit: 5
      }
    })
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])

  function handleTaskCreate(newContent) {
    const newTask = {
      id: generateUniqueID(),
      title: newContent,
      completed: false
    }

    // The data won't actually be updated on the server because this API
    // is fake and for testing only, but this would be the syntax
    axios.post("https://jsonplaceholder.typicode.com/todos/", newTask)
    .then((res) => {
      console.log("successfully created")
    })
    .catch((err) => {
      console.error(err)
    })

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
