// sends request and loads it into the page
const loadMessages = () => {
  fetch('/messages') // sends a GET request to localhost:3434/messages
    .then(res => {
      // fetch will always resolve to a response object
      // we need to call res.json() to turn the contents/body
      // of the response into json
      return res.json(); // this returns a promise which we can
      // chain .then() on
    }).then(messages => {
      console.log(messages);
      const messagesContainer = document.querySelector('#messages'); // grab the container for the messages from the DOM
      let messagesHTML = ''; // hold the list of messages html
      messages.forEach(message => { // for every message create an li that holds info about the mesage
        messagesHTML += `
          <li>
            ${message.body}
            </br>
            ${message.username}
            <i data-id=${message.id} class="delete-link">x</i>
          </li>
        `
      });
      messagesContainer.innerHTML = messagesHTML;
    });
}

const createMessage = (message) => {
  fetch("/messages", {
    method: 'POST',
    body: message
  }).then(() => {
    document.querySelector('#new-message').reset();
    loadMessages();
  })
}

const deleteMessage = (id) => {
  fetch(`/messages/${id}`, {
    method: "DELETE"
  }).then(() => {
    loadMessages();
  })
}


const REFRESH_INTERVAL = 3000;
document.addEventListener('DOMContentLoaded', () => {
  loadMessages();
  setInterval(loadMessages, REFRESH_INTERVAL);

  const newMessageForm = document.querySelector('#new-message');
  newMessageForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    fd.set('username', 'batman');
    createMessage(fd);
  })

  const messageContainer = document.querySelector('#messages');
  messageContainer.addEventListener('click', event => {
    if (event.target.matches("i.delete-link")) {
      const id = event.target.dataset.id;
      deleteMessage(id);
    }
  })
})

