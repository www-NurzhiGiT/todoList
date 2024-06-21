import React from "react";
import TodoListItem from "../todoListItem/TodoListItem";

const TodoList = ({ todo, del, toggleBold }) => {
  return (
    <ul className="list-group">
      {todo.map((el) => (
        <li className="list-group-item" key={el.id}>
          <TodoListItem
            title={el.title}
            id={el.id}
            delNote={del}
            toggleBold={toggleBold}
            nn={el.bold}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
