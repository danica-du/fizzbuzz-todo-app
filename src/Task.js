import './styles/Task.css';

function Task(props) {
  return (
    <div className='task-container'>
      <span style={{ textDecoration: props.completed ? "line-through" : "" }}
            onClick={() => props.onToggleTaskComplete(props.id)}
      >
        {props.title}
      </span>
      <button className='delete-btn'
              onClick={() => props.onTaskDelete(props.id)}>
        X
      </button>
    </div>
  );
}

export default Task;