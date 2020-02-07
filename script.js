/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {quote: "yeeyupyupyupyupyupyup...aoh-hou, aoh-hou", source: "sesame street aliens"},
  {quote: "mmmmmmmmm...oh.. ohhhhhh", source: "Jeff Goldblum"},
  {quote: "if cats could talk, they wouldn't", source: "Nan Porter", citation: "Good Housekeeping.com", year: "2020"},
  {quote: "mlaaaaaaaaa", source: "Goat, probably"},
  {quote: "weeoooo - weeoooo", source: "Ambulance"}
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var randomInteger = parseInt(Math.floor(Math.random()*quotes.length));
  var randomQuote = quotes[randomInteger];
  return randomQuote
}
//console.log(getRandomQuote());

/***
 * `printQuote` function
***/
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
  htmlString += '</p>'
  return htmlString;
}
//console.log(printQuote());


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);