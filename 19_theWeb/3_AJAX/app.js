// function that gets and appends GIFs
async function getGIF() {
    let theme = $('#gifThemeInput').val();
    let url = 'http://api.giphy.com/v1/gifs/search?q='+ theme + '&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
    

    let GIFs = await axios.get(url);
    let imgURL = GIFs.data.data[0].images.downsized.url;
    let imgHTML = '<img src=' + imgURL + '/>';
    
    $('#gif-container').append(imgHTML);
    
    };

// append new gif
$('#gif-submit-button').on('click', getGIF);
// delete gifs
$("#gif-delete-button").on('click', function() {
    $('#gif-container').empty();
  });