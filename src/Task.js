import './styles/Task.css';

function Task(props) {
    
    return (
        <div className='task-container'>
            {props.content}
            <button className='delete-btn'
                    onClick={() => {props.onTaskDelete(props.id)}}>
                X
            </button>
        </div>
    );
}

export default Task;