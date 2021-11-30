import React, { useState, useEffect } from "react"

const TodoItem = props => {
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title } = props.todo

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  return (
    <li className='list-item'>
      <div onDoubleClick={handleEditing} style={viewMode} className='todo-task disflex'>
        <input
          type="checkbox"
          className='checkbox'
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null} className="title-text">{title}</span>
        <button onClick={() => props.deleteTodoProps(id)} className='delete-btn'>Delete</button>
      </div>
      <input
        type="text"
        style={editMode}
        className='text-input'
        value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem