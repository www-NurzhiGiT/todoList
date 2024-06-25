import React from "react";
import TodoListItem from "../todoListItem/TodoListItem";

// props.todo
const TodoList = ({ todo, del, onLabelClick, onImpTodo, onEdit }) => {
  return (
    <ul className="list-group">
      {todo.map((el) => (
        <li className="list-group-item" key={el.id}>
          <TodoListItem
            // aty={el.title}
            // id={el.id}
            // importand={el.importand}
            // done={el.done}
            {...el} /* <span>все можно заменить тримя точками (...el)</span> */
            delNote={del}
            onImp={onImpTodo}
            onEdit={onEdit}
            onLabelClick={onLabelClick}
            // lineThrough={el.lineThrough}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
