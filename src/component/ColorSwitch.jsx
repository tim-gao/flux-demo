import React, { Component } from 'react';
import ButtonAction from '../action/ButtonAction';
import ColorStore from '../store/ColorStore';
import '../App.css';

class ColorSwitch extends Component {
  constructor(props){
    super(props);
    this.state = ColorStore.getAll()
  }
  addCounterClick (){
    ButtonAction.addCounter();
  }
  onClick () {
    this.setState(function(){
      return ColorStore.getAll();
    })
  }
  componentDidMount(){
    ColorStore.attachAddCountEvent(this.onClick,this);
  }
  componentWillUnmount(){
    ColorStore.removeAddCountEvent(this.onClick,this);
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