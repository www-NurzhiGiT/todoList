import React from "react";

const appHeader = ({ todoCount, doneCount }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h3>Todo List</h3>
      <h4>
        {todoCount} more todo {doneCount} done
      </h4>
    </div>
  );
};

export default appHeader;
