import './styles/Header.css';
import { useState } from 'react';

function Header(props) {
  const [text, setText] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    props.onTaskCreate(text);
    setText('');
  }

  return (
    <div className='header-container'>
      <span>My Tasks</span>
      <div className='new-task-container'>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            placeholder='Enter new item'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className='add-btn'
                  disabled={!text}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;