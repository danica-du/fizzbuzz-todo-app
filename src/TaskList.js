import './styles/TaskList.css';
import Task from './Task';

function TaskList(props) {
  return (
    <div className='tasklist-wrapper'>
      {props.data.map((task) => <Task key={task.id}
                                      onTaskDelete={props.onTaskDelete}
                                      {...task} />)
      }
    </div>
  );
}

export default TaskList;
