$.ajax({
  method: 'GET',
  url: 'https://pokeapi.co/api/v2/pokemon/ditto',
  success: function(data) {
    console.log(data);
  }
})