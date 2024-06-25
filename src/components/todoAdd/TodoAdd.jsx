import React, { Component } from "react";

export default class TodoAdd extends Component {
  state = {
    inputText: "",
  };
  setInputText = (event) => {
    // console.log(event.target.value);
    this.setState({ inputText: event.target.value });
  };
  inputTrim = () => {
    //   const { inputText } = this.state;
    //   if (inputText.trim()) {
    //     this.props.onAdd(inputText);
    //     this.setState({ inputText: "" });
    //   }
    // };
    if (this.state.inputText.trim()) {
      this.props.onAdd(this.state.inputText);
      this.setState({ inputText: "" });
    }
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.inputTrim();
    }
  };
  render() {
    return (
      <div className="d-flex">
        <input
          value={this.state.inputText}
          type="text"
          className="form-control"
          onChange={this.setInputText}
          placeholder="Добавить марки автомобилей"
          onKeyDown={this.handleKeyDown}
        />
        <button
          className="btn btn-info"
          // onClick={() => this.props.onAdd(this.state.inputText)}
          onClick={this.inputTrim}
        >
          Add
        </button>
      </div>
    );
  }
}
