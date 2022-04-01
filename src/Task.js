import './styles/Task.css';

function Task(props) {
  return (
    <div className='task-container'>
      <span style={{ textDecoration: props.isCompleted ? "line-through" : "" }}
            onClick={() => props.onToggleTaskComplete(props.id)}
      >
        {props.content}
      </span>
      <button className='delete-btn'
              onClick={() => props.onTaskDelete(props.id)}>
        X
      </button>
    </div>
  );
}

export default Task;