import React, { Component } from "react";

export default class TodoListItem extends Component {
  render() {
    console.log(this.props.title);
    // console.log(this.props.delNote);
    const { nn } = this.props;

    const itemStyle = {
      fontWeight: nn ? "bold" : "normal",
      color: nn ? "Orange" : "black",
      textDecoration: nn ? "line-through" : "none",
    };
    return (
      <span className="d-flex align-items-center justify-content-between">
        <span className="flex-grow-1" style={itemStyle}>
          {this.props.title}
        </span>
        <button
          className="btn btn-outline-danger"
          onClick={() => this.props.delNote(this.props.id)}
        >
          <i className="bi bi-trash"></i>
        </button>
        <button className="btn btn-outline-success">
          <i className="bi bi-pen"></i>
        </button>
        <button
          className="btn btn-outline-warning"
          onClick={() => this.props.toggleBold(this.props.id)}
        >
          <i className="bi bi-shield-fill-exclamation"></i>
        </button>
      </span>
    );
  }
}
