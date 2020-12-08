// JS: jQuery

// Selecting Nodes

// The $ function from jQuery could be thought of like the following:
// const $ = (query) => document.querySelectorAll(query)
// To be clear, that is not how it is implemented, but it will
// return a collection of jQuery nodes similar to how
// document.querySelectorAll returns a collection of HTML Nodes

// $(<css-query>)
// It returns a list of node (jQuery List) that contains all
// of the nodes that match the <css-query>, much the example above
// demonstrates

// select the 2nd button
$('#button-2');
// select all anchor tags inside of li tags
$('li a');
// count the number of blue circles
$('.blue.circle').length;

// Demo: Attributes, Classes and Removal

// Change the href of all links on the page
$('a').attr('href', 'http://nyan.cat');
// Change all blue shapes to red shapes
$('.blue')
  .removeClass('blue')
  .addClass('red');

// Exercise: Practice
$('a').attr('class', 'highlight');
$('.circle')
  .removeClass('circle')
  .addClass('diamond');

$('#green-container, #purple-container')
  .find('.shape')
  .remove();
$('#green-container .shape, #purple-container .shape').remove();
$('#green-container, #purple-container').empty();

// Iterating over a jQuery Collection

// To get the first node in a jQuery list, use `.first`
$('.shape').first();
// For the last thing, `.last`
$('.shape').last();

// To get a node at a specific index, use `.eq`
$('.shape').eq(2); // this begins counting at 0, returns the 3rd element in the list
$('.shape').eq(4);

// These method return to you a jQuery wrapped object so that we can still use
// all of the jQuery methods on that node
// As opposed to doing the following:
$('.shape')[4];
// While this does give us a node, it no longer will be wrapped by jQuery
// so we will not have access to jQuery methods

// Demo: html, children and parent

// 1.
$('#reset').html();
// 2.
$('a').map((index, link) => $(link).html());
// 3.
$('#reset').html('Launch Doggos');

// Exercise: Practice

// 1.
// Change all tds to the content "yass"
$('td').html('yass');

// 2.
// Select the parents of all td tags
$('td').parent();

// Demo: Creating nodes, append & prepend

// 1. create a small blue diamond with $
const smallBlueDiamond = $('<div class="small blue diamond shape"></div>');

// 2. Append s small blue diamond to every node with the class "container"
$('.container').append($('<div class="small blue diamond shape"></div>'));

// 3. prepend a new link to the list of links
$('ul').prepend('<li><a href="http://nyan.cat">NyanCat</a></li>');

// Exercise: Practice

// 1.
const container = $('<div class="container"></div>');

// 2.
$('section')
  .first()
  .prepend(container);

// 3.
container.append($('<div class="small black circle shape"></div>'));

// Listen for Events

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // this is how we used to wait for the document to be ready using plain JS
});

// This is the jQuery version of DOMContentLoaded
$(document).ready(() => {
  // Demo: Events with on
  console.log('the page has loaded. fell free to make selections and add events');
  $('.blue.circle').on('mouseenter', event => {
    console.log('Blue Circle: Go Away!');
  });
  $('.blue.circle').on('mouseleave', event => {
    console.log('Blue Circle: Goodbye!');
  });
  $('#button-1').on('click', event => {
    $('.shape').remove();
  });

  // Exercise: Practice
  // 1. When button 2 is clicked, disabled button 2
  $('#button-2').on('click', event => {
    const { currentTarget } = event;
    $(currentTarget).attr('disabled', true);
  });
  // 2. When button 3 was clicked, set the button message
  $('#button-3').on('click', event => {
    $('#button-message').html('Button 3 was clicked');
  });
  // 3. When a mouse enters any `tr`, add the "highlight" class to that `tr`
  $('tr').on('mouseenter', event => {
    const { currentTarget } = event;
    $(currentTarget).addClass('highlight');
    // $(currentTarget).attr('class', 'highlight'); <-- this removes all other classes
    // and only allows the `tr` to have the "highlight" class
    // while this might work for this example since the trs don't have any other classes
    // this is sub-optimal if they did have other classes
  });
  // 4. When a mouse leaves any `tr`, remove the highlight class from it
  $('tr').on('mouseleave', event => {
    const { currentTarget } = event;
    $(currentTarget).removeClass('highlight');
  });

  // NOTE:
  // `.on` only executes in the BUBBLE phase, and NOT in the CAPTURE phase
  // so if you wanted to add a event listener that execute on the CAPTURE phase
  // you would need to use `.addEventListener`
  $('body')
    .get(0)
    .addEventListener(
      'click',
      event => {
        const { currentTarget } = event;
        $(currentTarget).toggle();
        console.log('this happens in the capture phase');
      },
      true,
    );
});