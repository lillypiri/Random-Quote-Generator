var quotesCopy = [];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById("loadQuote").addEventListener("click", printQuote);

window.onload = printQuote();


// This function only goes to A so that the colour will most likely be darker and the text remains legible.
function getRandomColor() {
  var letters = "0123456789A";
  var colour = "#";
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * letters.length)];
  }
  return colour;
}

function changeQuote() {
  timeoutID = window.setInterval(printQuote, 30000);
}
changeQuote();

/* This function checks to see if quotesCopy is empty, and if it is empty, it
clones the quotes array into the quotesCopy array. It then splices a random object
from the quotesCopy array, and returns it. It does not return a duplicate quote until
all quotes have been returned once. */
function getRandomQuote() {
  if (quotesCopy.length === 0) {
    quotesCopy = [].concat(quotes);
  }
  var quote = quotesCopy.splice(
    Math.floor(Math.random() * quotesCopy.length, 1)
  )[0];
  return quote;
}

/* this function calls the randomQuote function
also prints the quote to the page using the template supplied in the project instructions
Quotes change automatically after certain amount of time passes
Background color changes each time the quote changes */
//printQuote doesn't add a for a missing citation or a if the year property is missing
// Looked at CSS Properties Reference to find which property to use to
// access backgroundColor https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

function printQuote() {
  currentQuote = getRandomQuote();
  var message = '<p class="quote">' + currentQuote.quote + "</p>";
  message += '<p class="source">' + currentQuote.source;
  message += '<span class="citation">' + currentQuote.citation + "</span>";
  if (currentQuote.date === null) {
    '<span class="year">' + "</span>";
  } else {
    message += '<span class="year">' + currentQuote.date + "</span>";
  }
  message += "</p>";

  document.getElementById("quote-box").innerHTML = message;
  document.getElementById(
    "loadQuote"
  ).style.backgroundColor = document.body.style.backgroundColor = getRandomColor();
}

printQuote();