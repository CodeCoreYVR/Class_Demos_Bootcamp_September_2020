console.log(React)

const helloWorld = React.createElement(
  'h1', // HTML tag name
  { className: 'blue' }, // props
  "Hello World!" // content of element
)

// ReactDOM is the library used to render React elements into the DOM
if (false) {
  ReactDOM.render(
    helloWorld,
    document.getElementById("app")
  )
}

// We can define functional components that return a React element
function Heading({content, color, id}) {
  return React.createElement(
    "h1",
    {
      style: { color },
      key: id,
    },
    content
  )
}

if (false) {
  ReactDOM.render(
    Heading({id: 1, content: "Hello World", color: 'pink'}),
    document.getElementById("app")
  )
}

ReactDOM.render(
  React.createElement(
    "div",
    { 
      style: { 
        border: "solid black 1px"
      }
    }, 
    [
      Heading({id: 1, content: "Hello World", color: 'pink'}),
      Heading({id: 2, content: "Hello Universe", color: 'green'}),
    ] // Ww can also render a list of children elements, each having a unique key
  ),
  document.getElementById("app")
)
