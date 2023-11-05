// define table that will contain movie rating info
let movieTable = $('body table')

// create rows
$('#input-button').on('click', function() {
    let movie = $('#movie-input').val();
    let rating = $('#rating-input').val();
    $('form').trigger('reset');
    // check if rating is an integer from 0 - 10
    if (Number.isInteger(Number(rating)) && (rating >= 0 && rating <= 10)) {
        // create and append movie rating info to table
        let movieData = {movie, rating};
        movieTable.append(createMovieDataHTML(movieData));

    } else  { alert('Rating needs to be an integer (0-10)')}
});

// delete table row
$('table').on('click', 'input', function(evt) {
    console.log($(evt.target).parent().parent().remove())
})

/* compress reusable HTML format into a function */
function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
        <input type="button" class='delete-button' value="Delete">
        </td>
      <tr>
    `
  };
  