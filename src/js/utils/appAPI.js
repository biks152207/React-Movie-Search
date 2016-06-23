var AppActions = require('../actions/AppActions');

module.exports ={
  searchMovies: function(movie){
    console.log('appi');
    console.log(movie);
    $.ajax({
      url: 'http://www.omdbapi.com/?s=' + movie.title,
      dataType: 'json',
      cache: false,
      success: function(data){
        console.log(data);
        AppActions.receiveMovieResults(data.Search);
      }.bind(this),
      error: function(xhr, status, err){
        alert(err);
      }.bind(this)
    })
  }
}
