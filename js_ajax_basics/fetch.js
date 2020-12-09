fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((res) => {
    // fetch is a promise that will resolve to a response object
    // the res object represents a response...
    // you need to call res.text() to turn the body
    // of the response into text so you can work with it
    // return res.text();
    return res.json();
  })
  .then((data) => {
    // logging out the body
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });