import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  render() {
    const {
      id,
      title,
      lineThrough,
      delNote,
      onLabelClick,
      important,
      done,
      onImp,
    } = this.props;

    // изменяем свет orange и жирный
    // const itemStyle = {
    //   // fontWeight: bold ? "bold" : "normal",
    //   // color: bold ? "Orange" : "black",
    //   cursor: "pointer",
    //   textDecoration: lineThrough ? "line-through" : "none",
    // };

    // изменяем свет orange и жирный
    let clazz = "";
    if (important) {
      clazz += " imp";
    }
    if (done || lineThrough) {
      clazz += " done";
    }
    return (
      <span className="d-flex align-items-center justify-content-between">
        <span
          className={`flex-grow-1 ${clazz}`}
          // style={itemStyle}
          onClick={() => onLabelClick(id)}
        >
          {title}
        </span>
        <button className="btn btn-outline-danger" onClick={() => delNote(id)}>
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
          onClick={() => onImp(id)}
          // onClick={() => this.props.toggleBold(this.props.id)}
          // onClick={() => toggleBold(id)}
        >
          <i className="bi bi-shield-fill-exclamation"></i>
        </button>
      </span>
    );
  }
}
