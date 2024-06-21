import React, { Component } from "react";
import AppHeader from "./components/appHeader/AppHeader";
import TodoSearch from "./components/todoSearch/TodoSearch";
import TodoList from "./components/todoList/TodoList";
import TodoAdd from "./components/todoAdd/TodoAdd";

export default class App extends Component {
  state = {
    todoData: [
      { title: "Drink Coffee", important: false, done: false, id: 1 },
      { title: "Make Awesome App", important: true, done: true, id: 2 },
      { title: "Have a lunch", important: true, done: true, id: 3 },
    ],
  };
  delTodo = (id) => {
    this.setState((State) => {
      return {
        todoData: State.todoData.filter((el) => el.id !== id),
      };
    });
  };
  boldTodo = (id) => {
    this.setState((prevState) => {
      const newTodoData = prevState.todoData.map((el) => {
        if (el.id === id) {
          return { ...el, bold: !el.bold };
        }
        return el;
      });
      return { todoData: newTodoData };
    });
  };
  render() {
    return (
      <div style={{ width: "400px", margin: "0 auto" }}>
        <AppHeader />
        <TodoSearch />
        <TodoList
          toggleBold={this.boldTodo}
          del={this.delTodo}
          todo={this.state.todoData}
        />
        <TodoAdd />
      </div>
    );
  }
}
