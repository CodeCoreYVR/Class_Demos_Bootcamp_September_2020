// Clicking a.doggo.fighter adds the selected class to it.A doggo with the selected class is considered selected.
// Only one doggo can have the selected class.
// Clicking a team's name, moves a selected doggo to that team.

// steps: (1 & 2)
// 1. we need to select all doggos

// 2. Add an event listener to all doggos to add class selected (only one doggo at time) which 
//      means if you click on a doggo the other selected doggo must be cancelled:
// a. add an event listener to all doggos
// b. get all the previously selected doggos => remove the selected class from them
// c. add selected class to the one, that we just clicked

const getSelectedDoggo = () => document.querySelector('.doggo.fighter.selected');

document.querySelectorAll('.doggo.fighter').forEach(doggo => {
    doggo.addEventListener('click', event => {
        // here we are making sure that selected class is removed from the previously 
        //  selected doggo before we select a new doggo
        const selectedDoggo = getSelectedDoggo();
        if (selectedDoggo) {
            selectedDoggo.classList.remove('selected');
        }
        doggo.classList.add('selected');
    })
})


// 3. 
// a. We need to select team names
// b. add an event listener to both team names
// c. find the roster class of that team and select it
// d. move the doggo to the other team

document.querySelectorAll('.team > h1').forEach(teamTitle => {
    teamTitle.addEventListener('click', event => {
        // const roster = teamTitle.nextElementSibling // or
        const roster = teamTitle.closest('.team').querySelector('.roster');
        let selectedDoggo = getSelectedDoggo();
        if (selectedDoggo) {
            roster.append(selectedDoggo);
        }
    })
});

// Stretch 
// Clicking anywhere else on the page, unselects all selected .doggo.fighters.

// Steps: 
// 1. registering an event listener that detects a click on anywhere on the page
// 2. make sure that whatever you've clicked is not team name
// 3. remove selected class from the selected doggo

document.addEventListener('click', event => {
    const { target } = event;
    console.log('target: ', target); // is the element that triggers the event in our case, the element that we click on
    console.log('current target: ', event.currentTarget); // currentTarget is the element(node) that we attach addEventListener to
    if (!target.closest('.team')) {
        const selectedDoggo = getSelectedDoggo();
        if (selectedDoggo) {
            selectedDoggo.classList.remove('selected');
        }
    }
})
