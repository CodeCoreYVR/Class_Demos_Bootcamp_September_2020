const BASE_URL = `http://localhost:3000/api/v1`

// Requests
const Question = {
  index() {
    return fetch(`${BASE_URL}/questions`, {
      // Includes cookies in request and response for cross-origin request
      credentials: "include"
    }).then(res => res.json())
  },
  show(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      // Includes cookies in request and response for cross-origin request
      credentials: "include",
    }).then(res => res.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/questions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params),
    }).then(res => res.json())
  },
  async edit(id, params) {
    const res = await fetch(`${BASE_URL}/questions/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params),
    })
    const data = await res.json()
    return data
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar")
  const questionShowPage = document.querySelector("#questions-show")
  const questionNewForm = document.querySelector("#questions-new-form")
  const questionsIndexList = document.querySelector("#questions-index-list")
  const questionEditForm = document.querySelector("#questions-edit-form")

  async function navigateToQuestionShowPage(id) {
    const {title, body, view_count} = await Question.show(id)

      // The below doesn't happen until we get the question back because of await
      const currentPage = document.querySelector(".page.current")

      questionShowPage.innerHTML = `
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${body}</p>
            <a data-id="${id}" class="btn btn-primary edit-button">Edit Question</a>
          </div>
          <div class="card-footer text-muted">
            View Count: ${view_count}
          </div>
        </div>
      `
      
      currentPage.classList.remove("current")
      questionShowPage.classList.add("current")
  }

  async function navigateToQuestionEditPage(id) {
    const { title, body } = await Question.show(id)
    const questionEditPage = document.querySelector("#questions-edit")
    
    questionEditForm.dataset.id = id
    questionEditForm.innerHTML = `
      <div class="mb-3">
        <label for="title" class="form-label">Question Title</label>
        <input name="title" type="text" class="form-control" id="title" value="${title}">
      </div>
      <div class="mb-3">
        <label for="body" class="form-label">Question Body</label>
        <input name="body" type="text" class="form-control" id="body" value="${body}">
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-warning">Edit Question</button>
      </div>
    `

    const currentPage = document.querySelector(".page.current")

    currentPage.classList.remove("current")
    questionEditPage.classList.add("current")

  }

  questionEditForm
    .addEventListener("submit", async event => {
      event.preventDefault()

      const questionId = event.currentTarget.dataset.id
      const formData = new FormData(event.currentTarget)
      const { id, errors } = await Question.edit(questionId, {
        title: formData.get("title"),
        body: formData.get("body"),
      })

      // we can add some error checking here if we have time
      if (errors) console.error(errors)

      navigateToQuestionShowPage(id)
    })

  navbar.addEventListener("click", event => {
    const navLink = event.target

    // Elements have a property called "dataset" which is an object
    // Its keys are any attributes where the name starts with "data-" and what comes after is the key
    // The attribute value are the values
    // Here we added a "data-target" attribute to all the navlinks where the values
    // are the same name as the "id" attribute of the page we want to show
    const pageId = navLink.dataset.target
    const currentPage = document.querySelector(".page.current")
    
    // We can then use that pageId to select the element to show
    const newPage = document.querySelector(`.page#${pageId}`)

    // Our stylesheet specifies that pages without the "current" class will have display set to "none"
    currentPage.classList.remove("current")
    newPage.classList.add("current")

    if (pageId === "questions-index") {
      Question
        .index()
        .then(questions => {
          const questionIndexList = document.querySelector("#questions-index-list")
          questionIndexList.innerHTML = questions.map(({id, title})=> {
            return `
              <button 
                data-id="${id}"
                type="button" 
                class="list-group-item list-group-item-action" 
              >
                ${title}
              </button>
            `
          }).join("")
        })
    }
  })

  // Clicking on index goes to show page
  questionsIndexList.addEventListener("click", event => {
    const id = event.target.dataset.id

    navigateToQuestionShowPage(id)
  })

  // Creating a Question
  questionNewForm
    .addEventListener("submit", async event => {
      // event.preventDefault()
      // const formData = new FormData(event.currentTarget)
      
      // Question.create({
      //   title: formData.get("title"),
      //   body: formData.get("body"),
      // }).then(({id, errors}) => {
      //   // we can add some error checking here if we have time
      //   if (errors) console.error(errors)

      //   Question
      //     .show(id)
      //     .then(({title, body, view_count}) => {
      //       const currentPage = document.querySelector(".page.current")
      //       const questionShowPage = document.querySelector("#questions-show")

      //       questionShowPage.innerHTML = `
      //         <div class="card text-center">
      //           <div class="card-body">
      //             <h5 class="card-title">${title}</h5>
      //             <p class="card-text">${body}</p>
      //           </div>
      //           <div class="card-footer text-muted">
      //             View Count: ${view_count}
      //           </div>
      //         </div>
      //       `
            
      //       currentPage.classList.remove("current")
      //       questionShowPage.classList.add("current")
      //     })
      // })

      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const { id, errors } = await Question.create({
        title: formData.get("title"),
        body: formData.get("body"),
      })

      // we can add some error checking here if we have time
      if (errors) console.error(errors)

      navigateToQuestionShowPage(id)
      
    })

  questionShowPage.addEventListener("click", event => {
    const id = event.target.dataset.id
    console.log(id)
    if (id) navigateToQuestionEditPage(id)
  })


})