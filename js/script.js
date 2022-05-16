"use strict";

/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
// create an empty array
const quotes = [];

// create 10 objects storing quotes, source, citation (optional), and year (optional)
const quote0 = {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source: "Mother Teresa"
};

const quote1 = {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    source: "Franklin D. Roosevelt"
};

const quote2 = {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    source: "Margaret Mead"
};

const quote3 = {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source: "Robert Louis Stevenson"
};

const quote4 = {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt"
};

const quote5 = {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin"
};

const quote6 = {
    quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    source: "Helen Keller"
};

const quote7 = {
    quote: "It is during our darkest moments that we must focus to see the light.",
    source: "Aristotle"
};

const quote8 = {
    quote: "Whoever is happy will make others happy too.",
    source: "Anne Frank"
};

const quote9 = {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016"
};

// add all objects into the array
quotes.push(quote0, quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9);

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    /* 1. Create a variable that generates a random number between zero and the last index
    in the `quotes` array */
    let randomNum = Math.floor(Math.random() * quotes.length);

    /* 2. Use the random number variable and bracket notation to grab a random object from
    the `quotes` array, and store it in a variable */
    let randomQuote = quotes[randomNum];

    // 3. Return the variable storing the random quote object generate a random number ranging from 0 to 9
    return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote() {
    // 1. Create a variable that calls the getRandomQuote() function
    let randomQuoteObj = getRandomQuote();

    /* 2. Create a variable that initiates your HTML string with the first two <p></p> elements,
            their classNames, and the quote and source properties, but leave off the
            second closing `</p>` tag for now */
    let outputHTML = `<p class="quote">${randomQuoteObj.quote}</p>
                            <p class="source">${randomQuoteObj.source}`;

    /* 3. Use an if statement to check if the citation property exists,
            and if it does, concatenate a <span></span> element, appropriate className,
            and citation property to the HTML string */
    if (randomQuoteObj.citation != undefined) {
        outputHTML += `<span class="citation">${randomQuoteObj.citation}</span>`;
    }

     /* 4. Use an if statement to check of the year property exists,
            and if it does, concatenate a <span></span> element,
            appropriate className, and year property to the HTML string */
    if (randomQuoteObj.year != undefined) {
        outputHTML += `<span class="year">${randomQuoteObj.year}</span>`;
    }

    // 5. After the two if statements, concatenate the closing </p> tag to the HTML string
    outputHTML += `</p>`;

    // 6. set the innerHTML of the quote-box div to equal the complete HTML string
    document.getElementById("quote-box").innerHTML = outputHTML;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById("load-quote").addEventListener("click", printQuote);