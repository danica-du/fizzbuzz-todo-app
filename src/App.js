import { useState } from 'react';
import './styles/App.css';
import Header from './Header.js';
import TaskList from './TaskList.js';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function App(props) {
  const [data, setData] = useState(props.initialData);

  function handleTaskCreate(newContent) {
    const newTask = {
      id: generateUniqueID(),
      content: newContent,
      isCompleted: false
    }
    setData((data) => [...data, newTask])
  }

  function handleTaskDelete(taskID) {
    setData(data.filter((task) => {
      return task.id !== taskID
    }))
  }

  return (
    <div className='wrapper'>
      <div className='app-frame'>
        <Header onTaskCreate={handleTaskCreate} />
        <TaskList data={data} onTaskDelete={handleTaskDelete} />
      </div>
    </div>
  );
}

export default App;
