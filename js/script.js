
// Function which selects and returns a random quote object from the quotes array
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}

//Stores the returned object in a variable and prints to the HTML
function printQuote() {
  var quoteObject = getRandomQuote();
  // Stores quote of quote object to quote
  var quote = '<p class="quote">' + quoteObject.quote + '</p>';
  // Stores quote source of quote object to source without </p> end tag
  var source = '<p class="source">' + quoteObject.source;
  // Checks if quote have citation and year
  if (quoteObject.citation && quoteObject.year){
    quote += source + '<span class="citation">' + quoteObject.citation + '</span>' + '<span class="year">' + parseInt(quoteObject.year) + '</span>' + '<span class="tag">'+ quoteObject.tag + '</span>'+'</p>';
  } else {
    quote += source +'<span class="tag">'+ quoteObject.tag + '</span>'+'</p>';
  }
  var outputDiv = document.getElementById('quote-box');
  // Apply random background color
  document.body.style.backgroundColor = getRandomColor();
  return outputDiv.innerHTML = quote;
}

// Generates a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Quotes array
var quotes = [
  { quote: 'A person who never made a mistake never tried anything new.', source: 'Albert Einstein', tag: 'Self-Improvement'},
  { quote: 'Be the change that you want to see in the world.', source: 'Mahatma Ghandi', tag: 'Self-Improvement'},
  { quote:'True peace is not merely the absence of tension; it is the presence of justice.', source: 'Martin Luther King Jr.', citation: 'from Stride Toward Freedom', year: 1958, tag: 'Self-Improvement'},
  { quote: 'You miss 100% of the shots you don’t take.', source: 'Wayne Gretzky', tag: 'Self-Improvement'},
  { quote: 'The journey of a thousand miles begins with one step.', source: 'Lao Tzu', tag: 'Self-Improvement'}
];

printQuote();

//Runs the printQuote function every 10 seconds
setInterval(printQuote, 10000);


//Shows a random quote when "Show another quote" button is pressed
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
