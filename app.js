'use strict';

console.log("Let's get this party started!");
//add a base url constant 
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const URL = "http://api.giphy.com/v1/gifs";

/* When search button is clicked, create a new image on the page and append to the gifs div. */
function displayGIF(gif) {
	console.log('gif is:', gif);
	let src = gif.images.original.url;
	let $img = $(`<img src='${src}'>`);
	console.log('image is:', $img);
	$('#gifs').append($img);
}

/* Random number generator */

function randomNumberGenerator(number){
  return Math.floor(Math.random() * number);
}

/* When search button is clicked, get the value from the search input and make a get request to giphy.com. Call displayGIF. */
async function getGiphy(evt) {
	evt.preventDefault();

  
	const searchInput = $('#search-input').val();
	const response = await axios.get(
		`${URL}/search?q=${searchInput}&api_key=${API_KEY}`
  );
  let gifArray = response.data.data;
	let randomPick = randomNumberGenerator(gifArray.length); // pass in only the data needed

	// console.log('response from website:', response);

	displayGIF(gifArray[randomPick]);

	$('form').trigger('reset');
}

$('form').on('submit', getGiphy); 

/* When remove button is clicked, remove all gifs. */


$('#remove-btn').on('click', () => $('#gifs').empty());
