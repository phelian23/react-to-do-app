import React, { Component } from 'react';

class InputTodo extends Component {
    state = {
        title: "",
        errMsg: "",
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
        this.props.addTodoProps(this.state.title);
  this.setState({
    title: "",
  })
} else {
    this.setState({
        errMsg: "Please add item"
    })
}
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <span>{this.state.errMsg}</span><br />
                <input type="text" name="title" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} />
                <button>Submit</button>
            </form>
        );
    }
}
 
export default InputTodo;