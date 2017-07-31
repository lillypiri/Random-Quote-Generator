var quotesCopy = [];

/* Event listener to respond to "Show another quote" button clicks.
When user clicks anywhere on the button, the "printQuote" function is called.
Found information about intervals and timers on https://javascriptweblog.wordpress.com/2010/06/28/understanding-javascript-timers/ */
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

/* This function checks to see if quotesCopy is empty, and if it is empty, it
clones the quotes array into the quotesCopy array. It then splices a random object
from the quotesCopy array, and returns it. It does not return a duplicate quote until
all quotes have been returned once. */
function getRandomQuote() {
  if (quotesCopy.length === 0) {
    quotesCopy = [].concat(quotes);
  }
  var quote = quotesCopy.splice(
    Math.floor(Math.random() * quotesCopy.length), 1
  )[0];
  console.log(quotesCopy);
  return quote;
}

/* this function calls the randomQuote function and prints the quote to the page
using the template supplied in the project instructions.
Background and button colors change each time the quote changes.
printQuote doesn't add a for a missing citation or a if the year property is missing
 Looked at CSS Properties Reference to find which property to use to
access backgroundColor https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
Quotes change automatically after 30 seconds passes.
*/

function printQuote() {
  currentQuote = getRandomQuote();
  var message = '<p class="quote">' + currentQuote.quote + "</p>";
  message += '<p class="source">' + currentQuote.source;
  if (currentQuote.citation) {
    message += '<span class="citation">' + currentQuote.citation + "</span>";
  }
  if (currentQuote.date) {
    message += '<span class="year">' + currentQuote.date + "</span>";
  }
  message += "</p>";

  document.getElementById("quote-box").innerHTML = message;
  document.getElementById(
    "loadQuote"
  ).style.backgroundColor = document.body.style.backgroundColor = getRandomColor();
  clearInterval(window.intervalID);
  window.intervalID = setInterval(printQuote, 30000);
}

printQuote();
