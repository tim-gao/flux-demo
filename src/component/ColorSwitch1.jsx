import React, { Component } from 'react';
import '../App.css';

class ColorSwitch extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      count: 0
    }
    this.addCounterClick = this.addCounterClick.bind(this);
  }
  addCounterClick (){
    this.setState((prestate) =>{
      return {
        color: prestate.color === 'red' ? 'green' : 'red',
        count: prestate.count + 1
      }
    })
  }
  render() {
    return (
      <div className="playground" style={{'backgroundColor':this.state.color}}>
        <span>{this.state.count}</span>
        <button onClick={this.addCounterClick}>Toggle background</button>
      </div>
    );
  }
}

export default ColorSwitch;