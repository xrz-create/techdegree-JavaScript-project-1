/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//I'm going for Exceeds expectations, and I've worked out the bugs that
//I can find. Whatever feedback you have for me is very welcome. Thanks!!!

//here's a bunch of random quotes
var quotes = [
  {quote: "yeeyupyupyupyupyupyup...aoh-hou, aoh-hou", source: "sesame street aliens", topic: "#noises"},
  {quote: "mmmmmmmmm...oh.. ohhhhhh", source: "Jeff Goldblum", topic: "#noises"},
  {quote: "if cats could talk, they wouldn't", source: "Nan Porter", citation: "Good Housekeeping.com", year: "2020", topic: "#good stuff"},
  {quote: "mlaaaaaaaaa", source: "Goat, probably", topic: "#noises"},
  {quote: "weeoooo - weeoooo", source: "Ambulance", topic: "#noises"}
];

function changeBackground(){
  red = Math.floor(Math.random()*256);
  green = Math.floor(Math.random()*256);
  blue = Math.floor(Math.random()*256);
  var color = "rgb("+red+", "+green+", "+blue+")";
  document.body.style.background = color;
}

//function to randomize and return a quote from above
function getRandomQuote() {
  var randomInteger = parseInt(Math.floor(Math.random()*quotes.length));
  var randomQuote = quotes[randomInteger];
  return randomQuote
}

//console.log(getRandomQuote());

//format quotes into html tags
function printQuote() {
  var theQuoteObject = getRandomQuote();
  var htmlString = '<p class="quote">"' + theQuoteObject.quote + '"</p>';
  htmlString += '<p class="source">' + theQuoteObject.source;
    if (theQuoteObject.citation !== undefined){
      htmlString += '<span class="citation">' + theQuoteObject.citation + '</span>';
    }
    if (theQuoteObject.year !== undefined){
      htmlString += '<span class="year">' + theQuoteObject.year + '</span>';
    }
    if (theQuoteObject.topic !== undefined){
      htmlString += '<span class="topic">' + theQuoteObject.topic + '</span>';
    }
  htmlString += '</p>'
  changeBackground();
  document.getElementById('quote-box').innerHTML = htmlString;
}

setInterval(printQuote, 10000);

//console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);