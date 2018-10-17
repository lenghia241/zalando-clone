import React, { Component, Fragment } from "react";
import axios from "axios";
class Todo extends Component {
  state = { todo: [], newTodo: "", editItem: "", editTodo: "" };

  getData = () => {
    axios
      .get("http://localhost:5000/api/todo")
      .then(data => {
        this.setState({
          todo: data.data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getData();
  }

  addNewTodo = () => {
    const options = {
      todo: this.state.newTodo
    };
    axios
      .post("http://localhost:5000/api/todo", options)
      .then(() => this.getData())
      .then(() => this.setState({ newTodo: "" }))
      .catch(err => console.log(err));
  };

  onDeleteTodo = id => {
    axios
      .delete(`http://localhost:5000/api/todo/${id}`)
      .then(() => this.getData())
      .catch(err => console.log(err));
  };

  onEditTodo = (id, value) => {
    // const index = this.state.todo.findIndex(item => item._id === id);
    this.setState({
      editItem: id,
      editTodo: value
    });
  };

  onSaveEdit = id => {
    axios
      .put(`http://localhost:5000/api/todo/${id}`, {
        todo: this.state.editTodo
      })
      .then(() => this.getData())
      .then(() =>
        this.setState({
          editItem: "",
          editTodo: ""
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    const { editItem, todo, newTodo, editTodo } = this.state;
    const mapTodo = todo.map(todo => (
      <li key={todo._id}>
        {editItem === todo._id ? (
          <Fragment>
            <input
              type="text"
              name="editTodo"
              value={editTodo}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />

            <button
              className="btn wave-effect"
              onClick={() => this.onSaveEdit(todo._id)}
            >
              Save
            </button>
            <button
              className="btn wave-effect"
              onClick={() => this.onDeleteTodo(todo._id)}
            >
              X
            </button>
          </Fragment>
        ) : (
          <Fragment>
            {todo.todo}

            <button
              className="btn wave-effect"
              onClick={() => this.onEditTodo(todo._id, todo.todo)}
            >
              Edit
            </button>
            <button
              className="btn wave-effect"
              onClick={() => this.onDeleteTodo(todo._id)}
            >
              X
            </button>
          </Fragment>
        )}
      </li>
    ));

    return (
      <div>
        <h1>Todo App</h1>
        <ul>{mapTodo}</ul>
        <input
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button className="btn wave-effect" onClick={this.addNewTodo}>
          Add
        </button>
      </div>
    );
  }
}

export default Todo;
