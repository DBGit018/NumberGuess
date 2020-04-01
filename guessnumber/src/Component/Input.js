import React, { Component } from "react";
export class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 100,
      inputVal: 0
    };
  }
  getInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkVal = () => {
    let UserInput = Number(this.state.inputVal);
    let Difference = Math.round(Math.random() * this.state.limit) - UserInput;
    let Balance = this.setState({ ...this.state.limit });

    if (Difference === 0) {
      alert("Correct");
      this.setState({ limit: this.state.limit + 100 });
    } else if (Difference >= 1 && Difference <= 4) {
      alert("Hot");
      return Balance;
    } else if (Difference >= 5 && Difference <= 14) {
      alert("Warm");
      return Balance;
    } else if (Difference >= 15) {
      alert("Cold");
      return Balance;
    }
  };

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.inputVal}
          onChange={this.getInput}
          name="inputVal"
        ></input>
        <button onClick={this.checkVal} className="btn">
          Check
        </button>
      </div>
    );
  }
}

export default Input;
