const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = quote => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote;
}

