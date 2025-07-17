import { useState } from 'react';

const CreateTask = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd({ text, completed: false, id: Date.now() });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a task..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CreateTask;
