// Update the applicant preview's h1 node contents with the applicant name as it is typed.
// steps:
// a. select the applicant preview's title, and the input field name
// b. add an event listener to the name input field 
// c. update the selected applicant preview's title with entered text
const previewName = document.querySelector('#applicant-preview h1');
const name = document.querySelector('#name');

name.addEventListener('input', event => {
    previewName.innerText = event.currentTarget.value;
})


// Update the applicant preview's picture once a valid picture url as it is typed. Check that the typed in field ends with .jpg, .gif or .png.

// steps:
// a. select the picture url field, and the blank doggo where we want the picture to show
// b. add an event listener to the pictureUrl input field 
// c. check the value of the picture url if it ends with ['.jpg', '.gif', '.png']
// d. if the value of the picture url ends with ['.jpg', '.gif', '.png'], then update the blank doggo with the typed value
const pictureUrl = document.querySelector('#picture-url');
const blankDoggo = document.querySelector('.doggo.blank');

pictureUrl.addEventListener('input', event => {
    const value = event.currentTarget.value;
    const extension = value.slice(-4);
    const validExtensions = ['.jpg', '.gif', '.png'];
    if (validExtensions.includes(extension)) {
        blankDoggo.style.backgroundImage = `url(${value})`
    }
})

// Give a salmon or teal border to the applicant preview depending on which team is typed.
// steps: 
// a. grab the team name field, and applicant preview container
// b. add an event listener to the team-name field
// c. grab the value of the team-name and update the border of the applicant preview with the colour of team-name

const teamName = document.querySelector('#team-name');
const applicantPreview = document.querySelector('#applicant-preview');

teamName.addEventListener('input', event => {
    const { value } = event.currentTarget;
    const validTeamNames = ['teal', 'salmon']
    if (validTeamNames.includes(value.toLowerCase())) {
        applicantPreview.style.border = `5px solid ${value}`;
    }
})

// When the form is submitted, reset the applicant preview and create that.doggo.fighter in the team written in the team name field.

const form = document.querySelector('#application-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const newDoggo = blankDoggo.cloneNode(true);
    const validTeamNames = ['teal', 'salmon'];
    if (validTeamNames.includes(teamName.value.toLowerCase())) {
        document.querySelector(`.team.${teamName.value.toLowerCase()} .roster`).append(newDoggo);
        // here we will reset the form
        form.reset();
        applicantPreview.style.border = '';
        previewName.innerHTML = 'Applicant Preview';
        blankDoggo.style.background = '';
    } else {
        alert('You entered an invalid team name');
    }
})