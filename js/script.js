/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
by Marnik Deimann
******************************************/

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    text:"True peace is not merely the absence of tension; it is the presence of justice.",
    source:"Martin Luther King",
    location:"Stride Toward Freedom",
    time: 1947 
  },
  {
    text:"The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    source:"Martin Luther King",
    location:"Strength to Love",
    time: 1963
  },
  {
    text:"The time is always right to do what is right.",
    source:"Martin Luther King",
    location:"Oberlin College commencement speech",
    time: 1965 
  },
  {
    text:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source:"Nelson Mandela",
    time: 2000
  },
  {
    text:"The way to get started is to quit talking and begin doing.",
    source:"Walt Disney",
    location:"Journal for Achievers"
  },
  {
    text:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma  which is living with the results of other people's thinking.",
    source:"Steve Jobs"
  },
  {
    text:"When you reach the end of your rope, tie a knot in it and hang on.",
    source:"Franklin D. Roosevelt"
  },
  {
    text:"Always remember that you are absolutely unique. Just like everyone else.",
    source:"Margaret Mead"
  },
  {
    text:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source:"Robert Louis Stevenson"
  },
  {
    text:"The future belongs to those who believe in the beauty of their dreams.",
    source:"Eleanor Roosevelt"
  },
  {
    text:"Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    source:"Marilyn Monroe"
  },
  {
    text:"Love the life you live. Live the life you love.",
    source:"Bob Marley"
  }
  
  ];
  


/***
 * This function gets a random quote by generating a number
 * between 0 and (length of quotes array - 1)
 * because the last element of the array has index: length -1
 * and then returning the quote with the generated random index
***/
function getRandomQuote() {
  const x = Math.floor(Math.random()*quotes.length);
  return quotes[x];
}


/***
 * The printQuote function creates a piece of HTML format written text
 * So that the right structure and css is applied when replacing the new randomly generated quote HTML in the HTML file
 * For fun I added that the background and text get a random color
 * (small drawback: 1 out of 16.8 milion times background and text are same color)
 * The 2 if statements make sure that only if there is a location and/or time this is added when displaying the quote
 * Lastly the created html piece is 'printed' at the right place
***/
function printQuote() {
const quote = getRandomQuote();
  var html = `<p class = "quote" > ${quote.text}</p>`;
  html+= `<p class = "source" ;"> ${quote.source}`;
  if(quote.location !== undefined){
    html+= `<span class="citation">${quote.location}</span> `;
  } 
  if(quote.time !== undefined){
    html+= `<span class="year">${quote.time}</span> `;
  } 
    html+= `</p>`;

    document.body.style.background = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    document.body.style.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    document.getElementById('quote-box').innerHTML = html;

}

printQuote();

// and that it refreshes automatically although i didn't know how to do that so i used
// https://www.tutorialspoint.com/javascript/javascript_page_refresh.htm#:~:text=Auto%20Refresh,after%20a%20given%20time%20interval.


setTimeout("location.reload(true);", 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);