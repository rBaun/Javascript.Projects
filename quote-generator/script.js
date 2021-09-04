let apiQuotes = [];

function getRandomQuoteFromApi(){
    const quote = apiQuotes[getRandomNumberUpTo(apiQuotes.length)];
    console.log(quote);
}

function getRandomQuoteFromLocalFile(){
    const quote = localQuotes[getRandomNumberUpTo(localQuotes.length)];
    console.log(quote);
}

async function getQuotesFromApi() {
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

getQuotesFromApi();

function getRandomNumberUpTo(maxNumber) {
    return Math.floor(Math.random() * maxNumber)
}