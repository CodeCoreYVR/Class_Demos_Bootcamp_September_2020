import React, { Component } from 'react';

// Class vs. functional components

// Class 
// * Use state
// * Use lifecycle methods

// Functional
// * Simpler
// * Use hooks

class ShapeMaker extends Component {
  constructor(props) {
    // calling super(props) will have React.Component call its constructor and initialize this.props
    super(props)

    this.state = {
      isLoading: true,
      shapes: [],
    }

    // bind(this) will return a new function where the arugment passed is the value of "this"
    // Since we are currently in the constructor, "this" refers to the class
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const { currentTarget } = event

    const formData = new FormData(currentTarget)
    const shape = {
      id: Math.random(),
      type: formData.get("type"),
      color: formData.get("color"),
    }
    // the "state" param in the callback is the current state
    // The callback should return a object which will merge into the current state
    this.setState(state => {
      return {
        shapes: [
          shape,
          ...state.shapes,
        ]
      }
    })
    
    // Reset the form
    currentTarget.reset()
  }

  // Each component will go through a lifecycle:
  // 1. Mounting Phase: Component gets added to the DOM
  // 2. Rerender: This happens when the state changes or it receives new props
  // 3. Unmounting: When the component gets removed the DOM

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 5000)
    // Called when the component is initially mounted to the DOM
    // Often used with API requests
  }

  componentDidUpdate() {
    // Called after the component re-renders
    // Triggered when state or props changes
    console.log("Component Updated!")
  }

  componentWillUnmount() {
    // Called before the component unmounts (aka removed from the DOM)
    // Used to clean up event listeners, garbage collection
    console.log("Component Unmounted!")
  }

  render() {
    const { isLoading, shapes } = this.state

    return isLoading ? <h2>Loading...</h2> : (
      <div>
        <h2>Shape Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="type">Type</label>
            <input id="type" name="type" type="text" />
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <input id="color" name="color" type="text" />
          </div>
          <input type="submit" value="Create Shape" />
        </form>
        <h2>Shape Holder</h2>
        {/* 
          in between the {} we can render expressions such as strings or arrays, but we can't render objects
          if the value is an array, each element can be a component and React will render each element as a list of components
          since map() returns an array, we can call map inside of this expression and return an array or JSX (React.createElement() calls)
        */}
        {shapes.map(({id, type, color}) => {
          return (
            <div
              key={id}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: type === "circle" ? "100px" : "0px",
                backgroundColor: color,
              }}
            >
            </div>
          )
        })}
      </div>
    )
  }
}

export default ShapeMaker;