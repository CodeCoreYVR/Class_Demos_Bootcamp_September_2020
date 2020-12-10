const BASE_URL = `http://localhost:3000/api/v1`;

const Question = {
  index() {
    return fetch(`${BASE_URL}/questions`)
      .then(res => {
        // res object has a method .json() that will parse the body of response and return it as json
        console.log(res);
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
        <small>Liked by: ${question.like_count}</small>
      `
      showPage.innerHTML = questionHTML;
      navigateTo('question-show');
    })
}