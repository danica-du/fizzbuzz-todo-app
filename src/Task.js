import './styles/Task.css';

function Task(props) {
    return (
        <div className='task-container'
             onClick={() => props.onToggleTaskComplete(props.id)}
        >
            <span style={{ textDecoration: props.isCompleted ? "line-through" : "" }}
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