import React, { Component } from "react";
import AppHeader from "./components/appHeader/AppHeader";
import TodoSearch from "./components/todoSearch/TodoSearch";
import TodoList from "./components/todoList/TodoList";
import TodoAdd from "./components/todoAdd/TodoAdd";

export default class App extends Component {
  state = {
    todoData: [
      {
        title: "Drink Coffee",
        important: false,
        done: false,
        bold: false,
        lineThrough: false,
        id: 1,
      },
      {
        title: "Make Awesome App",
        important: false,
        done: false,
        bold: false,
        lineThrough: false,
        id: 2,
      },
      {
        title: "Have a lunch",
        important: false,
        done: false,
        bold: false,
        lineThrough: false,
        id: 3,
      },
    ],
  };
  // --- --- ---
  delTodo = (id) => {
    this.setState((State) => {
      return {
        todoData: State.todoData.filter((el) => el.id !== id),
      };
    });
  };
  // --- --- ---
  onLabelClick = (id) => {
    this.setState((State) => {
      return {
        todoData: State.todoData.map((el) => {
          if (el.id === id) {
            return {
              ...el,
              lineThrough: !el.lineThrough,
            };
          }
          return el;
        }),
      };
    });
  };
  // --- --- ---
  toggleBold = (id) => {
    this.setState((prevState) => {
      const newTodoData = prevState.todoData.map((item) => {
        if (item.id === id) {
          return { ...item, bold: !item.bold };
        }
        return item;
      });
      return { todoData: newTodoData };
    });
  };
  // --- --- ---
  render() {
    return (
      <div style={{ width: "400px", margin: "0 auto" }}>
        <AppHeader />
        <TodoSearch />
        <TodoList
          toggleBold={this.toggleBold}
          del={this.delTodo}
          todo={this.state.todoData}
          onLabelClick={this.onLabelClick}
          onMarkImportant={this.onMarkImportant}
        />
        <TodoAdd />
      </div>
    );
  }
}
