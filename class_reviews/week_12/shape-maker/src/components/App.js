import React, { Component } from 'react';
import ShapeMaker from './ShapeMaker';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showShapeMaker: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({
      showShapeMaker: false,
    })
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Unmount Shape Maker</button>
        {this.state.showShapeMaker ? <ShapeMaker /> : null}
      </div>
    )
  }
}

export default App;
