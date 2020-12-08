// These are some event handlers to make the demo work well.
// Don't change them unless you know what you're doing!

// FROM JS DOM
// document.addEventListener('DOMContentLoaded',()=>{


// })
// 👇🏻 This is jquery veriosn of DOMContentLoaded
$(document).ready(function() {
console.log('The page ahse loaded. feel free to make selections and events');
  $('#reset').click(function() {
    document.location.reload();
  });

  $('form').submit(function(event) {
    event.preventDefault();
  });

});
