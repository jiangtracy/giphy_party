'use strict';

console.log("Let's get this party started!");

/* When search button is clicked, create a new image on the page and append to the gifs div. */
function displayGIF(gif) {
	console.log('gif is:', gif);
	let src = gif.images.original.url;
	let $img = $(`<img src='${src}'>`);
	console.log('image is:', $img);
	$('#gifs').append($img);
}

/* Random number generator */

function randomNumberGenerator(response){
  return Math.floor(Math.random() * response.data.data.length);
}

/* When search button is clicked, get the value from the search input and make a get request to giphy.com. Call displayGIF. */
async function getGiphy(evt) {
	evt.preventDefault();

	let searchInput = $('#search-input').val();
	let response = await axios.get(
		`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
	);
	let randomPick = randomNumberGenerator(response);

	// console.log('response from website:', response);

	displayGIF(response.data.data[randomPick]);

	$('form').trigger('reset');
}

$('#search-btn').on('click', getGiphy);

/* When remove button is clicked, remove all gifs. */

function emptyGif() {
	$('#gifs').empty();
}

$('#remove-btn').on('click', emptyGif);
