const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loadSpinner = document.getElementById('load-spinner');

let apiQuotes = [];

function startLoading() {
    loadSpinner.hidden = false;
    quoteContainer.hidden = true;
}

function finishLoading() {
    quoteContainer.hidden = false;
    loadSpinner.hidden = true;
}

function getRandomQuoteFromApi() {
    startLoading();
    const quote = apiQuotes[getRandomNumberUpTo(apiQuotes.length)];
    displayQuote(quote);
}

function getRandomQuoteFromLocalFile() {
    startLoading();
    const quote = localQuotes[getRandomNumberUpTo(localQuotes.length)];
    displayQuote(quote);
}

async function getQuotesFromApi() {
    startLoading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
        getRandomQuoteFromApi();
    } catch (error) {
        // Handle Error: Use localQuotes
        console.error(error);
        getRandomQuoteFromLocalFile();
    }
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', getRandomQuoteFromApi);
twitterBtn.addEventListener('click', tweetQuote);

getQuotesFromApi();

function getRandomNumberUpTo(maxNumber) {
    return Math.floor(Math.random() * maxNumber)
}

function displayQuote(quote) {
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;

    if (!quote.author) {
        authorText.textContent = 'Unkown';
    }

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    finishLoading();
}