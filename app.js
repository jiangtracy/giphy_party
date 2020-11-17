"use strict"

console.log("Let's get this party started!");


async function getGiphy(evt){
  evt.preventDefault();
  let searchInput = $("#search-input").val();
  let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
  console.log(response);
}


$("#search-btn").on("click", getGiphy);