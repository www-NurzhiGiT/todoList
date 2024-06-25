import React, { Component } from "react";
import AppHeader from "./components/appHeader/AppHeader";
import TodoSearch from "./components/todoSearch/TodoSearch";
import TodoList from "./components/todoList/TodoList";
import TodoAdd from "./components/todoAdd/TodoAdd";

export default class App extends Component {
  state = {
    todoData: [
      {
        title: "BMW",
        important: false,
        done: false,
        lineThrough: false,
        id: 1,
      },
      {
        title: "Mercedes-Benz",
        important: false,
        done: false,
        lineThrough: false,
        id: 2,
      },
      {
        title: "Honda",
        important: false,
        done: false,
        lineThrough: false,
        id: 3,
      },
      {
        title: "Lexus",
        important: false,
        done: false,
        lineThrough: false,
        id: 4,
      },
      {
        title: "Toyota",
        important: false,
        done: false,
        lineThrough: false,
        id: 5,
      },
    ],
    status: "all", //active, done
    search: "",
  };
  filter = (array, status) => {
    switch (status) {
      case "all":
        return array;
      case "active":
        return array.filter((el) => !el.done);
      case "done":
        return array.filter((el) => el.done);
      default:
        return;
    }
  };
  setStatus = (statusName) => {
    this.setState({ status: statusName });
  };
  // // --- --- Удаление ---
  // // delTodo = (id) => {
  // //   this.setState((State) => {
  // //     return {
  // //       todoData: State.todoData.filter((el) => el.id !== id),
  // //     };
  // //   });
  // // };
  delTodo = (id) => {
    this.setState((prevState) => {
      return {
        todoData: prevState.todoData.filter((el) => el.id !== id),
      };
    });
  };
  // // --- --- Click Span \ Клик на текст оно подчёрнится  ---
  onLabelClick = (id) => {
    this.setState((prevState) => {
      return {
        todoData: prevState.todoData.map((el) => {
          if (el.id === id) {
            return { ...el, done: !el.done };
          }
          return el;
        }),
      };
    });
  };
  // // --- --- ---
  // toggleBold = (id) => {
  // //   this.setState((prevState) => {
  // //     const newTodoData = prevState.todoData.map((item) => {
  // //       if (item.id === id) {
  // //         return { ...item, bold: !item.bold };
  // //       }
  // //       return item;
  // //     });
  // //     return { todoData: newTodoData };
  // //   });
  // // };
  // // --- --- Important разделили на два часть и выбрали выбранного ---
  impTodo = (id) => {
    // console.log(id);
    const index = this.state.todoData.findIndex((el) => el.id === id);
    // console.log(index);
    const before = this.state.todoData.slice(0, index);
    // console.log(before);
    const after = this.state.todoData.slice(index + 1);
    // console.log(after);
    const todo = this.state.todoData[index];
    // console.log(todo);
    const updTodo = { ...todo, important: !todo.important };
    // console.log(updTodo);
    this.setState({ todoData: [...before, updTodo, ...after] });
  };
  // // --- --- TodoAdd \  ---
  addTodo = (text) => {
    console.log(text);
    const ids = this.state.todoData.map((el) => el.id);
    // console.log(ids.at(-1) +1 || 1);
    const newTodo = {
      title: text,
      done: false,
      important: false,
      // id: this.state.todoData.length + 1,
      id: ids.at(-1) + 1 || 1,
    };
    this.setState({ todoData: [...this.state.todoData, newTodo] });
  };
  // Метод toLowerCase() возвращает значение строки, преобразованное в нижний регистр. Метод toLowerCase() не изменяет значение самой строки.
  // Метод includes() экземпляров Array определяет, содержит ли массив определенное значение, возвращая true или false.
  searchTodos = (array, term) => {
    if (term.length === 0) {
      return array;
    }
    return array.filter((el) =>
      el.title.toLowerCase().includes(term.toLowerCase())
    );
  };

  setSearch = (term) => {
    this.setState({ search: term });
  };

  render() {
    const { todoData, status, search } = this.state;
    const todos = this.searchTodos(this.filter(todoData, status), search);
    // const todos = this.filter(this.state.todoData, this.state.status);

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div style={{ width: "400px", margin: "0 auto" }}>
        <AppHeader todoCount={todoCount} doneCount={doneCount} />
        <TodoSearch
          onSetStatus={this.setStatus}
          status={status}
          onSearch={this.setSearch}
        />
        <TodoList
          del={this.delTodo}
          // без фильтр
          // todo={this.state.todoData}
          // с фильтром
          todo={todos}
          onImpTodo={this.impTodo}
          onLabelClick={this.onLabelClick}
          // toggleBold={this.toggleBold}
        />
        <TodoAdd onAdd={this.addTodo} />
      </div>
    );
  }
}
