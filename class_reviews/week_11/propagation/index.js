document.addEventListener("DOMContentLoaded", () => {
  const eventLogger = event => {
    const { currentTarget, eventPhase } = event
    // eventPhase tells us what phase we're on:
    // 1. Capturing phase
    // 2. At event.target (The element that triggered the event)
    // 3. Bubbling phase
    console.log(`Phase: ${eventPhase}`)
    console.log(`Element: ${currentTarget.id}`)

    // The first time event.stopPropagation() is called, it stops the event 
    // from triggering other remaining event handlers
    // If it's in the bubble phase, it will stop event listeners on the ancestral elements
    // If it's in the capturing phase, it prevents capturing down and might not reach the target
    event.stopPropagation()
  }

  document
    .body
    .querySelectorAll("*")
    .forEach(node => {
      // 3rd argument is isCapture? boolean
      // by default it's false (bubbling)
      // node.addEventListener("click", eventLogger, false) 
      node.addEventListener("click", eventLogger, true) 
    })
})


// Destructuring Params:

const printPerson = person => {
  console.log(person.name)
  console.log(person.occupation)
}

const printPersonDestructuring = ({name, occupation}) => {
  console.log(name)
  console.log(occupation)
}

printPerson({
  name: "James",
  occupation: "Accountant",
})
