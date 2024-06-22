import React from "react";
import TodoListItem from "../todoListItem/TodoListItem";

const TodoList = ({ todo, del, toggleBold, onLabelClick }) => {
  return (
    <ul className="list-group">
      {todo.map((el) => (
        <li className="list-group-item" key={el.id}>
          <TodoListItem
            aty={el.title}
            id={el.id}
            delNote={del}
            bold={el.bold}
            lineThrough={el.lineThrough}
            toggleBold={toggleBold}
            onLabelClick={onLabelClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
