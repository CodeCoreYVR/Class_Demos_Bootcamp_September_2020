const BASE_URL = `http://localhost:3000/api/v1`;

const Question = {
  index() {
    return fetch(`${BASE_URL}/questions`)
      .then(res => {
        // res object has a method .json() that will parse the body of response and return it as json
        // console.log(res);
        return res.json();
      })
  },

  create(params) {
    return fetch(`${BASE_URL}/questions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then((res) => res.json());
  },

  show(id) {
    return fetch(`${BASE_URL}/questions/${id}`)
      .then(res => res.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy(id){
    return fetch(`${BASE_URL}/questions/${id}`,{
      method:"DELETE",
      credentials:'include',
    }).then(res=>res.json())

    }
  

}

const Session = {
  create(params) {
    return fetch(`${BASE_URL}/sessions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
  }
}

Session.create({
  email: 'js@winterfell.gov',
  password: 'supersecret'
}).then(console.log);

function loadQuestions() {
  Question.index()
    .then(questions => {
      const questionsContainer = document.querySelector('ul.question-list');
      questionsContainer.innerHTML = questions.map(q => {
        return `
          <li>
            <a class="question-link" data-id="${q.id}" href="">
              ${q.id} - ${q.title}
            </a>
          </li>
        `
      }).join('');
    })
}

loadQuestions();

// question new
const newQuestionForm = document.querySelector('#new-question-form');
newQuestionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget
  const formData = new FormData(form);
  const newQuestionParams = {
    title: formData.get('title'),
    body: formData.get('body')
  }
  Question.create(newQuestionParams)
    .then(data => { // the rails server responds with JSON that looks like { id: 5 }
      // loadQuestions();
      if (data.errors) {
        const newQuestionForm = document.querySelector('#new-question-form');
        // remove existing errors if any
        newQuestionForm.querySelectorAll('p.error-message').forEach(node => {
          node.remove();
        })

        // {"errors":{"title":["can't be blank"]}}
        for (const key in data.errors) {
          const errorMessages = data.errors[key].join(', '); // getting all the error messages

          const errorMessageNode = document.createElement('p'); // creating a node
          errorMessageNode.classList.add('error-message');
          errorMessageNode.innerText = errorMessages;

          const input = newQuestionForm.querySelector(`#${key}`); // adding node to DOM
          input.parentNode.insertBefore(errorMessageNode, input);
        }
      } else {
        renderQuestionShow(data.id);
      }
    })
})

function navigateTo(id) { // navigates by remove the active class and re-applying it to a specifc node
  //id will be one of: welcome, question-index, question-new, question-show
  document.querySelectorAll('.page').forEach(node => {
    // remove the active class from every page node
    node.classList.remove('active');
  });
  document.querySelector(`.page#${id}`).classList.add('active');
}

// add navigation
const navbar = document.querySelector('nav.navbar');
navbar.addEventListener('click', (event) => {
  event.preventDefault();
  const node = event.target
  const page = node.dataset.target;
  if (page) {
    navigateTo(page);
  }
});
// <div data-* ='value'                *=naveed *=name *=id *=target
// question show
const questionsContainer = document.querySelector('ul.question-list');
questionsContainer.addEventListener('click', event => {
  event.preventDefault();
  const questionElement = event.target;
  if (questionElement.matches('a.question-link')) {
    const questionId = event.target.dataset.id
    renderQuestionShow(questionId);
  }
})

function renderQuestionShow(id) {
  const showPage = document.querySelector('.page#question-show');
  Question.show(id)
    .then(question => {
      const questionHTML = `
        <h2>${question.title}</h2>
        <p>${question.body}</p>
        <small>Authored by: ${question.author.first_name} ${question.author.last_name}</small>
        <small>Liked by: ${question.like_count}</small><br>
        <a data-target="question-edit" data-id="${question.id}" href="">Edit</a> <br>
        <a data-target="delete-question" data-id="${question.id}" href="">Delete</a>
      `
      // Step 1: Edit Question Create link 👆🏻
      showPage.innerHTML = questionHTML;
      navigateTo('question-show');
    })
}

/* Steps:
 1. Edit Link - On show page
 Select a link  with query selector and then add a Event listner 'click'
 on Click we need a id of a question
 2. On click a form filled with data of that particular question qhould be displayed
 3. Now user should be able to make changes
 4. User will press update button which will submit that form 
 5. Show page displaying new data should be displayed on a screen
*/

// Select a link  with query selector and then add a Event listner 'click'
//  on Click we need a id of a question 


document.querySelector('#question-show').addEventListener('click', (event) => {
  event.preventDefault();
  const questionID = event.target.dataset.id
  const actionNeededToBePerformed = event.target.dataset.target
  if (questionID) {
    // console.log(editQuestionID);
    if (actionNeededToBePerformed === 'delete-question') {
      console.log(`Delete: ${questionID}`)
      Question.destroy(questionID).then(question=>{
        navigateTo('question-index');
      })
    } else {
      console.log(`Edit: ${questionID}`)
      populateForm(questionID); // and then loading an edit form with data with populateForm() 
      navigateTo('question-edit'); // Displaying edit form with filled data
    }
  }
})

function populateForm(id) {
  Question.show(id).then(questionData => {
      // console.log(questionData)
      document.querySelector('#edit-question-form [name=title]').value = questionData.title;
      document.querySelector('#edit-question-form [name=body]').value = questionData.body;
      document.querySelector('#edit-question-form [name=id]').value = questionData.id;
    }

  )
}

const editQuestionForm = document.querySelector('#edit-question-form'); // Selecting a form from this querySelector using ID
editQuestionForm.addEventListener('submit', (event) => { // Attaching a submit event with this form
  event.preventDefault();
  const editFormData = new FormData(event.currentTarget); // grabbing data from the Form using FormData
  const updatedQuestionParams = { // Creating object of edited data
    title: editFormData.get('title'),
    body: editFormData.get('body')
  }
  // console.log(updatedQuestionParams);
  Question.update(editFormData.get('id'), updatedQuestionParams) // using update method of question to submit form new data
    .then(question => {
      editQuestionForm.reset();
      renderQuestionShow(question.id);
    })
})

// Steps for Deleting a Question:
/*
1. Creating a link of delete
2. We need a id of the particular question that we have to delete.
3. it can be redirected to the index page once delete is performed


*/