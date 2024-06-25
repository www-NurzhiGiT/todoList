import React, { Component } from "react";

export default class TodoSearch extends Component {
  //DRY=Сухой  -Don't Repeat Yourself = Не Повторяй Самому Себя
  btns = [
    { name: "all", title: "All" },
    { name: "active", title: "Active" },
    { name: "done", title: "done" },
  ];

  handleSearch = (el) => {
    this.props.onSearch(el.target.value);
  };

  render() {
    const buttons = this.btns.map((el) => {
      const active = this.props.status === el.name;
      const clazz = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          type="button"
          onClick={() => this.props.onSetStatus(el.name)}
          key={el.title}
          className={`btn ${clazz}`}
        >
          {el.title}
        </button>
      );
    });
    return (
      <div className="todo-search d-flex">
        <input
          type="text"
          className="form-control"
          onChange={this.handleSearch}
          placeholder="Поиск Автомобилей"
        />

        {/* <button className="btn btn-info">All</button>
        <button className="btn btn-outline-secondary">Active</button>
        <button className="btn btn-outline-secondary">Done</button> */}
        {buttons}
      </div>
    );
  }
}
