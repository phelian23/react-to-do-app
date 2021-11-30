import React from 'react';

class TodoItem extends React.Component {
    state = {
        editing: false,
      }

    handleEditing = () => {
        this.setState({
            editing: true,
          })
      }

      handleUpdatedDone = event => {
        if (event.key === "Enter") {
          this.setState({ editing: false })
        }
      }
    
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        
        const { completed, id, title } = this.props.todo
        let viewMode = {}
let editMode = {}

if (this.state.editing) {
  viewMode.display = "none"
} else {
  editMode.display = "none"
}

        return <li>
            <div onDoubleClick={this.handleEditing} style={viewMode}>
        <input
        type = "checkbox"
        checked = {completed}
        onChange = {() => this.props.handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null}>
        {title}
        </span>
        <button onClick= {() => this.props.delTodoProps(id)}>Delete</button>
        </div>
        <input type="text" className="text-input" style={editMode} value={title} onChange={e => {
    this.props.setUpdate(e.target.value, id)
  }} onKeyDown={this.handleUpdatedDone} />
        </li>;
    }
}
 
export default TodoItem;