import React, { Component } from "react";

export default class TodoListItem extends Component {
  render() {
    // console.log(this.props.title);
    // console.log(this.props.delNote);
    // console.log(this.props.toggleBold);

    const { id, aty, bold, lineThrough, onLabelClick } = this.props;

    const itemStyle = {
      fontWeight: bold ? "bold" : "normal",
      color: bold ? "Orange" : "black",
      cursor: "pointer",
      textDecoration: lineThrough ? "line-through" : "none",
    };

    return (
      <span className="d-flex align-items-center justify-content-between">
        <span
          className="flex-grow-1"
          style={itemStyle}
          onClick={() => onLabelClick(id)}
        >
          {aty}
        </span>
        <button
          className="btn btn-outline-danger"
          onClick={() => this.props.delNote(this.props.id)}
        >
          <i className="bi bi-trash"></i>
        </button>

        <button
          className="btn btn-outline-success"
          onClick={() => console.log("edit")}
        >
          <i className="bi bi-pen"></i>
        </button>
        <button
          className="btn btn-outline-warning"
          onClick={() => this.props.toggleBold(this.props.id)}
          // onClick={() => toggleBold(id)}
        >
          <i className="bi bi-shield-fill-exclamation"></i>
        </button>
      </span>
    );
  }
}
