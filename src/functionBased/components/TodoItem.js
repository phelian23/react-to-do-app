import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const {
    deleteTodoProps, handleChangeProps, setUpdate, todo,
  } = props;

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => () => {
  }, []);

  return (
    <li className="list-item">
      <div onDoubleClick={handleEditing} style={viewMode} className="todo-task disflex">
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null} className="title-text">{title}</span>
        <button onClick={() => deleteTodoProps(id)} className="delete-btn" type="button">Delete</button>
      </div>
      <input
        type="text"
        style={editMode}
        className="text-input"
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    },
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
