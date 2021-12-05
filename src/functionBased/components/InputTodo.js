import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
    errMsg: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      const { addTodoProps } = props;
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      setInputText({
        errMsg: 'Please Add Item',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <span>{inputText.errMsg}</span>
      <br />
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
